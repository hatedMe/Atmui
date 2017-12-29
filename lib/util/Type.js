






const Type = {}

/*====================
基本类型
=====================*/

let types=["String","Boolean","Number","Array","Date","Object","HTMLElement","Function"];
types.forEach( type => Type['is'+type] = obj => Object.prototype.toString.call(obj)==='[object '+type+']' );


// 对象无值
Type.isPlainObject=function( obj ) {
    if(!obj || !Type.isObject(obj) || obj.nodeType || Type.isWindow(obj))return false;
    return obj.constructor===Object;
}


export default Type;

