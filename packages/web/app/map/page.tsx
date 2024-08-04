import BreadCrumb from "@/components/Breadcrumb";
import DotEditorContainer from "./components/GridOverlay/DotEditorContainer";

const breadcrumbItems = [{ title: "Map", link: "/map" }];

const MapPage = async () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col p-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />

      <DotEditorContainer />
    </div>
  );
};

export default MapPage;
