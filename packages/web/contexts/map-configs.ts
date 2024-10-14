import { createContext } from "@/modules/create-context";
import { BoundaryItem, MobConfig } from "@/types/common";
import { PrismaDBMainTypes } from "@dokkebi-world/db";

const [MapConfigsProvider, useMapConfigs, MapConfigsContext] = createContext<{
  mobList: PrismaDBMainTypes.Mob[];
  mobConfigs: Record<string, MobConfig>;
  boundaryData: BoundaryItem[];
}>();

export { MapConfigsContext, MapConfigsProvider, useMapConfigs };
