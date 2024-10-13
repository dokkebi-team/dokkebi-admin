import Main from "@/components/Main";
import { Suspense } from "react";

export interface IndexPageProps {}

const IndexPage = ({}: IndexPageProps) => {
  return (
    <main className="h-screen-ios min-h-screen-ios flex h-screen min-h-screen flex-col items-center justify-center">
      <Suspense
        fallback={
          <div className="font-hail text-[1.5rem] text-[#67FF5B]">
            loading...
          </div>
        }
      >
        <Main />
      </Suspense>
    </main>
  );
};

export default IndexPage;
