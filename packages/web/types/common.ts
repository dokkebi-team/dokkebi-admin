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

export interface GroupMetaData {
  // 참조 코드
  referenceCode: string;
  // 계층 구분
  hierarchy: string;
  // 자료 출처
  dataSource?: string;
  // 생산자
  producer: string;
  // 생산시기
  productionDate: string;
  // 계층 내용
  hierarchyContent: string;
  // 자료 수량
  dataCountTemplate: string;
}

export interface Group {
  id: string;
  name: string;
  tags: string[];
  metaData: GroupMetaData;
}

export interface Item {
  id: string;
  name: string;
  inventoryNo: string;
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
