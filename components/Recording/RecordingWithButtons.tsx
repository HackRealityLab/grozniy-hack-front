"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import RecordingSkeleton from "./RecordingSkeleton";

const RecordingWithButtons = () => {
  return (
    <div className="flex-[40%]">
      <RecordingSkeleton />
      <div className="flex gap-5">
        <Button asChild>
          <Link href="/archieve/1">Подробнее</Link>
        </Button>
        <Button variant={"secondary"} onClick={() => alert("тык")}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default RecordingWithButtons;
