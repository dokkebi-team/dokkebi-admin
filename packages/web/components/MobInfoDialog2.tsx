import { useMapConfigs } from "@/contexts/map-configs";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import FlipCard from "./FlipCard";
import Title3D from "./Title3D";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Skeleton } from "./ui/skeleton";

export interface MobInfoDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  selectedMobInventoryNo?: string;
  onClose: () => void;
}

const MobInfoDialog = ({
  selectedMobInventoryNo,
  onClose,
  onOpenChange,
  ...props
}: MobInfoDialogProps) => {
  const open = selectedMobInventoryNo !== undefined;
  const { mobList } = useMapConfigs();
  const mob = mobList.find((mob) => mob.inventoryNo === selectedMobInventoryNo);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  if (!mob) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(openValue) => {
        if (!openValue) {
          onClose();
        }

        onOpenChange?.(openValue);
      }}
      {...props}
    >
      <DialogContent onPointerDownOutside={onClose}>
        <DialogTitle hidden>{mob.name}</DialogTitle>
        <div className="flex justify-center">
          <FlipCard
            frontContent={
              <div className="flex flex-col items-center">
                <Title3D>{mob.name}</Title3D>
                <h2 className="mb-2 text-xl font-bold">{mob.name}</h2>
                <div className="relative h-[240px] w-[240px]">
                  {!isLoadingComplete && (
                    <Skeleton className="absolute bottom-0 left-0 right-0 top-0" />
                  )}
                  <Image
                    src={mob.illustrationUrl}
                    width={240}
                    height={240}
                    alt=""
                    onLoadingComplete={() => {
                      setIsLoadingComplete(true);
                    }}
                  />
                </div>
              </div>
            }
            backContent={<div>{mob.notes}</div>}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobInfoDialog;
