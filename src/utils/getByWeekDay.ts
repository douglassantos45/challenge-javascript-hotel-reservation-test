export function getByWeekDay(dates: string[]) {
  return dates?.map((date) => {
    const weekDays = String(new Date(date));
    const [weekDay] = weekDays.split(" ");

    return weekDay.toLowerCase();
  });
}
