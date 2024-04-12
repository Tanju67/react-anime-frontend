export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
