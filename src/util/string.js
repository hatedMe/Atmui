
/**
 * 
 * 
 * 
 */


 // 首字母大写
const ucfirst = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()); 

export default ucfirst;