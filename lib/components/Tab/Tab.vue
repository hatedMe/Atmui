

<template>
    <div class="tab-content">
        <div class="buttons-tab">
            <a v-for="(item,index) in tabTitle" :class="{active:index == isShowTab}" class="tab-link" @click="handleClick(index,$event)">{{ item }}</a>
        </div>
        <div class="tabs">
            <slot></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name:'Tab',
        data(){
            return {
                isShowTab: 0
            }
        },
        props:{
            tabTitle:{
                type:Array
            }
        },
        methods:{
            handleClick(index,event){
                this.isShowTab = index;

                let Parent = document.querySelector('.tab-content');
                let tabContent = Parent.querySelectorAll('.tab');

                
                for( let i =0; i<tabContent.length; i++ ){
                    if( i == this.isShowTab ){
                        tabContent[i].classList.add('active');
                    }else{
                        tabContent[i].classList.remove('active');
                    }
                }

                this.$emit('handleClick',event,index);
                
            }
        },
        mounted() {
            let Parent = document.querySelector('.tab-content');
            let tabContent = Parent.querySelectorAll('.tab');
            tabContent[this.isShowTab].classList.add('active')
        }
    }
</script>

