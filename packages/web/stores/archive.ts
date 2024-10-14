import { groups, items } from "@/generated/data";
import { ArchiveItem } from "@/types/common";
import { atom } from "jotai";

export const ARCHIVE_ITEMS = [
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

const archiveItemById = ARCHIVE_ITEMS.reduce(
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
  archiveItems: ARCHIVE_ITEMS,
  archiveItemById,
});

export const selectedArchiveItemIdAtom = atom<string | undefined>(undefined);

export const selectedTagAtom = atom<string | undefined>(undefined);
