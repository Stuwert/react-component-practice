import axios from 'axios';

module.exports = {
  fetchPopularGames: () => {
    const encodedUri = window.encodeURI('https://bgg-json.azurewebsites.net/hot');

    return axios.get(encodedUri)
      .then((response) => response.data);
  },

  fetchGameById: (id) => {
    const encodedUri = window.encodeURI(`https://bgg-json.azurewebsites.net/thing/${id}`);

    return axios.get(encodedUri)
      .then((response) => response.data)
  }
}
