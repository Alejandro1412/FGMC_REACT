//Packages
import React from "react";

//Componentes
import { Chart } from "react-google-charts";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

//Hooks
import useViews from "../../..";
import useControllers from "../../../../controllers";

//Styles
import { StyledAccordeon, StyledChart } from "./BatteryIndicator.styles";
import "react-accessible-accordion/dist/fancy-example.css";

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
      <>
        <h2 className="text-center font-bold text-2xl">
          {" "}
          Bateria de indicadores{" "}
        </h2>
        <StyledAccordeon>
          <Accordion className="mt-10" allowMultipleExpanded>
            <StyledChart>
              <AccordionItem className="w-full lg:w-11/12">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Estadisticas Acciones correctivas
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="itemAccordion">
                  <Chart
                    chartType="PieChart"
                    data={dataCorrectiveActions}
                    options={optionsChartCorrectiveActions}
                  />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full lg:w-11/12">
                <AccordionItemHeading>
                  <AccordionItemButton>Estadisticas dos</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="itemAccordion">
                  <Chart chartType="PieChart" data={data} options={options} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="w-full lg:w-11/12">
                <AccordionItemHeading>
                  <AccordionItemButton>Estadisticas tres</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="itemAccordion">
                  <Chart
                    chartType="ColumnChart"
                    data={data2}
                    options={{
                      title: "Tipo de estudio",
                    }}
                  />
                </AccordionItemPanel>
              </AccordionItem>
            </StyledChart>
          </Accordion>
        </StyledAccordeon>
      </>
    </AdminLayout>
  );
};

export default BatteryIndicator;
