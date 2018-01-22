/**
 * 
 * 
 * 
 * 
 * 
 */

import Picker from './Picker.js';


class PickerCity {
    constructor(el, opt) {
        this.defaults = {
            viewType: 'area',
            data: null,

            defaultProvince: '',
            defaultCity: '',
            defaultArea: '',

            defaultProvinceKey: '',
            defaultCityKey: '',
            defaultAreaKey: '',

            provinceClass: 'text-center',
            cityClass: 'text-center',
            areaClass: 'text-center',

            defaultValues: [{
                key: 'none',
                value: '----'
            }]
        }

        var opt = opt || {};
        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.el = el; //  当前父级元素
        this.opt = opt;
        this.picker = new Picker(this.el);

        // 省、市、区数据
        this.province = null;
        this.city = null;
        this.area = null;

        // this.picker.addSlot(this.opt.data, undefined);
        this.init()
    }

    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '')
    }
    // 设置默认值
    setDefaultProvince(province) {
        this.opt.defaultProvince = this.trim('' + province)
    }
    setDefaultCity(city) {
        this.opt.defaultCity = this.trim('' + city)
    }
    setDefaultArea(area) {
        this.opt.defaultArea = this.trim('' + area)
    }
    setDefaultProvinceKey(province) {
        this.opt.defaultProvinceKey = this.trim('' + province)
    }
    setDefaultCityKey(city) {
        this.opt.defaultCityKey = this.trim('' + city)
    }
    setDefaultAreaKey(area) {
        this.opt.defaultAreaKey = this.trim('' + area)
    }


    // 获得第一层
    getPureArray(array) {
        var arr = [];
        for (var i = 0, datas; datas = array[i++];) {
            arr.push({
                key: datas.key,
                value: datas.value
            })
        }
        return arr;
    }

    getChildren(key) { // 根据key获得children
        if (!key) return this.getPureArray(this.opt.data); // 如果没有传key，表示获得第一层
        // 如果传key，则找到对应key的子级
        for (var i = 0, province; province = this.opt.data[i++];) {
            if (province.key === key) return this.getPureArray(province.children);
            for (var j = 0, city; city = province.children[j++];) {;
                if (!city.children) break;
                if (city.key === key) return this.getPureArray(city.children);
            }
        }
        return null;
    }

    getKey(value, key) { // 根据value获得key
        var data = null;
        if (!key) {
            data = this.opt.data;
        } else {
            data = this.getChildren(key);
        }
        if (!data) {
            return 0
        }
        for (var i = 0, row; row = data[i++];) {
            if (row.value === value) return row.key
        }
    }

    addProvince() { // 初始化省
        if (!this.province) {
            this.province = this.getChildren()
        }
        if (!this.opt.defaultProvinceKey) {
            this.setDefaultProvinceKey(this.province[0].key)
        }
        this.picker.addSlot(this.province, this.opt.defaultProvinceKey, this.opt.provinceClass)
    }

    addCity() {
        // 初始化市
        this.city = this.getChildren(this.opt.defaultProvinceKey)
        if (!this.opt.defaultCityKey) {
            this.setDefaultCityKey(this.city[0].key)
        }
        this.picker.addSlot(this.city, this.opt.defaultCityKey, this.opt.cityClass)
    }

    addArea() {
        if (this.opt.viewType !== 'area') return
        // 初始化区
        this.area = this.getChildren(this.opt.defaultCityKey)
        if (!this.opt.defaultAreaKey) {
            this.setDefaultAreaKey(this.city[0].key)
        }
        if (this.area) {
            this.picker.addSlot(this.area, this.opt.defaultAreaKey, this.opt.areaClass)
        } else {
            this.picker.addSlot(this.opt.defaultValues, '', this.opt.areaClass)
        }
    }
    init(){
        this.addProvince();
        this.addCity();
        this.addArea();
    }

}


export default PickerCity;
