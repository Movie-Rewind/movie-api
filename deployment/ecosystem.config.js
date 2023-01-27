module.exports = {
  apps : [{
    name   : "movie-api",
    script : "npm run start",
    instances: 1,
    env: {
      PORT: 999
    },
    increment_var : 'PORT',
  }]
}
