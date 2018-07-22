module.exports = {
  serverPath: 'https://www.omdbapi.com/?apikey=877a08ec',

  ENTER_KEY_CODE: 13,

  getServerRoute(path) {
    return this.serverPath + path;
  },
};
