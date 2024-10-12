export interface Point {
  x: number;
  y: number;
}

export interface MobConfig {
  x: number;
  y: number;
  scale: number;
  collisionConfig: number[][];
}

export interface BoundaryItem {
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
}

export interface Group {
  id: string;
  name: string;
  tags: string[];
}

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  resizedImageUrl: string;
  tags: string[];
}

export type ArchiveItem =
  | {
      type: "group";
      id: string;
      data: Group;
    }
  | {
      type: "item";
      id: string;
      data: Item;
    };
