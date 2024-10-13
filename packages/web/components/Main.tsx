"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const App = dynamic(() => import("./App"), { ssr: false });

export interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <Suspense
      fallback={
        <div className="font-hail text-[1.5rem] text-[#67FF5B]">loading...</div>
      }
    >
      <App />
    </Suspense>
  );
};

export default Main;
