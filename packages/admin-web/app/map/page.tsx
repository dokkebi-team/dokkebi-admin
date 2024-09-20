import BreadCrumb from "@/components/Breadcrumb";
import { Suspense } from "react";
import MapContainer from "./components/MapContainer";

const breadcrumbItems = [{ title: "Map", link: "/map" }];

const MapPage = async () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col p-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />

      <Suspense>
        <MapContainer />
      </Suspense>
    </div>
  );
};

export default MapPage;
