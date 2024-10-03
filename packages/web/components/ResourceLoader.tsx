import { isAppStartedAtom } from "@/stores";
import { useSetAtom } from "jotai";
import * as PIXI from "pixi.js";
import React, { useEffect, useState } from "react";

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
  const [isClicked, setIsClicked] = useState(false);
  const setIsAppStarted = useSetAtom(isAppStartedAtom);

  useEffect(() => {
    const load = async () => {
      await PIXI.Assets.load(resources);
      setIsLoading(false);
    };

    load();

    return () => {
      PIXI.Assets.reset();
    };
  }, [resources]);

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (!isClicked) {
    return (
      <div
        className="cursor-pointer text-white"
        onClick={() => {
          setIsClicked(true);
          setIsAppStarted(true);
        }}
      >
        click me
      </div>
    );
  }

  return <>{children}</>;
};

export default ResourceLoader;
