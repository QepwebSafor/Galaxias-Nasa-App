import axios from 'axios';

export const getGalaxies = () => {
  return axios
    .get('https://images-api.nasa.gov/search?q=galaxies')
    .then((res) => res.data?.collection?.items)
    .catch((err) => console.log(err));
};

export const getGalaxyDetails = (galaxy) => {
  return axios.get(galaxy.href)
  .then(res => res.data)
  .catch((err) => console.log(err));
}

