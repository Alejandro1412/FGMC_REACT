import _ from "lodash";
import React from "react";

//Components
import AliceCarousel from "react-alice-carousel";

//Hooks
import useViews from "../../..";
import useControllers from "../../../../controllers";

//Assets
import imageFmgc from "../../../../assets/images/Capture.PNG";
import imageFmgcDos from "../../../../assets/images/Capture2.PNG";

//Styles carousel
import "react-alice-carousel/lib/alice-carousel.css";

const AdminDashboard = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useAdminHome } = useAdminControllers();
  const { optionsNearCorrectiveActions } = useAdminHome();

  const items = [
    <img
      src={imageFmgc}
      alt="fgmcUno"
      onDragStart={handleDragStart}
      className="h-96 object-cover w-full"
    />,
    <img
      src={imageFmgcDos}
      alt="fgmcDos"
      onDragStart={handleDragStart}
      className="h-96 object-cover w-full"
    />,
  ];

  return (
    <AdminLayout>
      <h2 className="text-center font-bold text-2xl mb-10"> Nuestra sede </h2>

      <AliceCarousel mouseTracking items={items} />

      {optionsNearCorrectiveActions.length > 0 ? (
        <>
          <h2 className="font-bold text-2xl mb-10 underline">
            {" "}
            Acciones correctivas a vencer{" "}
          </h2>
          <ul className="list-disc pl-5">
            {_.map(optionsNearCorrectiveActions, (correctiveActions, idx) => {
              return (
                <li key={`item-${idx}`}>
                  {" "}
                  La accion correctiva con problema:{" "}
                  <span className="font-bold">
                    {correctiveActions.descripcionProblema}
                  </span>{" "}
                  esta proximo a vencer en: {correctiveActions.daysToExpired}
                  {`${correctiveActions.daysToExpired === 1 ? "dia" : " dias"}`}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h2 className="font-bold text-2xl mb-10 underline">
          {" "}
          No hay acciones correctivas a vencer{" "}
        </h2>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
