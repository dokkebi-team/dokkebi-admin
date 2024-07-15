import BreadCrumb from "@/components/Breadcrumb";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import mapImg from "@/public/images/map_optimized.png";
import Image from "next/image";
import { GridOverlay } from "./components/GridOverlay";

const breadcrumbItems = [{ title: "Map", link: "/map" }];

const MapPage = async () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col p-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex-none mb-4">
        <Select defaultValue="barrier">
          <SelectTrigger className="w-[11.25rem]">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="barrier">장애물 구분</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="flex-1">
        <GridOverlay rows={340} cols={124}>
          <Image src={mapImg} alt="" />
        </GridOverlay>
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default MapPage;
