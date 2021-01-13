



import Alert from './alert.js';



let alertInstance;


function getAlertInstance(config){
    alertInstance = alertInstance ||  Alert(config);
    return alertInstance
}

function confirm(config){
    getAlertInstance(config);
    alertInstance = null;
}


Alert.show = function(config){
    return confirm(config)
}

Alert.confirm = function(config){
    return confirm(config)
}

Alert.actionsheet = function(config){
    return confirm(config)
}
 //toast prompt
export default Alert;