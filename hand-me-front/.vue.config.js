const fs = require("fs");

module.exports = {
  devServer: {
    port: 443,
    host: '51.178.54.198',
    disableHostCheck: true,
//    https: true
    https: {
          key: fs.readFileSync('/etc/letsencrypt/live/hand-me.fr/privkey.pem'),
          cert: fs.readFileSync('/etc/letsencrypt/live/hand-me.fr/fullchain.pem'),
        },

 // SSLCertificateFile /etc/letsencrypt/live/hand-me.fr/fullchain.pem
// SSLCertificateKeyFile /etc/letsencrypt/live/hand-me.fr/privkey.pem


//      key: fs.readFileSync("../security/51.178.54.198-key.pem"),
//      cert: fs.readFileSync("../security/51.178.54.198.pem"),
//  }
}
};
