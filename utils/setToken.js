export default (axios ,token) => {
      axios.defaults.headers.common['auth_token'] = token;
    // console.log(axios)
  }