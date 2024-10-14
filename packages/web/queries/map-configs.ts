import { WORLD_HEIGHT, WORLD_WIDTH } from "@/constants";
import { api } from "@/modules/api";
import { BoundaryItem, MobConfig } from "@/types/common";
import { PrismaDBMainTypes } from "@dokkebi-world/db";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const useMapConfigsSuspenseQuery = () => {
  const query = useSuspenseQuery({
    queryKey: ["map-configs"],
    queryFn: async () => {
      const getMobList = async () => {
        const res = await api.get("api/mobs");

        return await res.json<PrismaDBMainTypes.Mob[]>();
      };
      const getBarrierData = async () => {
        const res = await api.get("api/map/barrier", {
          timeout: 10000,
        });

        const json = await res.json<number[][]>();

        const boundaryData: BoundaryItem[] = [];

        const tileWidth = WORLD_WIDTH / json[0].length;
        const tileHeight = WORLD_HEIGHT / json.length;

        json.forEach((row, i) => {
          row.forEach((value, j) => {
            if (value === 1) {
              boundaryData.push({
                position: {
                  x: j * tileWidth,
                  y: i * tileHeight,
                },
                width: tileWidth,
                height: tileHeight,
              });
            }
          });
        });

        return boundaryData;
      };
      const getMobConfigs = async () => {
        const res = await api.get("api/map/mobs-position");

        return await res.json<Record<string, MobConfig>>();
      };

      const [mobList, boundaryData, mobConfigs] = await Promise.all([
        getMobList(),
        getBarrierData(),
        getMobConfigs(),
      ]);

      return {
        mobList,
        mobConfigs,
        boundaryData,
      };
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return query;
};

export const useMapConfigsQuery = () => {
  const query = useQuery({
    queryKey: ["map-configs"],
    queryFn: async () => {
      const getMobList = async () => {
        const res = await api.get("api/mobs");

        return await res.json<PrismaDBMainTypes.Mob[]>();
      };
      const getBarrierData = async () => {
        const res = await api.get("api/map/barrier", {
          timeout: 10000,
        });

        const json = await res.json<number[][]>();

        const boundaryData: BoundaryItem[] = [];

        const tileWidth = WORLD_WIDTH / json[0].length;
        const tileHeight = WORLD_HEIGHT / json.length;

        json.forEach((row, i) => {
          row.forEach((value, j) => {
            if (value === 1) {
              boundaryData.push({
                position: {
                  x: j * tileWidth,
                  y: i * tileHeight,
                },
                width: tileWidth,
                height: tileHeight,
              });
            }
          });
        });

        return boundaryData;
      };
      const getMobConfigs = async () => {
        const res = await api.get("api/map/mobs-position");

        return await res.json<Record<string, MobConfig>>();
      };

      const [mobList, boundaryData, mobConfigs] = await Promise.all([
        getMobList(),
        getBarrierData(),
        getMobConfigs(),
      ]);

      return {
        mobList,
        mobConfigs,
        boundaryData,
      };
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return query;
};
