import { Endpoints } from '@/api/endpoints';

export const getClasses = async (dateFrom: string, dateTo: string) => {
  const res = await fetch(Endpoints.GET_SCHEDULES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateFrom,
      dateTo,
      selectedClub: 'FIT HUB ARTERI PONDOK INDAH',
      selectedCategory: 'ALL',
    }),
  });

  return res.json();
};
