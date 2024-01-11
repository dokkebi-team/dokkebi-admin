import dynamic from "next/dynamic";

const ResourcesTable = dynamic(() => import("./components/ResourcesTable"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export interface ResourcesPageProps {}

const ResourcesPage = ({}: ResourcesPageProps) => {
  return (
    <>
      <main className="h-screen overflow-hidden flex flex-col p-5">
        <div className="flex-none mb-4">
          <h1 className="text-lg font-bold">Resources</h1>
        </div>
        <div className="flex-1">
          <ResourcesTable />
        </div>
      </main>
      <div id="portal" />
    </>
  );
};

export default ResourcesPage;
