import type { App , Component  } from "vue";


function camelize (str:string) : string {
    return str.replace(/-(\w)/g, (_, s) => s.toUpperCase());
}

export type withInstall<T> = T & { install : (app:App) => void };
export function withInstall<T extends Component  >(opt : T) {
    (opt as Record<string , unknown> ).install = (app:App) => {
        const { name } = opt;
        if(!name) return;
        app.component(name, opt);
        app.component(camelize(`-${name}`), opt);
    }

    return opt as withInstall<T>;
};