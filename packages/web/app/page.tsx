import Main from "@/components/Main";

export interface IndexPageProps {}

const IndexPage = ({}: IndexPageProps) => {
  return (
    <main className="h-screen-ios min-h-screen-ios flex h-screen min-h-screen flex-col items-center justify-center">
      <Main />
    </main>
  );
};

export default IndexPage;
