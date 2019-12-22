





<template>
    <div class="mask">
        <div class="loading-floating">
            <div class="loading-floating-wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class="loading-floating-text">{{ text }}</p>
        </div>
    </div>
</template>



<script>
    export default {
        name:'Loading',
        props:{
            text:{
                type:String,
                default : '加载中'
            }
        },
        destroyed () {
            document.body.removeChild(this.$el)
        },
        methods: {
            show(config){
                this.text = typeof config == 'object' ? config.text : this.text;
                document.body.appendChild(this.$el);
            },
            hide(){
                setTimeout(() => {
                    this.$destroy()
                })
            }
        }
    }
</script>
