const RecordingSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 py-5">
      <h3>Фото</h3>
      <h1>2032034024.jpg</h1>
      <hr />
      <section className="grid grid-cols-5 grid-rows-1 gap-x-[40px] gap-y-0 *:*:my-2">
        <div>
          <p className="text-xs text-gray-400">Дата загрузки</p>
          <p className="font-bold">05.07.2024</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Дата съемки</p>
          <p className="font-bold">01.03.2024</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Время съемки</p>
          <p className="font-bold">15:34:39</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Кол-во животных</p>
          <p className="font-bold">3</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Видов животных</p>
          <p className="font-bold">2</p>
        </div>
      </section>
      {/*<td>05.07.2024</td>
      <td>01.06.2024</td>
      <td>10:10:10</td>
      <td>2</td>
      <td>2</td> */}
    </div>
  );
};

export default RecordingSkeleton;
