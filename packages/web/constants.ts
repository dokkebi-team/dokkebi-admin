import { groups, items } from "./generated/data";
import { dedupe } from "./utils/common";

export const WORLD_WIDTH = 2048;
export const WORLD_HEIGHT = 5614;

export const COLLISION_SYMBOL = 46657;

export const TILE_SIZE = 32;

export const TILE_MAP_ROW_SIZE = 96;

export const PLAYER_SIZE = {
  width: 16,
  height: 20,
};

export const INITIAL_POSITION = {
  x: 500,
  y: 1020,
};

export const INITIAL_POSITIONS = [
  {
    x: 500,
    y: 1020,
  },
  {
    x: 854,
    y: 436,
  },
  {
    x: 1725,
    y: 547,
  },
  {
    x: 1733,
    y: 1084,
  },
  {
    x: 810,
    y: 1424,
  },
  {
    x: 816,
    y: 1833,
  },
  {
    x: 1412,
    y: 1841,
  },
  {
    x: 1737,
    y: 2296,
  },
  {
    x: 272,
    y: 2434,
  },
  {
    x: 1060,
    y: 2824,
  },
  {
    x: 225,
    y: 2912,
  },
  {
    x: 1371,
    y: 3637,
  },
  {
    x: 538,
    y: 3824,
  },
  {
    x: 1785,
    y: 4077,
  },
  {
    x: 1103,
    y: 4496,
  },
  {
    x: 1028,
    y: 5200,
  },
];

export const VIDEOS = [
  "https://youtu.be/hIe7SBGCIg4",
  "https://youtu.be/SWHpajFlr9s",
  "https://youtu.be/yoWMu_TxfEE",
  "https://youtu.be/80gyOuzswHg",
  "https://youtu.be/9uYy9o3JKSU",
  "https://youtu.be/l1z9Fc3aR20",
  "https://youtu.be/hP81o1-7-go",
  "https://youtu.be/Ny-csc3tGwY",
  "https://youtu.be/P17_urwCukQ",
  "https://youtu.be/vqiENXphx1I",
];

export const ARCHIVE_SEARCH_DATA = [
  ...dedupe([
    ...groups.map((group) => group.tags).flat(),
    ...items.map((item) => item.tags).flat(),
  ]),
];
