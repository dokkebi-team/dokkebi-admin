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

const SYMBOL_COUNT_BY_RANK = {
  S: 6,
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
};

const SYMBOL_IMAGE_SOURCE_BY_TYPE = {
  도깨비: "/symbols/dokkebi.png",
  돌: "/symbols/stone.png",
  동물: "/symbols/animal.png",
  만물: "/symbols/things.png",
  성: "/symbols/castle.png",
  식물: "/symbols/plant.png",
  신: "/symbols/god.png",
  알: "/symbols/egg.png",
  영혼: "/symbols/soul.png",
  정령: "/symbols/spirit.png",
  탑: "/symbols/pagoda.png",
};

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
      <DialogContent
        onPointerDownOutside={onClose}
        className="aspect-[270/480] max-w-none overflow-hidden rounded-[12px] border-none bg-background p-0 portrait:w-[80vw] portrait:max-w-[24rem] landscape:h-[70vh] landscape:max-h-[50rem] landscape:w-auto"
      >
        <DialogTitle hidden>{mob.name}</DialogTitle>
        <div className="flex flex-col overflow-hidden">
          <FlipCard
            className="flex-1"
            frontContent={
              <div className="relative flex h-full w-full flex-col items-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0">
                  <video className="w-full" autoPlay muted loop playsInline>
                    <source
                      src="/card-backgrounds/spirit.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="absolute left-0 right-0 top-0 flex justify-center">
                  <Title3D>{mob.name}</Title3D>
                </div>
                <div className="relative flex aspect-square w-full flex-1 items-center justify-center">
                  {!isLoadingComplete && (
                    <Skeleton className="absolute bottom-0 left-0 right-0 top-0" />
                  )}
                  <Image
                    src={mob.illustrationUrl}
                    width={240}
                    height={240}
                    alt=""
                    onLoad={() => {
                      setIsLoadingComplete(true);
                    }}
                  />
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <RankSymbols type="도깨비" rank="S" />
                </div> */}
              </div>
            }
            backContent={
              <div className="overflow-y-auto overflow-x-hidden">
                <div className="p-6 text-black">
                  <h2>{mob.name}</h2>
                  {mob.notes}
                </div>
              </div>
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface RankSymbolsProps {
  type: string;
  rank: string;
}

const RankSymbols = ({ type, rank }: RankSymbolsProps) => {
  if (!SYMBOL_COUNT_BY_RANK[rank] || !SYMBOL_IMAGE_SOURCE_BY_TYPE[type]) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <Image
        src={SYMBOL_IMAGE_SOURCE_BY_TYPE[type]}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={SYMBOL_IMAGE_SOURCE_BY_TYPE[type]}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={SYMBOL_IMAGE_SOURCE_BY_TYPE[type]}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={SYMBOL_IMAGE_SOURCE_BY_TYPE[type]}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={SYMBOL_IMAGE_SOURCE_BY_TYPE[type]}
        width={100}
        height={100}
        alt=""
      />
    </div>
  );
};

export default MobInfoDialog;
