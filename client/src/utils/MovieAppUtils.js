module.exports = {
  serverPath: 'https://www.omdbapi.com/?apikey=877a08ec',

  getServerRoute(path) {
    return this.serverPath + path;
  },
};
