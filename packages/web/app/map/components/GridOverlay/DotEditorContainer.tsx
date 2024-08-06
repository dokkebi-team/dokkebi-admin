"use client";

import { getUrlOrigin } from "@/app/resources/components/ResourcesTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import mapImg from "@/public/images/map_optimized.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import ky from "ky";
import { useMemo } from "react";
import DotEditor from "./DotEditor";

const rows = 340;
const cols = 124;

export interface DotEditorContainerProps {}

const DotEditorContainer = ({}: DotEditorContainerProps) => {
  const initialData = useMemo(() => {
    return new Array<number[]>(rows).fill(new Array(cols).fill(0));
  }, []);
  const { data, refetch } = useQuery({
    queryKey: ["barrierMapData"],
    queryFn: async () => {
      const data = await ky.get(`${getUrlOrigin()}/api/map`).json<number[][]>();

      if (!data) {
        return initialData;
      }

      if (data.length !== rows || data[0].length !== cols) {
        return paddingArray(data, rows, new Array<number>(cols).fill(0)).map(
          (row) => paddingArray(row, cols, 0)
        );
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
        .put(`${getUrlOrigin()}/api/map`, {
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
    <>
      <div className="flex-none mb-4">
        <Select defaultValue="barrier">
          <SelectTrigger className="w-[11.25rem]">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="barrier">장애물 구분</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-1 flex-col items-center relative">
        <DotEditor
          rows={rows}
          cols={cols}
          imageUrl={mapImg.src}
          data={data}
          onSave={mapMutation.mutateAsync}
        />
      </div>
    </>
  );
};

const paddingArray = <T, F>(arr: T[], length: number, fallback: F) => {
  return new Array(length).fill(null).map((_, index) => arr[index] ?? fallback);
};

export default DotEditorContainer;
