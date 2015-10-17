//Preloader Script for images

//taken from http://stackoverflow.com/questions/476679/preloading-images-with-jquery || Answer solved on StackOverFlow by Gajus Kuizinas
var preloadPictures = function (pictureUrls, callback) {
    var i,
        j,
        loaded = 0;

    for (i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img, src) {
            img.onload = function () {
                if (++loaded == pictureUrls.length && callback) {
                    callback();
                }
            };

            // Use the following callback methods to debug
            // in case of an unexpected behavior.
            img.onerror = function () {};
            img.onabort = function () {};

            img.src = src;
        }(new Image(), pictureUrls[i]));
    }
};

preloadPictures(['images/banners/stuffBanner.png', 'images/banners/TIBan-B.png', 'images/banners/skyshot.jpg', 'images/banners/BloodSunset.png'], function () {
    console.log('a');
});

preloadPictures(['images/banners/stuffBanner.png', 'images/banners/TIBan-B.png', 'images/banners/skyshot.jpg', 'images/banners/BloodSunset.png'], function () {
    console.log('b');
});