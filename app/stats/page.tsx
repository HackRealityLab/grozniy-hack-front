"use client";
import { PieChart } from "@mui/x-charts";

const StatsPage = () => {
  return (
    <div>
      <h2 className="text-foreground text-3xl font-bold mb-10">
        Статистика и сводка по записям
      </h2>{" "}
      <div className="my-5">
        <p className="text-xs text-gray-400 mb-4">
          Соотношение количества животных на фотоловушках
        </p>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 13, label: "#00034" },
                { id: 1, value: 23, label: "#00035" },
                { id: 2, value: 16, label: "#00036" },
              ],
            },
          ]}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default StatsPage;
