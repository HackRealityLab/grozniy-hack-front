import RecordingSkeleton from "@/components/Recording/RecordingSkeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecognizedPhotosPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex gap-10 items-center">
        <Button variant="secondary" asChild>
          <Link href="/">На главную</Link>
        </Button>
        <h2 className="text-foreground text-3xl font-bold">
          Распознанные записи
        </h2>
      </section>
      <section>
        <RecordingSkeleton />
      </section>
    </div>
  );
};

export default RecognizedPhotosPage;