import { useMapConfigs } from "@/contexts/map-configs";
import animalCardBackgroundPoster from "@/public/card-backgrounds/animal.png";
import castleCardBackgroundPoster from "@/public/card-backgrounds/castle.png";
import dokkebiCardBackgroundPoster from "@/public/card-backgrounds/dokkebi.png";
import eggCardBackgroundPoster from "@/public/card-backgrounds/egg.png";
import godCardBackgroundPoster from "@/public/card-backgrounds/god.png";
import pagodaCardBackgroundPoster from "@/public/card-backgrounds/pagoda.png";
import plantCardBackgroundPoster from "@/public/card-backgrounds/plant.png";
import soulCardBackgroundPoster from "@/public/card-backgrounds/soul.png";
import spiritCardBackgroundPoster from "@/public/card-backgrounds/spirit.png";
import stoneCardBackgroundPoster from "@/public/card-backgrounds/stone.png";
import thingsCardBackgroundPoster from "@/public/card-backgrounds/things.png";
import animalSymbolImage from "@/public/symbols/animal.png";
import castleSymbolImage from "@/public/symbols/castle.png";
import dokkebiSymbolImage from "@/public/symbols/dokkebi.png";
import eggSymbolImage from "@/public/symbols/egg.png";
import godSymbolImage from "@/public/symbols/god.png";
import pagodaSymbolImage from "@/public/symbols/pagoda.png";
import plantSymbolImage from "@/public/symbols/plant.png";
import soulSymbolImage from "@/public/symbols/soul.png";
import spiritSymbolImage from "@/public/symbols/spirit.png";
import stoneSymbolImage from "@/public/symbols/stone.png";
import thingsSymbolImage from "@/public/symbols/things.png";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import FlipCard from "./FlipCard";
import Title3D from "./Title3D";
import { Button } from "./ui/button";
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
  도깨비: dokkebiSymbolImage,
  돌: stoneSymbolImage,
  동물: animalSymbolImage,
  만물: thingsSymbolImage,
  성: castleSymbolImage,
  식물: plantSymbolImage,
  신: godSymbolImage,
  알: eggSymbolImage,
  영혼: soulSymbolImage,
  정령: spiritSymbolImage,
  탑: pagodaSymbolImage,
};

const CARD_BACKGROUND_SOURCE_BY_TYPE = {
  도깨비: "/card-backgrounds/dokkebi.mp4",
  돌: "/card-backgrounds/stone.mp4",
  동물: "/card-backgrounds/animal.mp4",
  만물: "/card-backgrounds/things.mp4",
  성: "/card-backgrounds/castle.mp4",
  식물: "/card-backgrounds/plant.mp4",
  신: "/card-backgrounds/god.mp4",
  알: "/card-backgrounds/egg.mp4",
  영혼: "/card-backgrounds/soul.mp4",
  정령: "/card-backgrounds/spirit.mp4",
  탑: "/card-backgrounds/pagoda.mp4",
};

const CARD_BACKGROUND_POSTER_BY_TYPE = {
  도깨비: dokkebiCardBackgroundPoster,
  돌: stoneCardBackgroundPoster,
  동물: animalCardBackgroundPoster,
  만물: thingsCardBackgroundPoster,
  성: castleCardBackgroundPoster,
  식물: plantCardBackgroundPoster,
  신: godCardBackgroundPoster,
  알: eggCardBackgroundPoster,
  영혼: soulCardBackgroundPoster,
  정령: spiritCardBackgroundPoster,
  탑: pagodaCardBackgroundPoster,
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
        className="aspect-[270/480] max-w-none overflow-hidden rounded-[12px] border-none bg-transparent p-0 portrait:w-[80vw] portrait:max-w-[24rem] landscape:h-[70vh] landscape:max-h-[50rem] landscape:w-auto"
      >
        <DialogTitle hidden>{mob.name}</DialogTitle>
        <div className="flex flex-col overflow-hidden">
          <FlipCard
            className="flex-1"
            frontContent={
              <div className="relative flex h-full w-full flex-col items-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0">
                  {CARD_BACKGROUND_SOURCE_BY_TYPE[mob.type] && (
                    <video
                      className="w-full"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={
                        CARD_BACKGROUND_POSTER_BY_TYPE[mob.type]
                          ? CARD_BACKGROUND_POSTER_BY_TYPE[mob.type]
                          : undefined
                      }
                    >
                      <source
                        src={CARD_BACKGROUND_SOURCE_BY_TYPE[mob.type]}
                        type="video/mp4"
                      />
                    </video>
                  )}
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
              <div className="flex w-full flex-col py-10">
                <div className="flex-none px-6">
                  <h2 className="mb-4 text-2xl font-bold">{mob.name}</h2>
                  <dl className="flex items-center space-x-4">
                    <div className="flex items-center text-sm font-semibold">
                      <dt className="text-[#005212]">지역</dt>
                      <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                      <dd>{mob.regionName}</dd>
                    </div>
                    <div className="flex items-center text-sm font-semibold">
                      <dt className="text-[#005212]">넘버</dt>
                      <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                      <dd>{mob.inventoryNo}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-3 flex-1 overflow-auto">
                  <p className="px-6">{mob.notes}</p>
                </div>
                {mob.discordChannelUrl && (
                  <div className="mt-3 px-6 text-right">
                    <Button variant="outline" asChild>
                      <a
                        href={mob.discordChannelUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        도깨비 소문
                      </a>
                    </Button>
                  </div>
                )}
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
