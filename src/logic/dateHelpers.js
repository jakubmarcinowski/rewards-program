export const getMonthNumber = (date) =>
  Number(
    new Intl.DateTimeFormat("pl", {
      month: "numeric",
    }).format(date ? new Date(date) : new Date())
  );
