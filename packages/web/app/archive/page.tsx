import ArchiveContainer from "@/components/ArchiveContainer";

const ArchivePage = () => {
  return (
    <main className="h-screen-ios min-h-screen-ios flex h-screen min-h-screen flex-col bg-white">
      <div className="absolute inset-x-0 inset-y-0">
        <video
          autoPlay
          muted
          controls={false}
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source
            src="https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/background_resized.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <ArchiveContainer />
    </main>
  );
};

export default ArchivePage;
