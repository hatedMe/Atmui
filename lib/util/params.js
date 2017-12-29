




import Type from './Type.js';





const params = obj =>{
    let prefix;
    let s = [];
    let add = function(key , valueOrFunction){
        let val = Type.isFunction(valueOrFunction) ? 
        valueOrFunction() :
        valueOrFunction
        s[ s.length ].encodeURIComponent( key ) + '=' + encodeURIComponent( value == null ? "" : value );
    }   
    if( Type.isArray( obj ) || !Type.isPlainObject( obj) ){
        for(let attr in obj){
            add( obj , abj[attr] )
        }
    }

    return s.join('&');

}


export default params;