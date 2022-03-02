const useQuickFunctions = () => {
  const addZeroToBeginning = (numberInString) => {
    return numberInString.padStart(2, "0");
  };

  const formatMonthWithTwoDigits = ({ month }) => {
    return month < 9 ? addZeroToBeginning(`${month + 1}`) : month + 1;
  };

  const formatDayWithTwoDigits = ({ day }) => {
    return day <= 9 ? addZeroToBeginning(`${day}`) : day;
  };

  const getYearMonthDayFromDate = ({ dateInString, format = "dmy" }) => {
    const dateAux = new Date(Date.parse(dateInString));

    const seletcFormatDate = {
      dmy: `${formatDayWithTwoDigits({
        day: dateAux.getUTCDate(),
      })}/${formatMonthWithTwoDigits({
        month: dateAux.getUTCMonth(),
      })}/${dateAux.getUTCFullYear()}`,
      ymd: `${dateAux.getUTCFullYear()}-${formatMonthWithTwoDigits({
        month: dateAux.getUTCMonth(),
      })}-${formatDayWithTwoDigits({
        day: dateAux.getUTCDate(),
      })}`,
    };

    return seletcFormatDate[format];
  };

  return { getYearMonthDayFromDate };
};

export default useQuickFunctions;
