export function getByWeekDay(dates: string[]) {
  return dates?.map((date) => {
    const days = String(new Date(date));
    const [day] = days.split(" ");

    return day.toLowerCase();
  });
}
