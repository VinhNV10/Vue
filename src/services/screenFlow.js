import axios from 'axios';

const getSearchAPI = {
  getListScreen(URL) {
    return axios({
      method: 'POST',
      URL: `${URL}/search`
    })
  },
  addScreen(URL) {
    return axios({
      method: 'POST',
      URL: `${URL}/add`
    })
  }
}

export default getSearchAPI;