const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const https = require('https');

// get the latest github version
https.get('https://api.github.com/emojis', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36'
  }
}, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200) {
      parseData(data);
    }
  });
}).on('error', err => {
  console.error('Failded to download Github emojis.');
  console.log(err);
});

function parseData(data) {
  const json = JSON.parse(data);
  if (!_.isObject(json)) {
    console.log('Error parsing JSON!');
  }
  const latestEmojis = Object.keys(json).reduce((emojis, name) => {
    emojis[name] = { src: json[name] }

    const match = /\/unicode\/(\S+)\./.exec(json[name]);
    if (match) {
      emojis[name].codepoints = match[1].split('-');
    }

    return emojis;
  }, {});

  const emojis = _.assign({}, require('./emojis.json'), latestEmojis);

  // update local backup
  fs.writeFile(
    path.join(__dirname, 'emojis.json'),
    JSON.stringify(emojis),
    err => {
      if (err) {
        console.warn(err);
        process.exit(1);
      } else {
        console.log(`Update ${Object.keys(emojis).length} emojis`);
      }
    }
  );
}
