
<template>
    <input class="input-text" 
    :type="type" 
    :placeholder="placeholder"
    :value="value"
    @click="clickHandle"
    @focus="focusHandle"
    @change="changeHandle"
    @blur="blurHandle"
    @keyup="keyup"
    @keydown="keydown"
    @input="inputHandle"
     />
</template>


<script>
    export default {
        name: 'Input',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            },
            value:{
                type:String,
                default:''
            }
        },
        methods: {
            clickHandle(event) {
                this.$emit('clickHandle', event);
            },
            focusHandle( event ){
                this.$emit( 'focusHandle' ,event );
            },
            changeHandle(event){
                this.$emit( 'changeHandle',event );
            },
            blurHandle(event){
                this.$emit( 'blurHandle',event );
            },
            keyup(event){
                this.$emit( 'keyup',event );
            },
            keydown(event){
                this.$emit('keydown',event);
            },
            inputHandle(event){
                this.$emit( 'input', event.target.value );
            }
        }
    }
</script>




