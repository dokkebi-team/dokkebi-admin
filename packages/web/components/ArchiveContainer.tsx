"use client";

import { groups } from "@/generated/data";
import { useMapConfigsQuery } from "@/queries/map-configs";
import {
  archiveItemsAtom,
  selectedArchiveItemIdAtom,
  selectedTagAtom,
} from "@/stores/archive";
import { GroupMetaData } from "@/types/common";
import { numWithCommas } from "@/utils/common";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import * as React from "react";
import { useState } from "react";
import ArchiveItemInfoDialog from "./ArchiveItemInfoDialog";
import BlackholeObjects from "./BlackholeObjects";
import SearchInput from "./SearchInput";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export interface ArchiveContainerProps {
  children?: React.ReactNode;
}

const ArchiveContainer = ({}: ArchiveContainerProps) => {
  const { data: mapConfigsData } = useMapConfigsQuery();
  const [selectedArchiveItemId, setSelectedArchiveItemId] = useAtom(
    selectedArchiveItemIdAtom,
  );
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom);
  const { archiveItemById, archiveItems } = useAtomValue(archiveItemsAtom);
  const [selectedGroupMetaData, setSelectedGroupMetaData] =
    useState<GroupMetaData>();
  const handleSelectItemOrGroup = (id: string) => {
    const archiveItem = archiveItemById[id];

    if (!archiveItem) {
      return;
    }

    if (archiveItem.type === "group") {
      setSelectedTag(archiveItem.data.name);
      setSelectedGroupMetaData(archiveItem.data.metaData);
    } else {
      setSelectedArchiveItemId(id);
      setSelectedGroupMetaData(undefined);
    }
  };

  const selectedArchiveItem = React.useMemo(() => {
    if (!selectedArchiveItemId) {
      return undefined;
    }

    if (!mapConfigsData) {
      return undefined;
    }

    const archiveItem = archiveItemById[selectedArchiveItemId];

    if (!archiveItem || archiveItem.type === "group") {
      return undefined;
    }

    const mobInfo = mapConfigsData.mobList.find(
      (mob) => mob.inventoryNo === archiveItem.data.inventoryNo,
    );

    if (!mobInfo) {
      return undefined;
    }

    return {
      archiveItem: archiveItem.data,
      mobInfo,
    };
  }, [archiveItemById, mapConfigsData, selectedArchiveItemId]);
  const archiveItemsGroupByTag = React.useMemo(() => {
    if (!selectedTag) {
      return [];
    }

    return archiveItems.filter((item) => {
      if (item.type === "group" && selectedTag === item.data.name) {
        return false;
      }

      return item.data.tags.includes(selectedTag);
    });
  }, [archiveItems, selectedTag]);

  if (!mapConfigsData) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {selectedTag ? (
          <BlackholeObjects
            key={selectedTag}
            selectedTag={selectedTag}
            archiveItems={archiveItemsGroupByTag}
            onSelectArchiveItem={handleSelectItemOrGroup}
            onBack={() => {
              setSelectedTag(undefined);
              setSelectedGroupMetaData(undefined);
            }}
          />
        ) : (
          <BlackholeObjects
            archiveItems={archiveItems}
            onSelectArchiveItem={handleSelectItemOrGroup}
          />
        )}
      </AnimatePresence>
      <ArchiveItemInfoDialog
        open={!!selectedArchiveItem}
        data={selectedArchiveItem}
        onSelectTag={(tag) => {
          setSelectedTag(tag);
          setSelectedArchiveItemId(undefined);

          const group = groups.find((group) => group.name === tag);

          if (group) {
            setSelectedGroupMetaData(group.metaData);
          }
        }}
        onClose={() => setSelectedArchiveItemId(undefined)}
      />
      {selectedGroupMetaData && (
        <>
          <motion.div
            className="pointer-events-none fixed inset-x-0 top-0 flex justify-center pt-8 md:pt-[10rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <dl className="pointer-events-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6">
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">참조 코드</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{selectedGroupMetaData.referenceCode}</dd>
              </div>
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">계층 구분</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{selectedGroupMetaData.hierarchy}</dd>
              </div>
              {selectedGroupMetaData.hierarchy && (
                <div className="flex items-center text-sm font-semibold">
                  <dt className="text-[#005212]">자료 출처</dt>
                  <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                  <dd>{selectedGroupMetaData.hierarchy}</dd>
                </div>
              )}
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">생산자</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{selectedGroupMetaData.producer}</dd>
              </div>
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">생산 시기</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{selectedGroupMetaData.productionDate}</dd>
              </div>
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">자료 수량</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>
                  {selectedGroupMetaData.dataCountTemplate.replace(
                    /\{.+\}/g,
                    numWithCommas(archiveItemsGroupByTag.length),
                  )}
                </dd>
              </div>
            </dl>
          </motion.div>
          <motion.div
            className="pointer-events-none fixed inset-x-0 bottom-0 flex justify-center pb-8 md:pb-[10rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ScrollArea className="max-h-[calc((100vh-9rem)/2-2rem-2rem)]">
              <p className="pointer-events-auto flex max-w-[42.5rem] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 text-center">
                {selectedGroupMetaData.hierarchyContent}
              </p>
              <ScrollBar />
            </ScrollArea>
          </motion.div>
        </>
      )}
      {!selectedTag && !selectedArchiveItem && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 flex justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="pointer-events-auto flex max-w-full justify-center">
            <SearchInput onSelectTag={setSelectedTag} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ArchiveContainer;
