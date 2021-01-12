
// function install(vue) {
//     const { name } = vue;

// }

export default function createComponent(name) {
    return function functionName(component) {
        // component.name = name;
        // component.install = install;
        return component;
    }
};