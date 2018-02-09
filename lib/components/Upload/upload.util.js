/***
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */







export const convertBase64UrlToBlob = function (urlData) {
    var bytes = window.atob(urlData.split(',')[1]);
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {
        type: 'image/jpeg'
    });
}


export const convertImgToBase64 = function (url, callback, outputFormat) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var width = img.width;
        var height = img.height;
        var rate = (width < height ? width / height : height / width); // 按比例压缩4倍
        //var rate = 1;
        canvas.width = width * rate;
        canvas.height = height * rate;
        ctx.drawImage(img, 0, 0, width * rate, height * rate);
        var dataURL = canvas.toDataURL('image/jpeg',0.8);
        callback.call(this, dataURL);
        canvas = null;
    };
    img.src = url;
}
