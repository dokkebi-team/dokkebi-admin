"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";
import BarrierContainer from "./BarrierContainer";
import MobsContainer from "./MobsContainer";

export interface MapContainerProps {}

const MapContainer = ({}: MapContainerProps) => {
  const [type, setType] = useQueryState("mapType", {
    defaultValue: "barrier",
  });

  return (
    <>
      <div className="flex-none mb-4">
        <Select defaultValue="barrier" value={type} onValueChange={setType}>
          <SelectTrigger className="w-[11.25rem]">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="barrier">장애물 구분</SelectItem>
            <SelectItem value="mobs">도깨비 배치</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {type === "barrier" ? (
        <BarrierContainer />
      ) : type === "mobs" ? (
        <MobsContainer />
      ) : null}
    </>
  );
};

export default MapContainer;
