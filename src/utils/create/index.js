import bem from './bem';
import createComponent from './component';

export function createNamespace(prefix) {
    const name = 'at-' + prefix;
    return {
        componentName : createComponent(name),
        className : bem(name)
    }
}
