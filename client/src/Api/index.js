import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function get_food_jokes_data() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data)
  .catch( (err) =>{
  	console.log('err',err);
  	return err;
  })
}

function get_celebrity_jokes_data() {

  if(sessionStorage.getItem('jwtToken')){
    axios.defaults.headers.common['access-token'] = sessionStorage.getItem('jwtToken');
  }

  return axios.get(BASE_URL + '/api/jokes/celebrity')
      .then( (response) => {
         console.log('response',response.data.length);
         return response.data
      })
      .catch( (error) => {
        console.log('error',error);
        return [];
      });
}

export {get_food_jokes_data, get_celebrity_jokes_data};