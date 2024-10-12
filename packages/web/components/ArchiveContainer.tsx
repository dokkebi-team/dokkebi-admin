"use client";

import { useMapConfigsQuery } from "@/queries/map-configs";
import { archiveItemsAtom, selectedArchiveItemAtomId } from "@/store/archive";
import { useAtom, useAtomValue } from "jotai";
import * as React from "react";
import ArchiveItemInfoDialog from "./ArchiveItemInfoDialog";
import BlackholeObjects from "./BlackholeObjects";

export interface ArchiveContainerProps {
  children?: React.ReactNode;
}

const ArchiveContainer = ({}: ArchiveContainerProps) => {
  const { data: mapConfigsData } = useMapConfigsQuery();
  const [selectedArchiveItemId, setSelectedArchiveItemId] = useAtom(
    selectedArchiveItemAtomId,
  );
  const { archiveItemById } = useAtomValue(archiveItemsAtom);

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

  if (!mapConfigsData) {
    return null;
  }

  return (
    <>
      <BlackholeObjects onSelectArchiveItem={setSelectedArchiveItemId} />
      <ArchiveItemInfoDialog
        open={!!selectedArchiveItem}
        data={selectedArchiveItem}
        onClose={() => setSelectedArchiveItemId(undefined)}
      />
    </>
  );
};

export default ArchiveContainer;
