import { getDay } from 'date-fns';

type Response = {
  [key: number]: Date[]
}

export const sortByDayOfWeek = (dates: Date[]): Response => {
  const response: Response = {
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
  };

  dates.forEach((date) => {
    const dayOfWeek = getDay(date);
    response[dayOfWeek] = [...response[dayOfWeek], date];
  });

  return response;
};
