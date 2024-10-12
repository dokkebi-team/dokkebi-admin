import { Item } from "@/types";
import { PrismaDBMainTypes } from "@dokkebi-world/db";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "./ui/drawer";

export type ArchiveItemInfoDialogProps = React.ComponentPropsWithoutRef<
  typeof Drawer
> & {
  data?: { archiveItem: Item; mobInfo: PrismaDBMainTypes.Mob };
};

const ArchiveItemInfoDialog = ({
  data,
  ...rest
}: ArchiveItemInfoDialogProps) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <ImageWithTransition
        src={data.archiveItem.imageUrl}
        alt={data.archiveItem.name}
      />
      <Drawer {...rest}>
        <DrawerContent>
          <div className="flex h-[50vh] flex-col py-[3rem]">
            <h2 className="px-12 text-[24px] font-bold">
              {data.mobInfo.name || "???"}
            </h2>
            <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 px-12">
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">종족</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{data.mobInfo.type}</dd>
              </div>
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">크기</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{data.mobInfo.size}</dd>
              </div>
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">지역</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{data.mobInfo.regionName}</dd>
              </div>
              <div className="flex items-center text-sm font-semibold">
                <dt className="text-[#005212]">넘버</dt>
                <div className="mx-2 h-5 w-[2px] bg-[#12F085]" />
                <dd>{data.mobInfo.inventoryNo}</dd>
              </div>
            </dl>
            <p className="mt-8 flex-1 overflow-auto px-12">
              {data.mobInfo.notes}
            </p>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

interface ImageWithTransitionProps {
  src: string;
  alt: string;
}

const ImageWithTransition = ({ src, alt }: ImageWithTransitionProps) => {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 bottom-0 top-0 z-[60] flex h-[50vh] flex-col items-center justify-center p-10"
      initial={"hidden"}
      animate={animationControls}
      variants={animationVariants}
      transition={{ ease: "easeOut" }}
    >
      <Image
        className="pointer-events-auto h-full w-auto flex-1"
        src={src}
        alt={alt}
        width={200}
        height={200}
        onLoadingComplete={() => {
          setLoaded(true);
        }}
      />
    </motion.div>
  );
};

export default ArchiveItemInfoDialog;
