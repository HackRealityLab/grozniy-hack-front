"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const CameraTrap = () => {
  return (
    <div className="border-b p-3">
      <h3 className="text-2xl font-bold">
        Фотоловушка №<span className="text-red-500">123</span>
      </h3>
      <section className="grid grid-cols-6 grid-rows-1 my-2">
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Дата загрузки</h4>
          <div className="">24.05.2024</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Дата съемки</h4>
          <div className="">24.05.2024</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Время съемки</h4>
          <div className="">14:56:13 - 15:22:44</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Фотографий</h4>
          <div className="">300</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Кол-во животных</h4>
          <div className="">3</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Видов животных</h4>
          <div className="">2</div>
        </div>
      </section>
      <section className="mb-5">
        <p className="text-xs text-gray-400">Распознанные животные</p>
        <div className="p-1 flex gap-2">
          <div className="flex gap-2 py-0.5 px-3 items-center bg-green-500 border border-green-500 rounded-3xl text-white">
            <p>Олень обыкновенный</p>
            <p className="text-gray-200 text-lg">2</p>
          </div>
          <div className="flex gap-2 py-0.5 px-3 items-center bg-green-500 border border-green-500 rounded-3xl text-white">
            <p>Енотовидная собака</p>
            <p className="text-gray-200 text-lg">2</p>
          </div>
          <div className="flex gap-2 py-0.5 px-3 items-center bg-green-500 border border-green-500 rounded-3xl text-white">
            <p>Лось необыкновенный</p>
            <p className="text-gray-200 text-lg">2</p>
          </div>
        </div>
      </section>
      <section>
        <p className="text-xs text-gray-400">Время распознания животных</p>
        <div>
          <h5 className="text-lg font-semibold">Олень обыкновенный</h5>
          <div className="flex flex-wrap gap-2 *:text-blue-600">
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold">Олень необыкновенный</h5>
          <div className="flex flex-wrap gap-2 *:text-blue-600">
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
            <p>15:22:44</p>
          </div>
        </div>
      </section>

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
