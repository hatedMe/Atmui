/***
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */





export const compress = async function (res, targetAttr) {
    let img = new Image();
    let maxH = 460;
    let dataUrl;
    img.src = res;

    await new Promise((resolve, reject) => {
        img.onload = function () {
            let cvs = document.createElement('canvas');
            let ctx = cvs.getContext('2d')

            if (img.height > maxH) {
                img.width *= maxH / img.height;
                img.height = maxH;
            }

            cvs.width = img.width;
            cvs.height = img.height;

            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.drawImage(img, 0, 0, img.width, img.height);

            dataUrl = cvs.toDataURL('image/jpeg', 1);
            resolve('ok');
        }
    }).then( res => {
        console.log( 123 );
    })
    return {
        lastModified: targetAttr.lastModified,
        name: targetAttr.name,
        size: targetAttr.size,
        type: targetAttr.type,
        reslut: dataUrl
    }
}
