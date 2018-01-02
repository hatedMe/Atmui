/*
    Type 类型判断
*/



const Type = {}

/*====================
基本类型
=====================*/

let types = ["String", "Boolean", "Number", "Array", "Date", "Object", "HTMLElement", "Function"];
types.forEach(type => Type['is' + type] = obj => Object.prototype.toString.call(obj) === '[object ' + type + ']');


// window 对象
Type.isWindow = function(obj) {
    return obj != null && obj === obj.window
}

// 对象无值
Type.isPlainObject = function(obj) {
    if (!obj || !Type.isObject(obj) || obj.nodeType || Type.isWindow(obj)) return false;
    return obj.constructor === Object;
}

// 对象空对象
Type.isEmptyObject = function(obj) {
    var name
    for (name in obj) {
        return false
    }
    return true
}

// query条件判断
Type.isQueryId = function(id) {
    var idExpr = /^#([\w-]*)$/
    var match = idExpr.exec(id)
    if (match && match.length > 0) {
        return match[1]
    }
    return false
}
Type.isQueryClass = function(classname) {
    var classExpr = /^\.([\w-]*)$/
    var match = classExpr.exec(classname)
    if (match && match.length > 0) {
        return match[1]
    }
    return false
}
Type.isTag = function(str) {
    var tagExpr = /^<(\w+)\s*.*\/\w*>$/im
    var match = tagExpr.exec(str)
    if (match && match.length > 0) {
        return true
    }
    return false
}




export default Type;