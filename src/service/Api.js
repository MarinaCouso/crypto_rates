const getDataFromApi = async () => {
  const response = await fetch('http://compare.monedero.com/api/getPrice');
  const data = await response.json();
  return data;
};

export default getDataFromApi;
