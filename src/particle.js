const Particle = require('particle-api-js');
const particleAPI = new Particle();
const token = process.env.VUE_APP_PARTICLE_TOKEN;

const particle = {
  listDevices: () => {
    return new Promise((resolve, reject) => {
      particleAPI
        .listDevices({ auth: token })
        .then(devices => resolve(devices))
        .catch(err => reject(err));
    });
  },
  onlineDevices: () => {
    return new Promise((resolve, reject) => {
      particleAPI
        .listDevices({ auth: token })
        .then(devices => {
          const onlineDevices = devices.body.filter(device => device.connected);
          resolve(onlineDevices);
        })
        .catch(err => reject(err));
    });
  },
  deviceFunctions: deviceName => {
    return new Promise((resolve, reject) => {
      particleAPI
        .listDevices({ auth: token })
        .then(devices => {
          const device = devices.body.filter(
            device => device.name === deviceName
          )[0];

          if (device) {
            return device.id;
          } else {
            throw new Error('DEVICE_NOT_FOUND');
          }
        })
        .then(id => {
          return particleAPI.getDevice({ deviceId: id, auth: token });
        })
        .then(device => {
          if (device) {
            resolve(device.body.functions);
          } else {
            throw new Error();
          }
        })
        .catch(err => reject(err));
    });
  },
  deviceFunctionsAsync: async deviceName => {
    const devices = await particleAPI.listDevices({ auth: token });
    const device = devices.body.filter(device => device.name === deviceName)[0];

    if (device) {
      const deviceDetails = await particleAPI.getDevice({
        deviceId: device.id,
        auth: token
      });

      if (device) {
        console.table(deviceDetails.body.functions);
      } else {
        throw new Error();
      }
    }
  }
};

export default particle;
