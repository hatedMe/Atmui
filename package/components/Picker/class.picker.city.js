/**
 * 
 * 
 * 
 * 
 * 
 */

import Picker from './class.picker.js';


class PickerCity {
    constructor(el, opt) {

        var opt = opt || {};
        let onCityScrollEnd = opt.onCityScrollEnd;
        let onCityClickDone = opt.onCityClickDone;

        this.defaults = {
            viewType: 'area',
            data: null,

            defaultProvince: '',
            defaultCity: '',
            defaultArea: '',

            defaultProvinceKey: '',
            defaultCityKey: '',
            defaultAreaKey: '',

            defaultValues: [{
                key: 'none',
                value: '----'
            }],
            onClickDone: (e) => {
                e.activeText = this.getActiveText(e.activeOptions)
                this.setActiveKeys(e.activeOptions);
                console.log( e.activeText );
                if (onCityClickDone) onCityClickDone(e)
            },
            onScrollEnd: (e) => {
                let activeOption = e.activeOptions[e.activeSlot.index]; //[e.activeSlot.index]
                if (opt.viewType === 'city') { 
                    if (e.activeSlot.index === 0) { // 滚动省
                        this.replaceCity(activeOption.key) // 修改第二项 
                    }
                }

                if (opt.viewType === 'area') {
                    if (e.activeSlot.index === 0) { // 滚动省
                        var city = this.replaceCity(activeOption.key) // 修改第二项
                        this.replaceArea(city[0].key) // 修改第二项
                    } else if (e.activeSlot.index === 1) { // 滚动市
                        this.replaceArea(activeOption.key) // 修改第三项
                    }
                }

                if (onCityScrollEnd) onCityScrollEnd(e); // callback 
            }
        }

        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.el = el; //  当前父级元素
        this.opt = opt;
        this.picker = new Picker(this.el, {
            onScrollEnd: this.opt.onScrollEnd,
            onClickDone: this.opt.onClickDone
        });

        // 省、市、区数据
        this.province = null;
        this.city = null;
        this.area = null;

        // this.picker.addSlot(this.opt.data, undefined);
        this.init()
    }

    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
    // 设置默认值
    setDefaultProvince(province) {
        this.opt.defaultProvince = this.trim('' + province);
    }
    setDefaultCity(city) {
        this.opt.defaultCity = this.trim('' + city);
    }
    setDefaultArea(area) {
        this.opt.defaultArea = this.trim('' + area);
    }
    setDefaultProvinceKey(province) {
        this.opt.defaultProvinceKey = this.trim('' + province);
    }
    setDefaultCityKey(city) {
        this.opt.defaultCityKey = this.trim('' + city);
    }
    setDefaultAreaKey(area) {
        this.opt.defaultAreaKey = this.trim('' + area);
    }


    // 获得第一层;
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
            for (var j = 0, city; city = province.children[j++];) {
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
            if (row.value === value) return row.key;
        }
    }

    addProvince() { // 初始化省
        if (!this.province) {
            this.province = this.getChildren();
        }
        if (!this.opt.defaultProvinceKey) {
            this.setDefaultProvinceKey(this.province[0].key);
        }
        this.picker.addSlot(this.province, this.opt.defaultProvinceKey);
    }

    addCity() { // 初始化市
        //if( this.opt.viewType !== 'province' ) return;
        this.city = this.getChildren(this.opt.defaultProvinceKey);
        if (!this.opt.defaultCityKey) {
            this.setDefaultCityKey(this.city[0].key);
        }
        this.picker.addSlot(this.city, this.opt.defaultCityKey);
    }

    addArea() { // 初始化区
        //if (this.opt.viewType !== 'area') return;
        this.area = this.getChildren(this.opt.defaultCityKey);
        if (!this.opt.defaultAreaKey) {
            this.setDefaultAreaKey(this.city[0].key);
        }
        if (this.area) {
            this.picker.addSlot(this.area, this.opt.defaultAreaKey);
        } else {
            this.picker.addSlot(this.opt.defaultValues, '');
        }
    }

    replaceCity(key, defaultKey) {
        var city = this.getChildren(key);
        var defKey = city[0].key;
        if (defaultKey) defKey = defaultKey;
        this.picker.replaceSlot(1, city, defKey); // 修改第二项
        return city
    }
    replaceArea(key, defaultKey) {
        //if (this.opt.viewType !== 'area') return
        var area = this.getChildren(key)
        if (area) {
            var defKey = area[0].key
            if (defaultKey) defKey = defaultKey
            this.picker.replaceSlot(2, area, defKey); // 修改第三项
        } else {
            this.picker.replaceSlot(2, this.opt.defaultValues, this.opt.defaultValues['key']); // 修改第三项
        }
    }

    setActiveKeys(activeData) {
        var activeKeys = activeData.map(function(n, i, a) {
            return n['key']
        });
        if (activeKeys[0]) this.setDefaultProvinceKey(activeKeys[0]);
        if (activeKeys[1]) this.setDefaultCityKey(activeKeys[1]);
        if (activeKeys[2]) this.setDefaultAreaKey(activeKeys[2]);
    }

    getActiveText(activeData) {
        let activeValues = activeData.map(function(n, i, a) {
            return n['value']
        });
        var activeText = ''
        if (activeValues[0]) activeText += activeValues[0];
        if (activeValues[1]) activeText += '-' + activeValues[1];
        if (activeValues[2] && activeValues[2] !== this.opt.defaultValues[0].value) activeText += '-' + activeValues[2];
        return activeText;
    }

    init() {
        switch (this.opt.viewType) {
            case 'province':
                this.addProvince();
                break;
            case 'city':
                this.addProvince();
                this.addCity();
                break;
            case 'area':
                this.addProvince();
                this.addCity();
                this.addArea();
                break;
            default:
                break;
        }



    }

}


export default PickerCity;