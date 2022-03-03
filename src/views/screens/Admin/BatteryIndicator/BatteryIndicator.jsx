//Packages
import React from "react";

//Componentes
import { Chart } from "react-google-charts";

//Hooks
import useViews from "../../..";
import useControllers from "../../../../controllers";

//Styles
import { StyledChart } from "./BatteryIndicator.styles";

const data = [
  ["Task", "Hours per Day"],
  ["Especialización", 36],
  ["Maestria", 20],
  ["Pregrado", 179],
  ["Desconocidos", 15],
];

const options = {
  title: "Indice de continuidad en educacion de los egrasados gimnasistas",
  is3D: true,
};

const data2 = [
  ["Element", "Total", { role: "style" }],
  ["Profesional", 209, "#b87333"], // RGB value
  ["Tecnólogo", 73, "silver"], // English color name
  ["Técnico", 38, "gold"],
  ["No continuaron estudios", 11, "color: #e5e4e2"], // CSS-style declaration
];

const BatteryIndicator = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useBatteryIndicators } = useAdminControllers();
  const { dataCorrectiveActions, optionsChartCorrectiveActions } =
    useBatteryIndicators();

  return (
    <AdminLayout>
      <h2 className="text-center font-bold text-2xl">
        {" "}
        Bateria de indicadores{" "}
      </h2>

      <StyledChart>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={dataCorrectiveActions}
          options={optionsChartCorrectiveActions}
        />

        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data2}
          options={{ title: "Tipo de estudio" }}
        />
      </StyledChart>
    </AdminLayout>
  );
};

export default BatteryIndicator;
