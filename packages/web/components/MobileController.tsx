import { mobileKeyControlsAtom } from "@/stores/map";
import { useSetAtom } from "jotai";
import { Joystick } from "react-joystick-component";

export interface MobileControllerProps {}

const MobileController = ({}: MobileControllerProps) => {
  const setMobileKeyControls = useSetAtom(mobileKeyControlsAtom);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 flex justify-center px-10 pb-safe-offset-10 lg:hidden">
      <div className="pointer-events-auto select-none">
        <Joystick
          size={100}
          baseColor="#091eaa69"
          stickColor="#091eaa"
          move={(e) => {
            if (e.direction === "FORWARD") {
              setMobileKeyControls({
                up: true,
                down: false,
                left: false,
                right: false,
              });
            } else if (e.direction === "BACKWARD") {
              setMobileKeyControls({
                up: false,
                down: true,
                left: false,
                right: false,
              });
            } else if (e.direction === "LEFT") {
              setMobileKeyControls({
                up: false,
                down: false,
                left: true,
                right: false,
              });
            } else if (e.direction === "RIGHT") {
              setMobileKeyControls({
                up: false,
                down: false,
                left: false,
                right: true,
              });
            }
          }}
          stop={() => {
            setMobileKeyControls({
              up: false,
              down: false,
              left: false,
              right: false,
            });
          }}
        />
      </div>
    </div>
  );
};

export default MobileController;
