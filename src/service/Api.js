const getDataFromApi = async (search) => {
  const response = await fetch('http://compare.monedero.com/api/getPrice?pair=' + search.pair + '&amount=' + search.amount);
  const data = await response.json();
  return data;
};

export default getDataFromApi;
