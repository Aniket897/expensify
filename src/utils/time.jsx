// export function getFormattedDateTimeFromTimestamp(timestamp) {
//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const currentDate = new Date();
//   const inputDate = new Date(timestamp);

//   const timeDifference = currentDate.getTime() - inputDate.getTime();
//   const secondsDifference = Math.floor(timeDifference / 1000);
//   const minutesDifference = Math.floor(secondsDifference / 60);
//   const hoursDifference = Math.floor(minutesDifference / 60);
//   const daysDifference = Math.floor(hoursDifference / 24);

//   if (daysDifference === 0) {
//     return (
//       "Today at " +
//       `${inputDate.getHours().toString().padStart(2, "0")}:${inputDate
//         .getMinutes()
//         .toString()
//         .padStart(2, "0")}`
//     );
//   } else if (daysDifference === 1) {
//     return (
//       "Yesterday at " +
//       `${inputDate.getHours().toString().padStart(2, "0")}:${inputDate
//         .getMinutes()
//         .toString()
//         .padStart(2, "0")}`
//     );
//   } else if (daysDifference < 7) {
//     return (
//       `${daysDifference} days ago at ` +
//       `${inputDate.getHours().toString().padStart(2, "0")}:${inputDate
//         .getMinutes()
//         .toString()
//         .padStart(2, "0")}`
//     );
//   } else {
//     return `On ${daysOfWeek[inputDate.getDay()]} ${
//       months[inputDate.getMonth()]
//     } ${inputDate.getDate()} ${inputDate.getFullYear()} at ${inputDate
//       .getHours()
//       .toString()
//       .padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;
//   }
// }

export function getFormattedDateTimeFromTimestamp(timestamp) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const inputDate = new Date(timestamp);

  if (timestamp > currentDate.getTime()) {
    return "Future date";
  }

  const isYesterday =
    inputDate.getDate() === currentDate.getDate() - 1 &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear();

  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (isYesterday) {
    return `Yesterday at ${inputDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;
  } else if (daysDifference === 0) {
    if (hoursDifference > 0) {
      return `Today at ${inputDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${inputDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else if (minutesDifference > 0) {
      return `Today, ${minutesDifference} minute${
        minutesDifference > 1 ? "s" : ""
      } ago`;
    } else {
      return `Just now`;
    }
  } else if (daysDifference < 7) {
    const pluralSuffix = daysDifference > 1 ? "s" : ""; 
    return `${daysDifference} day${pluralSuffix} ago at ${inputDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;
  } else {
    return `On ${daysOfWeek[inputDate.getDay()]} ${
      months[inputDate.getMonth()]
    } ${inputDate.getDate()} ${inputDate.getFullYear()} at ${inputDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;
  }
}

export function getTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}
