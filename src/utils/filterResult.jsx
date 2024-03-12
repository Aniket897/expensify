export const filterResult = (data, timeOption) => {
  const currentTime = Date.now();
  switch (timeOption) {
    case "Today":
      return data.filter(
        (item) => currentTime - item.timestamps < 24 * 60 * 60 * 1000
      );
    case "This Week":
      return data.filter(
        (item) => currentTime - item.timestamps < 7 * 24 * 60 * 60 * 1000
      );
    case "This Month":
      return data.filter((item) => {
        const currentDate = new Date(currentTime);
        const itemDate = new Date(item.timestamps);
        return (
          currentDate.getMonth() === itemDate.getMonth() &&
          currentDate.getFullYear() === itemDate.getFullYear()
        );
      });
    case "This Year":
      return data.filter((item) => {
        const currentDate = new Date(currentTime);
        const itemDate = new Date(item.timestamps);
        return currentDate.getFullYear() === itemDate.getFullYear();
      });
    default:
      return data;
  }
};
