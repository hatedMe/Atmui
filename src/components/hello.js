

import { createNamespace } from '../utils/create';
const [ createComponent , b ] = createNamespace('picker');
console.log( createComponent , b );

export default createComponent({
    data() {
        return {
        }
    },
    mounted() {
        
    },
    render(){
        return (
            <div class={b('button',{name:true})}>
                hello
            </div>
        )
    }
})