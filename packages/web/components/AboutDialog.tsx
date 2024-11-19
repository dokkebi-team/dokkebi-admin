import dokkebifestMd from "@/assets/about-dokkebifest.md";
import dokkebiworldMd from "@/assets/about-dokkebiworld.md";
import { cn } from "@/utils/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion, useAnimation } from "framer-motion";
import Markdown from "markdown-to-jsx";
import * as React from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

export interface AboutDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const AboutDialog = ({ ...props }: AboutDialogProps) => {
  const animationControls = useAnimation();

  useEffect(() => {
    if (props.open) {
      setTimeout(() => {
        animationControls.start({
          opacity: 1,
        });
      });
    }
  }, [props.open]);

  return (
    <Dialog {...props}>
      <DialogContent
        onPointerDownOutside={(e) => {
          e.preventDefault();
        }}
        asChild
        className={cn(
          "h-screen min-h-screen min-w-full border-none bg-black p-0 outline-none min-h-screen-ios h-screen-ios sm:rounded-none",
        )}
      >
        <div>
          <DialogTitle hidden>허수깨비의 모자</DialogTitle>
          <DialogDescription hidden>허수깨비의 모자</DialogDescription>
          <motion.div
            className="absolute inset-x-0 inset-y-0 bg-[radial-gradient(#5f5f5f_0,#06021E_70%)]"
            initial={{
              opacity: 0,
            }}
            animate={animationControls}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          />
          <div className="flex w-full justify-center overflow-hidden pt-safe-offset-20">
            <Tabs className="flex w-full flex-col items-center overflow-hidden">
              <div className="flex max-w-[40rem] justify-center px-5">
                <TabsList className="z-0 flex justify-center">
                  <TabsTrigger
                    value="dokkebiworld"
                    className="px-4 text-[1rem] font-bold text-[#8ed3fb] data-[state=active]:text-[#12F085] data-[state=active]:underline md:text-xl"
                  >
                    도깨비월드
                  </TabsTrigger>
                  <TabsTrigger
                    value="dokkebifest"
                    className="px-4 text-[1rem] font-bold text-[#8ed3fb] data-[state=active]:text-[#12F085] data-[state=active]:underline md:text-xl"
                  >
                    도깨비 페스티벌 (2024)
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="dokkebiworld" asChild>
                <Content>
                  <div className="markdown pt-4">
                    <Markdown>{dokkebiworldMd}</Markdown>
                  </div>
                </Content>
              </TabsContent>
              <TabsContent value="dokkebifest" asChild>
                <Content>
                  <div className="markdown">
                    <Markdown>{dokkebifestMd}</Markdown>
                  </div>
                </Content>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <ScrollArea
      className="mt-6 w-full"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col items-center pb-safe-offset-20"
      >
        <p className="max-w-[40rem] px-5 text-[#8ed3fb]">{children}</p>
      </motion.div>
    </ScrollArea>
  );
};

export default AboutDialog;
