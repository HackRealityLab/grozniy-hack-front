import CameraTrap from "@/components/CameraTrap";
import { Button } from "@/components/ui/button";

const ArchivePage = () => {
  return (
    <div className="w-[68vw]">
      <h2 className="text-foreground text-3xl font-bold mb-10">
        Архив фотоловушек
      </h2>
      <section className="flex flex-wrap gap-10">
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
      </section>
    </div>
  );
};

export default ArchivePage;
