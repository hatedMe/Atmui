

<template>
    <div class="upload-file">
        <div class="upload-list" v-for="(item,index) in list" :key="index">
            <img :src="item.reslut" alt="" />
        </div>
        <div class="upload">
            <div class="upload-drag">
                <input type="file" @change="changeHandle" :name="name" :accept="accept" :multiple="multiple" />
                <Icon type="icon-camera" size="32" />
            </div>
        </div>
        <Button long  type="success" @click="clickHandle" class="wingpadding-xl spacepadding-xl">按钮</Button>
    </div>
</template>



<script>
    export default {
        name: 'Update',
        data() {
            return {
                list: [],
                img_file : []
            }
        },
        props: {
            multiple: {
                type: Boolean,
                default: true
            },
            name:{
                type:String,
                default:'image'
            },
            accept:{
                type:String,
                default:'image/*'
            },
            maxSize:{
                type:Number,
                default: 2000
            }
        },
        methods: {
            changeHandle(e) {
                let This = this;
                
                for (let i = 0; i < e.target.files.length; i++) {
                    console.log(e.target.files);
                    let targetAttr = e.target.files[i];
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[i]);
                    reader.onload = function(ev) {
                        This.img_file.push( targetAttr );
                        This.list.push({
                            lastModified: targetAttr.lastModified,
                            name: targetAttr.name,
                            size: targetAttr.size,
                            type: targetAttr.type,
                            reslut: ev.target.result
                        });
                        console.log('文件读取完成', ev.target);
                        console.log(This.img_file);
                    }
                }
            },
            clickHandle(ev){
                
                ev.preventDefault();
                
                let fromData = new FormData();
                this.img_file.forEach( e => {
                    fromData.append( 'image' , e );
                })
                
                this.axios({
                    method:'post',
                    url:'http://localhost:4040/api/addUserInfo',
                    headers: {'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6ImFkbWluIiwiaWF0IjoxNTE2MzI0NDQ0LCJleHAiOjE1MTYzMzg4NDR9.jeNhMJ0QfPNk8FEXC-VqD1pJFU3rTKTDJtKzGsenxCA'},
                    data:fromData
                }).then( data =>{
                    console.log( data );
                }).catch( err =>{
                    console.log( err );
                })
            }
        }
    }
</script>


// onabort	中断时触发
// onerror	出错时触发
// onload	文件读取成功完成时触发
// onloadend	读取完成触发，无论成功或失败
// onloadstart	读取开始时触发
// onprogress	读取中