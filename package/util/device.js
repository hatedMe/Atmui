const Device = () => {
    let ua = navigator.userAgent.toLowerCase();
    return {
        language: (navigator.browserLanguage || navigator.language).toLowerCase(), //检测浏览器语言

        kernel: { // 内核
            trident: ua.indexOf('Trident') > -1, //IE内核
            presto: ua.indexOf('Presto') > -1, //opera内核
            webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
        },

        os: { // 终端系统
            ios: ua.match(/cpu iphone os (.*?) like mac os/), //ios终端
            android: ua.match(/android\s*(\d*\.*\d*)/) //android终端或者uc浏览器
        },

        platform: { //平台
            webApp: ua.indexOf('Safari') == -1, //是否web应用程序，没有头部与底部
            weixin: ua.indexOf('micromessenger') > -1, // 微信
            qq: ua.indexOf('mqqbrowser') > -1, // qq浏览器
            uc: ua.indexOf('ucbrowser') > -1 // uc浏览器
        },
        device: {
            mobile: !!ua.match(/applewebkit.*mobile.*/), //是否为移动终端
            pc: !!!ua.match(/applewebkit.*mobile.*/)
        },
        appVersion: window.navigator.appVersion
    }
}


export default Device;
