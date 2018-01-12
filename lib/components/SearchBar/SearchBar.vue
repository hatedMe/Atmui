

<template>
    <div class="input-search" :class="active">
        <div class="synthetic">
            <span class="ph">
                <Icon type="icon-search" size="20" /><span ref="placeholder">{{ placeholderVal }}</span>
            </span>
            <input ref="input" v-focus="focus" :value="currentValue" @focus="focusHandle" @blur="blurHandle" @input="inputHandle" @keyup="keyup" @keydown="keydown" @change="changeHandle" type="search" :name="name" />
            <a class="clear-search" :class="clearActive" @click="clearClickHandle">
                <Icon type="icon-close" size="8" />
            </a>
        </div>
        <a class="search-sure" :class="sureActive" @click="sureClikHandle">{{sure}}</a>
    </div>
</template>




<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                currentValue: this.value,
                active: '',
                sureActive: '', // 确定按钮 active
                clearActive: '', // 灰色的小××
                placeholderVal: this.placeholder,
            }
        },
        props: {
            placeholder: {
                type: String,
                default: '请输入搜索内容'
            },
            sure: {
                type: String,
                default: '确定'
            },
            name: {
                type: String,
                default: ''
            },
            focus:{
                type:Boolean,
                default:false
            },
            value:{
                type:String,
                default:''
            }
        },
        mounted () {
            if( this.currentValue ){
                this.active = 'active';
                this.placeholderVal = '';
            }
        },
        methods: {
            focusHandle(e) {
                if (this.val) {
                    this.clearActive = 'active';
                }
                this.active = 'active';
                this.$emit('focusHandle',e);
            },
            blurHandle(e) {
                if (this.currentValue === '') {
                    this.active = '';
                } else {
                    setTimeout(() => {
                        this.clearActive = '';
                    }, 60)
                }
                this.$emit('blurHandle',e);
            },
            inputHandle(e) {
                let val = e.target.value;
                this.val = val;
                if (this.val === '') {
                    this.placeholderVal = this.placeholder;
                    this.clearActive = '';
                } else {
                    this.placeholderVal = '';
                    this.clearActive = 'active'
                }
                this.currentValue = val;
                this.$emit('input' , this.currentValue);
            },
            clearClickHandle(e) {
                this.currentValue = '';
                this.placeholderVal = this.placeholder;
                this.$refs.input.focus();
                this.$emit('clearClickHandle', e);
            },
            sureClikHandle(e) {
                this.$emit('sureClikHandle', e);
            },
            keyup(e) {
                this.$emit('keyup', e);
            },
            keydown(e) {
                this.$emit('keydown', e);
            },
            changeHandle(e) {
                this.$emit('changeHandle', e);
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
            }
        }
    }
</script>
