"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const CameraTrap = () => {
  return (
    <div className="border-b p-3">
      <h3 className="text-2xl font-bold">
        Фотоловушка №<span>00034</span>
      </h3>
      <section className="grid grid-cols-6 grid-rows-1 my-2">
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Дата загрузки</h4>
          <div className="">03.05.2024</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Дата съемки</h4>
          <div className="">07.07.2024</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Время съемки</h4>
          <div className="">14:56:13 - 15:22:44</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Фотографий</h4>
          <div className="">12</div>
        </div>
        <div className="flex flex-col gap-4 mx-2 p-1">
          <h4 className="text-xs text-gray-400">Кол-во животных</h4>
          <div className="">4</div>
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
          {/* <div className="flex gap-2 py-0.5 px-3 items-center bg-green-500 border border-green-500 rounded-3xl text-white">
            <p>Лось обыкновенный</p>
            <p className="text-gray-200 text-lg">2</p>
          </div> */}
        </div>
      </section>
      <section>
        <p className="text-xs text-gray-400">Время распознания животных</p>
        <div className="mb-5">
          <h5 className="text-lg font-semibold">Олень обыкновенный</h5>
          <div className="flex flex-col gap-2 *:text-blue-600">
            <p>03.05.2019 15:22:10</p>
            <p>03.05.2019 15:24:32</p>
            <p>03.05.2019 15:30:13</p>
            <p>03.05.2019 15:32:43</p>
            <p>03.05.2019 20:32:37</p>
            <p>03.05.2019 20:33:03</p>
            <p>04.05.2019 09:55:06</p>
            <p>04.05.2019 10:30:19</p>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold">Енотовидная собака</h5>
          <div className="flex flex-col gap-2 *:text-blue-600">
            <p>03.05.2019 17:28:14</p>
            <p>03.05.2019 18:21:44</p>
            <p>03.05.2019 19:11:32</p>
            <p>03.05.2019 19:54:41</p>
            <p>03.05.2019 20:01:12</p>
            <p>03.05.2019 20:13:05</p>
            <p>04.05.2019 20:14:31</p>
            <p>04.05.2019 20:15:59</p>
          </div>
        </div>
      </section>
      <div className="flex items-center gap-4 mt-5">
        <Button>
          <Link href="/cameratraps/1">Подробнее</Link>
        </Button>
        <Button onClick={() => alert("В разработке")}>Удалить</Button>
      </div>
    </div>
  );
};

export default CameraTrap;
