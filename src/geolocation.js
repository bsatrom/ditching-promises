const geolocation = {
  cbLocate: (successCB, errorCB) => {
    navigator.geolocation.getCurrentPosition(successCB, errorCB);
  },
  promiseLocate: (...args) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(...args, resolve, reject);
    });
  }
};

export default geolocation;
