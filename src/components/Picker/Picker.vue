

<template>
    <div class="">
        <Button @click="showHandle" long type="wait">显示</Button>
        <Button @click="hidekHandle" long type="wait">隐藏</Button>
    </div>
</template>



<script>
    export default {
        mounted () {
            console.log( this );
            this.picker = new this.$Picker('Date',{
                onDateClickDone : this.onDateClickDone,
            });
        },
        methods: {
            showHandle(e){
                console.log( e );
                this.picker.show();
            },
            hidekHandle(e){
                this.picker.hide();
                console.log( this );
            },
            onDateClickDone(e){
                console.log( '日期时间' ,e.activeText);
            }
        }
    }
</script>


