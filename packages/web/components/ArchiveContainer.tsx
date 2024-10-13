"use client";

import { useMapConfigsQuery } from "@/queries/map-configs";
import {
  archiveItemsAtom,
  selectedArchiveItemIdAtom,
  selectedTagAtom,
} from "@/stores/archive";
import { AnimatePresence } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import * as React from "react";
import ArchiveItemInfoDialog from "./ArchiveItemInfoDialog";
import BlackholeObjects from "./BlackholeObjects";
import SearchInput from "./SearchInput";

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
  const handleSelectItemOrGroup = (id: string) => {
    const archiveItem = archiveItemById[id];

    if (!archiveItem) {
      return;
    }

    if (archiveItem.type === "group") {
      setSelectedTag(archiveItem.data.name);
    } else {
      setSelectedArchiveItemId(id);
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
        }}
        onClose={() => setSelectedArchiveItemId(undefined)}
      />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 flex justify-center pb-8">
        <div className="pointer-events-auto flex max-w-full justify-center">
          <SearchInput onSelectTag={setSelectedTag} />
        </div>
      </div>
    </>
  );
};

export default ArchiveContainer;
