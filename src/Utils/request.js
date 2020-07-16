import axios from 'axios';

var localData, token;
if (localStorage.getItem('data') === null) {
  token = 'null';
} else {
  localData = JSON.parse(localStorage.getItem('data'));
  token = localData.token;
}

export const instance = axios.create({
  baseURL: 'http://eval360project.local/api',
  //baseURL: 'http://api.eval360project.demo/api',
  timeout: 5000,
  // headers: {
  //   'Authorization': 'Bearer ' + token,
  // }
})

// instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
export const headers = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*'
  })
instance.interceptors.request.use(request => {
//   const newReq = {
//     ...request,
//     headers: {
//       ...request.headers,
//       'Authorization': `Bearer ${token}`,
//     }
//   }
//   return newReq;
return console.log('interceptors request')
}, error => {
  console.log(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  // Edit request config
//   return response;
return console.log('interceptors response')
}, error => {
  console.log(error);
  return Promise.reject(error);
});


// export default instance;

export const parseJSON = response => {
    return new Promise(resolve => {
      resolve({
        status: response.status,
        statusText: response.statusText,
        json: response.data,
      })
    })
  }
  
  export const request = (method, url, options) => new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      header: headers(),
      withCredentials: false,
      ...options,
    }).then(parseJSON)
    
      .then(res => resolve(res.json))
      .catch(err => reject(err));
     
  }
  
  )
  