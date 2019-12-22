import Type from './Type.js';




const buildParams = (prefix, obj, add) => {
    let name;
    if (Type.isArray(obj)) {
        
        obj.forEach(val => {
            if( /\[\]$/.test( prefix ) ){
                add(prefix, val);
            }else{
                buildParams(
                    prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                    val,
                    add
                )
            }
        })
    }else if( Type.isObject( obj ) ){
        for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], add );
		}
    }else{
        add( prefix, obj );
    }
}


const params = obj => {
    let prefix;
    let s = [];
    let add = function(key, valueOrFunction) {
        let val = Type.isFunction(valueOrFunction) ?
            valueOrFunction() :
            valueOrFunction
        s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(val == null ? "" : val);
    }
    if (Type.isArray(obj) || !Type.isPlainObject(obj)) {
        for( let i=0; i<obj.length ;i++ ){
            if( obj[i].name ){
                add( obj[i].name , obj[i].value );
            }
        }
    } else {
        for (let prefix in obj) {
            buildParams(prefix, obj[ prefix ], add);
        }
    }

    return s.join('&');

}


export default params;