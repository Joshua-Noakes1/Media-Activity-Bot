const lcl = require('cli-color');
const fetch = require('node-fetch');

async function downloadImage(url, imageProvider) {
    var buffer;

    // download image from provider
    await fetch(url)
        .then(async (response) => {
            if (response.ok) {
                buffer = await response.buffer();
                console.log(lcl.green('[Success]'), `Grabbed image "${url}" from provider "${imageProvider || 'Unknown'}"`);
            } else {
                console.log(lcl.red('[Fail]'), `Failed to grab image "${url}" from provider "${imageProvider || 'Unknown'}"`);
                buffer = false;
            }
        })
        .catch((err) => {
            console.log(lcl.red('[Fail]'), `Failed to grab image "${url}" from provider "${imageProvider || 'Unknown'}"`);
            console.log(err);
            buffer = false;
        });

    // return image buffer
    return buffer;
}

module.exports = {
    downloadImage
}