"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const CameraTrap = () => {
  return (
    <div className="flex-[40%] border-b p-3">
      <p>
        Фотоловушка №<span className="text-red-500">123</span>
      </p>
      <p>
        Распознано различных животных на фотоловушке №
        <span className="text-red-500">123</span>:{" "}
        <span className="text-red-500">666</span>
      </p>
      <p>
        Ещё какие-то метрики по фотоловушке:{" "}
        <span className="text-red-500">будут тут</span>
      </p>
      <div className="flex items-center gap-4">
        <Button>
          <Link href="/cameratraps/1">Подробнее</Link>
        </Button>
        <Button onClick={() => alert("В разработке")}>Удалить</Button>
      </div>
    </div>
  );
};

export default CameraTrap;
