import axios from 'axios';

export const getGalaxy = () => {
  return axios
    .get('https://images-api.nasa.gov/search?q=galaxies')
    .then((res) => res.data?.collection?.items)
    .catch((err) => console.log(err));
};



