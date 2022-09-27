export const TimeDateFormat = (timestamp: Date) => {
  const day = timestamp.getDate(),
    monthIndex = timestamp.getMonth() + 1,
    year = timestamp.getFullYear(),
    hour = timestamp.getHours(),
    minute = timestamp.getMinutes(),
    millisecond = timestamp.getMilliseconds();
  return `${year}-${monthIndex}-${day}`;
};
