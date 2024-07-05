const StatsPage = () => {
  return (
    <div>
      <h2 className="text-foreground text-3xl font-bold mb-10">
        Статистика и сводка по записям
      </h2>
      <div>Возможные элементы статистики для всех фотоловушек:</div>
      <div className="my-5">
        <p className="text-xl font-bold">
          Соотношение количества животных на фотоловушках{" "}
        </p>
        <p className="text-gray-400">*тут график-пирог*</p>
      </div>
      <p>Ещё какие-то метрики...</p>
    </div>
  );
};

export default StatsPage;
