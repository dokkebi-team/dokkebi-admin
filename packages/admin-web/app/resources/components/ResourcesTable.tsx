"use client";

import { useMessageDialog } from "@/components/MessageDialog";
import { Button } from "@/components/ui/button";
import { PrismaDBMainTypes } from "@dokkebi-world/db";
import { Mob } from "@dokkebi-world/db/src/generated/client";
import {
  DataEditor,
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
} from "@glideapps/glide-data-grid";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { produce } from "immer";
import ky from "ky";
import Image from "next/image";
import { useCallback } from "react";

export const isProd = process.env.NODE_ENV === "production";

export const isDeployProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export const getUrlOrigin = () => {
  if (isDeployProd) {
    return "https://dokkebi-admin-web.vercel.app";
  } else if (isProd) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    return `http://localhost:${process.env.PORT || "3000"}`;
  }
};

const columns: (GridColumn & { id: keyof Mob })[] = [
  {
    title: "인벤토리 No",
    id: "inventoryNo",
    width: 100,
  },
  {
    title: "위치",
    id: "regionId",
    width: 50,
  },
  {
    title: "일러스트",
    id: "illustrationUrl",
    width: 80,
  },
  {
    title: "Notes",
    id: "notes",
  },
  {
    title: "종족",
    id: "type",
  },
  {
    title: "크기",
    id: "size",
  },
  {
    title: "타입",
    id: "type",
  },
  {
    title: "이야기",
    id: "notes",
  },
  {
    title: "랭크",
    id: "rank",
  },
];

export interface ResourcesTableProps {}

const ResourcesTable = ({}: ResourcesTableProps) => {
  const { openDialog, closeDialog } = useMessageDialog();
  const { data, refetch } = useSuspenseQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const res = (await ky
        .get(`${getUrlOrigin()}/api/mobs`)
        .json()) as PrismaDBMainTypes.Mob[];

      return res;
    },
  });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["resources"],
    onMutate: async ({ id, values }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["resources"] });

      // Snapshot the previous value
      const previousData = queryClient.getQueryData(["resources"]);

      // Optimistically update to the new value
      queryClient.setQueryData(
        ["resources"],
        (oldResources: PrismaDBMainTypes.Mob[]) => {
          return produce(oldResources, (draft) => {
            const index = draft.findIndex((d) => d.id === id);
            const mob = draft[index];
            for (const { key, value } of values) {
              (mob[key] as any) = value;
            }
          });
        }
      );

      // Return a context object with the snapshotted value
      return { previousData };
    },
    mutationFn: ({
      id,
      values,
    }: {
      id: number;
      values: { key: keyof PrismaDBMainTypes.Mob; value: any }[];
    }) => {
      return ky.put(`/api/mobs`, {
        json: {
          id,
          values,
        },
      });
    },
    onError: (err, data, context) => {
      queryClient.setQueryData(["resources"], context?.previousData);
    },
    onSettled: () => {
      return refetch();
    },
  });

  const getCellContent = useCallback(
    (cell: Item): GridCell => {
      if (!data) {
        return {
          kind: GridCellKind.Text,
          allowOverlay: false,
          displayData: "",
          data: "",
        };
      }
      const [col, row] = cell;
      const dataRow = data[row];
      const indexes = columns.map((c) => c.id);
      const id = indexes[col];
      const d = dataRow[indexes[col]];

      if (id === "illustrationUrl") {
        return {
          kind: GridCellKind.Image,
          allowOverlay: true,
          displayData: [d as string],
          data: [d as string],
          readonly: false,
        };
      }

      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        displayData: d?.toString() ?? "",
        data: d?.toString() ?? "",
        readonly: false,
      };
    },
    [data]
  );

  return (
    <DataEditor
      height={"100%"}
      width={"100%"}
      columns={columns}
      rows={data.length}
      getCellContent={getCellContent}
      onCellEdited={(cell, e) => {
        const [colIndex, rowIndex] = cell;
        const id = data[rowIndex].id;
        const key = columns[colIndex].id;
        const value = e.data;

        openDialog({
          title: "수정하시겠습니까?",
          description: `${key}: ${value}`,
          onConfirm: async () => {
            await mutate({
              id,
              values: [
                {
                  key,
                  value,
                },
              ],
            });
            closeDialog();
          },
        });
        const col = columns[colIndex];
      }}
      imageEditorOverride={({ urls }) => {
        return (
          <div>
            <div>
              <Button type="button">upload</Button>
            </div>
            <Image src={urls[0]} width={200} height={200} alt="" />
          </div>
        );
      }}
    />
  );
};

export default ResourcesTable;
