import BreadCrumb from "@/components/Breadcrumb";
import dynamic from "next/dynamic";

const ResourcesTable = dynamic(() => import("./components/ResourcesTable"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const breadcrumbItems = [{ title: "Resources", link: "/resources" }];

export interface ResourcesPageProps {}

const ResourcesPage = ({}: ResourcesPageProps) => {
  return (
    <>
      <div className="flex-1 overflow-hidden flex flex-col p-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex-1">
          <ResourcesTable />
        </div>
      </div>
      <div id="portal" />
    </>
  );
};

export default ResourcesPage;
