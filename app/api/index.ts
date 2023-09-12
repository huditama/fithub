export const getClasses = async (dateFrom: string, dateTo: string) => {
  const res = await fetch('https://asia-southeast2-thehub-965c7.cloudfunctions.net/prodtakananiumnv02/schedules/loadSchedulesPublic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the appropriate content type
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
