import { groups, items } from "@/generated/data";
import { ArchiveItem } from "@/types";
import { atom } from "jotai";

const archiveItems = [
  ...groups.map((group) => ({
    type: "group" as const,
    id: group.id,
    data: group,
  })),
  ...items.map((item) => ({
    type: "item" as const,
    id: item.id,
    data: item,
  })),
];

const archiveItemById = archiveItems.reduce(
  (acc, archiveItem) => {
    acc[archiveItem.id] = archiveItem;
    return acc;
  },
  {} as Record<string, ArchiveItem>,
);

export const archiveItemsAtom = atom<{
  archiveItems: ArchiveItem[];
  archiveItemById: Record<string, ArchiveItem>;
}>({
  archiveItems,
  archiveItemById,
});

export const selectedArchiveItemAtomId = atom<string | undefined>(undefined);
