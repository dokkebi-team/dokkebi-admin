import loadingImg from "@/public/loading.png";
import { isAppStartedAtom } from "@/stores/map";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import * as PIXI from "pixi.js";
import React, { useEffect, useState } from "react";
import BlurIn from "./BlurIn";
import { Progress } from "./ui/progress";

export interface ResourceLoaderProps {
  children: React.ReactNode;
  resources: string[];
  fallback?: React.ReactNode;
}

const ResourceLoader = ({
  children,
  resources,
  fallback,
}: ResourceLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppStarted, setIsAppStarted] = useAtom(isAppStartedAtom);
  const [progress, setProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const load = async () => {
      await PIXI.Assets.load(resources, (value) => {
        setProgress(value);
      });
      setIsLoading(false);
    };

    load();

    return () => {
      PIXI.Assets.reset();
    };
  }, [resources]);

  useEffect(() => {
    if (progress === 1) {
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 1000);
    }
  }, [progress]);

  if (isLoading || !isAppStarted) {
    return (
      <div className="flex w-4/5 max-w-[50rem] flex-col items-center pb-[8rem]">
        <div className="hidden md:block">
          <BlurIn duration={6}>
            <p className="whitespace-pre-line text-center text-[#67FF5B]">
              제주도에 위치한 &#39;도깨비공원&#39;은 &#39;이기후 교수&#39;가
              만든 조형공원이다. 2005년 개장하여 10년간 운영을 하고 지금은 폐업
              상태에 접어들었다. 운영당시, &#39;허수깨비&#39;는 허수아비의
              모습을 한 도깨비로, &#39;이기후 교수&#39;가 직접 분장하여 관람객을
              놀래키곤 했다. 하지만 2007년, 그가 갑작스러운 타계하여 공원 운영에
              어려움을 겪게 된다.{"\n\n"}그의 아들 &#39;이해강&#39;은 &#39;팀
              도깨비월드&#39;를 꾸려 도깨비공원의 조형물과 자료를 아카이브 하던
              중, 정체불명의 신호를 포착하여 &#39;도깨비월드&#39;의 존재를
              알게되었다. &#39;팀 도깨비월드&#39;는 인간이 탈을 쓰고 도깨비가
              되는 &#39;허수깨비&#39;를 아바타 삼아 &#39;도깨비월드&#39;로
              접속할 수 있었다.
              {"\n\n"}
              우리가 구현해낸 세상은 윤곽을 드러냈으나, 도깨비의 이야기를 모두
              파헤치는 것은 무리였다. 그래서 우리는 도깨비의 이야기를 더
              파헤치기 위해 &#39;도깨비월드&#39;를 세상에 공개하기로 했다.
              {"\n\n"}
              탐험자여, &#39;허수깨비&#39;가 되어 &#39;도깨비월드&#39;를
              탐험하고 도깨비의 세계를 밝혀내자.
            </p>
          </BlurIn>
        </div>
        <div
          role={isLoading ? undefined : "button"}
          onClick={() => {
            if (!isLoadingComplete) {
              return;
            }

            setIsAppStarted(true);
          }}
        >
          <Image src={loadingImg} height={300} width={300} alt="" unoptimized />
        </div>
        {/* <div className="w-full border-[1px] border-[#67FF5B]">
          <div className="border-[1px] border-transparent">
            <Progress value={progress * 100} />
          </div>
        </div> */}
        <div className="flex h-10 w-full flex-col">
          {isLoadingComplete ? (
            <motion.div
              key="button"
              className="text-center"
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
            >
              <button
                className="font-hail text-xl text-[#67FF5B]"
                onClick={() => {
                  setIsAppStarted(true);
                }}
              >
                click me
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="progress"
              className="w-full border-[1px] border-[#67FF5B]"
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <div className="border-[1px] border-transparent">
                <Progress value={progress * 100} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ResourceLoader;
