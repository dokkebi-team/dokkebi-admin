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
