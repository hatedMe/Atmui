





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
            <p class="loading-floating-text"> {{ text }} </p>
        </div>
    </div>
</template>



<script>
    export default {
        name:'Loading',
        props:{
            text:{
                type:String,
                default:'加载中'
            }
        }
    }
</script>
