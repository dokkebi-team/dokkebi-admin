"use client";

import { getUrlOrigin } from "@/app/resources/components/ResourcesTable";
import mapImg from "@/public/images/map_optimized.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import ky from "ky";
import { useMemo } from "react";
import { GRID_COLS, GRID_ROWS } from "../constants";
import DotEditor from "./DotEditor";

export interface BarrierContainerProps {}

const BarrierContainer = ({}: BarrierContainerProps) => {
  const initialData = useMemo(() => {
    return new Array<number[]>(GRID_ROWS).fill(new Array(GRID_COLS).fill(0));
  }, []);
  const { data, refetch } = useQuery({
    queryKey: ["barrierMapData"],
    queryFn: async () => {
      const data = await ky
        .get(`${getUrlOrigin()}/api/map/barrier`)
        .json<number[][]>();

      if (!data) {
        return initialData;
      }

      if (data.length !== GRID_ROWS || data[0].length !== GRID_COLS) {
        return paddingArray(
          data,
          GRID_ROWS,
          new Array<number>(GRID_COLS).fill(0)
        ).map((row) => paddingArray(row, GRID_COLS, 0));
      }

      return data;
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const mapMutation = useMutation({
    mutationKey: ["barrierMapData"],
    mutationFn: async (data: number[][]) => {
      await ky
        .put(`${getUrlOrigin()}/api/map/barrier`, {
          json: {
            data,
          },
        })
        .json();
    },
    onSettled: async () => {
      await refetch();
    },
  });

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col items-center relative">
      <DotEditor
        rows={GRID_ROWS}
        cols={GRID_COLS}
        imageUrl={mapImg.src}
        data={data}
        onSave={mapMutation.mutateAsync}
      />
    </div>
  );
};

const paddingArray = <T, F>(arr: T[], length: number, fallback: F) => {
  return new Array(length).fill(null).map((_, index) => arr[index] ?? fallback);
};

export default BarrierContainer;
