"use client";

import { getUrlOrigin } from "@/app/resources/components/ResourcesTable";
import { cn } from "@/utils/ui";
import {
  useMutation,
  useMutationState,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { motion } from "framer-motion";
import { produce } from "immer";
import ky from "ky";
import { useMemo, useRef, useState } from "react";

export interface TilesProps {
  className?: string;

  rows: number;
  cols: number;
}

const Tiles = ({ className, rows: rowsNum, cols: colsNum }: TilesProps) => {
  const { data, refetch } = useQuery({
    queryKey: ["barrierMapData"],
    queryFn: async () => {
      const data = await ky.get(`${getUrlOrigin()}/api/map`).json<number[][]>();

      return data ?? initialData;
    },
  });
  const queryClient = useQueryClient();
  const mutatingVariables = useMutationState<{
    rowIndex: number;
    colIndex: number;
    value: number;
  }>({
    filters: { mutationKey: ["barrierMapData"], status: "pending" },
    select: (mutation) =>
      mutation.state.variables as {
        rowIndex: number;
        colIndex: number;
        value: number;
      },
  });
  const mutationQueue = useRef<
    {
      rowIndex: number;
      colIndex: number;
      value: number;
    }[]
  >([]);
  const rows = useMemo(() => new Array(rowsNum).fill(1), [rowsNum]);
  const cols = useMemo(() => new Array(colsNum).fill(1), [colsNum]);
  const initialData = useMemo(() => {
    return new Array<number[]>(rowsNum).fill(new Array(colsNum).fill(0));
  }, [rowsNum, colsNum]);
  const [batchedQueue, setBatchedQueue] = useState<
    {
      rowIndex: number;
      colIndex: number;
      value: number;
    }[]
  >([]);
  const mapMutation = useMutation({
    mutationKey: ["barrierMapData"],
    mutationFn: async () => {
      if (batchedQueue.length === 0) {
        return;
      }

      const res = await ky
        .put(`${getUrlOrigin()}/api/map`, {
          json: batchedQueue.map((item) => ({
            ...item,
            maxRows: rowsNum,
            maxCols: colsNum,
          })),
        })
        .json<number[][]>();

      return res;
    },
    onSettled: async () => {
      await refetch();
    },
  });
  const optimisticData = useMemo(() => {
    return produce(data, (draft) => {
      if (!draft) {
        return;
      }

      if (batchedQueue.length > 0) {
        batchedQueue.forEach((variables) => {
          draft[variables.rowIndex][variables.colIndex] = variables.value;
        });
      }
    });
  }, [data, batchedQueue]);
  const batchTimer = useRef<NodeJS.Timeout | null>(null);
  const handleMutate = ({
    rowIndex,
    colIndex,
    value,
  }: {
    rowIndex: number;
    colIndex: number;
    value: number;
  }) => {
    if (batchTimer.current) {
      clearTimeout(batchTimer.current);
    }

    setBatchedQueue((prev) => {
      return [...prev, { rowIndex, colIndex, value }];
    });
    batchTimer.current = setTimeout(async () => {
      await mapMutation.mutateAsync();
      setBatchedQueue([]);
    }, 1000);
  };

  if (!data || !optimisticData) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative z-0 flex-1 h-full justify-center flex-col flex",
        mapMutation.isPending && "cursor-wait",
        className
      )}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className={`w-full flex-1 border-l dark:border-neutral-900 border-neutral-200 relative flex`}
        >
          {cols.map((_, j) => (
            <div
              key={`col` + j}
              className={cn(
                "h-full flex-1 border-[0.5px] dark:border-neutral-900 border-neutral-200 relative hover:bg-blue-500/40",
                optimisticData[i][j] === 1 && "bg-blue-500 hover:bg-blue-500"
              )}
              onClick={async () => {
                if (mapMutation.isPending) {
                  return;
                }

                handleMutate({
                  rowIndex: i,
                  colIndex: j,
                  value: data[i][j] === 1 ? 0 : 1,
                });
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Tiles;
