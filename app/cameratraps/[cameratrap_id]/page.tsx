const CameraTrapPage = ({ params }: { params: { cameratrap_id: string } }) => {
  return (
    <div>
      <h2 className="text-foreground text-3xl font-bold mb-10">
        Страница фотоловушки под номером{" "}
        <span className="text-red-500">{params.cameratrap_id}</span>
      </h2>
      <div>
        <p>
          Метрики фотоловушки (надо знать, какие именно метрики придут с бэка)
        </p>
        <p>
          Всего видов животных на фотоловушке:{" "}
          <span className="text-red-500">5</span>
        </p>
        <p>
          Всего животных на фотоловушке:{" "}
          <span className="text-red-500">13</span>
        </p>
        <p>
          Дата загрузки: <span className="text-red-500">06.07.2024</span>
        </p>
        <p>
          Дата съемки: <span className="text-red-500">23.04.2024</span>
        </p>
        <p>
          Примерная продолжительность съемки:{" "}
          <span className="text-red-500">23:54 минут(-ы)</span>
        </p>
      </div>
    </div>
  );
};

export default CameraTrapPage;
