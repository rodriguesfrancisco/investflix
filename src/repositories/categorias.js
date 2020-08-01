import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => response.json());
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => response.json());
}

export default { getAllWithVideos, getAll };
