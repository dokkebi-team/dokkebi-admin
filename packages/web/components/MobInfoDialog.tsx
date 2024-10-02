import { useMapConfigs } from "@/contexts/map-configs";
import animalImage from "@/public/symbols/animal.png";
import castleImage from "@/public/symbols/castle.png";
import dokkebiImage from "@/public/symbols/dokkebi.png";
import eggImage from "@/public/symbols/egg.png";
import godImage from "@/public/symbols/god.png";
import pagodaImage from "@/public/symbols/pagoda.png";
import plantImage from "@/public/symbols/plant.png";
import soulImage from "@/public/symbols/soul.png";
import spiritImage from "@/public/symbols/spirit.png";
import stoneImage from "@/public/symbols/stone.png";
import thingsImage from "@/public/symbols/things.png";
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
  SS: 7,
  S: 6,
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
};

const SYMBOL_IMAGE_SOURCE_BY_TYPE = {
  도깨비: dokkebiImage,
  돌: stoneImage,
  동물: animalImage,
  만물: thingsImage,
  성: castleImage,
  식물: plantImage,
  신: godImage,
  알: eggImage,
  영혼: soulImage,
  정령: spiritImage,
  탑: pagodaImage,
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
                <div className="absolute bottom-[6%] left-0 right-0 flex justify-center">
                  <RankSymbols type={mob.type} rank={mob.rank} />
                </div>
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

const size = 30;

interface RankSymbolsProps {
  type: string;
  rank: string;
}

const RankSymbols = ({ type, rank }: RankSymbolsProps) => {
  if (!SYMBOL_COUNT_BY_RANK[rank] || !SYMBOL_IMAGE_SOURCE_BY_TYPE[type]) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: SYMBOL_COUNT_BY_RANK[rank] }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-full shadow-[0_0_20px_5px_#1EFFE7]"
        >
          <Image
            src={SYMBOL_IMAGE_SOURCE_BY_TYPE[type]}
            width={size}
            height={size}
            placeholder="blur"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default MobInfoDialog;
