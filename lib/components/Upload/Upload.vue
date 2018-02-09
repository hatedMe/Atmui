

<template>
    <div class="upload-file">
        <div class="upload-list" v-for="(reslut,index) in list" :key="index">
            <img :src="reslut" alt="" />
        </div>
        <div class="upload">
            <div class="upload-drag">
                <input type="file" @change="changeHandle" :name="name" :accept="accept"  :multiple="multiple" />
                <Icon type="icon-camera" size="32" />
            </div>
        </div>
        <Button long type="success" @click="clickHandle" class="wingpadding-xl spacepadding-xl">按钮</Button>
    </div>
</template>



<script>
    import { convertBase64UrlToBlob , convertImgToBase64 } from './upload.util.js';
    export default {
        name: 'Update',
        data() {
            return {
                list: [],
                img_file: []
            }
        },
        props: {
            multiple: {
                type: Boolean,
                default: true
            },
            name: {
                type: String,
                default: 'image'
            },
            accept: {
                type: String,
                default: 'image/*'
            },
            maxSize: {
                type: Number,
                default: 2000
            }
        },
        methods: {
            changeHandle(e) {
                let This = this;
                let newBlod;
                for (let i = 0; i < e.target.files.length; i++) {
                    let targetAttr = e.target.files[i];
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[i]);
                    reader.onload = function(ev) {
                        console.log(  targetAttr );

                        if(  Math.round( targetAttr.size / 1024 / 1000 ) > 0.5 ){
                            convertImgToBase64(this.result, function (d) {
                                newBlod = convertBase64UrlToBlob(d);
                                This.img_file.push( newBlod )
                            });
                        }else{
                            newBlod = convertBase64UrlToBlob(this.result);
                            This.img_file.push( newBlod )
                        }
                        This.list.push(this.result);
                    }
                }
            },
            clickHandle(ev) {
                ev.preventDefault();
                let fromData = new FormData();

                console.log(  this.img_file );
                this.img_file.forEach(e => {
                    fromData.append('image', e);
                })
                this.axios({
                    method: 'post',
                    url: '/api/upload',
                    data: fromData
                }).then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log(err);
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