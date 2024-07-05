import RecordingWithButtons from "@/components/Recording/RecordingWithButtons";

const ArchivePage = () => {
  return (
    <div className="">
      <h2 className="text-foreground text-3xl font-bold">Архив записей</h2>
      <section className="flex flex-wrap gap-10">
        <RecordingWithButtons />
        <RecordingWithButtons />
        <RecordingWithButtons />
        <RecordingWithButtons />
        <RecordingWithButtons />
        <RecordingWithButtons />
        <RecordingWithButtons />
        <RecordingWithButtons />
      </section>
    </div>
  );
};

export default ArchivePage;
