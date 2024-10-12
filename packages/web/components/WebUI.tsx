import React, { useState } from "react";
import MobileController from "./MobileController";

const menuVariants = {
  show: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      type: "spring",
    },
  },
} as const;

export interface WebUIProps {
  children: React.ReactNode;
  isAppStarted: boolean;
  isPageOpened: boolean;
  showMenu: boolean;
  showHeader: boolean;
  onMoveArchivePage: () => void;
}

const WebUI = ({
  children,
  isAppStarted,
  showMenu,
  onMoveArchivePage,
}: WebUIProps) => {
  const [useNavAnimation, setUseNavAnimation] = useState(false);

  return (
    <div>
      <main className="relative flex items-center justify-center">
        {children}
        {isAppStarted && <MobileController />}
        {/* {isAppStarted && (
            <>
              <motion.button
                className="absolute bottom-6 left-6 h-[9.375rem] w-[9.375rem] bg-[url('/club.png')] bg-cover bg-center transition-transform hover:scale-110"
                animate={showMenu ? "show" : "hide"}
                variants={menuVariants}
                onClick={async () => {
                  flushSync(() => {
                    setUseNavAnimation(true);
                  });
                  await onMoveArchivePage();
                  setUseNavAnimation(false);
                }}
              >
                <span className="opacity-0">!</span>
              </motion.button>
              <motion.button
                className="absolute bottom-6 right-6 h-[9.375rem] w-[9.375rem] bg-[url('/dict.png')] bg-cover bg-center grayscale transition-transform"
                animate={showMenu ? "show" : "hide"}
                variants={menuVariants}
              >
                <span className="opacity-0">!</span>
              </motion.button>
            </>
          )} */}
        {/* <NavPage show={router.query.pageName === 'about'}>
          <About />
        </NavPage> */}
      </main>
    </div>
  );
};

export default WebUI;
