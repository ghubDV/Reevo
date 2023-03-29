const http = require('node:http');
const fs = require('fs');
const { getRandomKeys } = require('./helpers/helper');
const { httpsGetRequest } = require('./helpers/requestWrappers');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
  const breedsUrl = "https://dog.ceo/api/breeds/list/all";

  httpsGetRequest(breedsUrl, getImagesForBreeds);

  function imagesUrl(breeds) {
    let imgRequestUrls = []

    breeds.forEach(breed => imgRequestUrls.push(`https://dog.ceo/api/breed/${breed}/images/random`));

    return imgRequestUrls;
  }

  function getImagesForBreeds(breeds) {
    //gets only the breeds(keys in the object) without subfamilies
    const randBreeds = getRandomKeys(breeds);
    
    //builds the request url for images related to the selected breeds
    const urls = imagesUrl(randBreeds);

    //clears the file before writing to it
    fs.writeFileSync('doggos.txt', '');

    //binds request urls, breeds and requests the actual image url
    urls.forEach((url, i) => httpsGetRequest(url, parseImages, randBreeds[i]));
  }

  function parseImages(image, breed) {
    console.log(`Adding ${image} ${breed} to doggos.txt`);

    //append image urls + breeds line by line to the file
    fs.appendFileSync('doggos.txt', `${image} ${breed}` + "\r\n");
  }
});

//https://dog.ceo/api/breeds/list/all