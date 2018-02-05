import Picker from './class.picker.js';
import ucfirst from '../../util/string.js';


class PickerDate {
    constructor(el, opt) {

        let nowDate = new Date();
        var opt = opt || {};

        let onDateScrollEnd = opt.onDateScrollEnd;
        let onDateClickDone = opt.onDateClickDone;

        this.defaults = {
            viewType: ['years','months','days'], //['years','months','days','hours','minutes','seconds']
            isSimpleYear: false,

            yearsData: null,
            monthsData: null,
            daysData: null,
            hoursData: null,
            minutesData: null,

            nowYear : nowDate.getFullYear(),
            minYear: nowDate.getFullYear() - 40, // 1950
            maxYear: nowDate.getFullYear() + 10, // 2050

            defaultYear: nowDate.getFullYear().toString(), // 默认当前时间
            defaultMonth: (nowDate.getMonth() + 1).toString(),
            defaultDay: nowDate.getDate().toString(),
            defaultHour: nowDate.getHours().toString(),
            defaultMinute: nowDate.getMinutes().toString(),
            defaultSecond: nowDate.getSeconds().toString(),

            yyUnit: '年',
            MMUnit: '月',
            ddUnit: '日',
            hhUnit: '时',
            mmUnit: '分',
            ssUnit: '秒',

            onClickDone: (e) => {
                e.activeText = this.getActiveText(e.activeOptions);
                if (onDateClickDone) onDateClickDone(e);
            },
            onScrollEnd: (e) => { 
                if (onDateScrollEnd) onDateScrollEnd(e);
            }
        }

        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.el = el; //  当前父级元素
        this.opt = opt;
        this.picker = new Picker(this.el, opt);
        this.years = []; // 年
        this.months = []; // 月
        this.days = []; // 天
        this.hours = []; // 时
        this.minutes = [] // 分
        this.seconds = [] // 秒

        this.init();
    }

    
    addDate() {// 添加日期
        for (let i = this.opt.minYear; i < this.opt.maxYear; i++) { // 添加年
            this.years.push({
                key: i.toString(),
                value: i + this.opt.yyUnit
            });
        }
        for (let j = 1; j <= 31; j++) { // 添加天
            this.days.push({
                key: j.toString(),
                value: j + this.opt.ddUnit
            });
        }
        for (let k = 1; k <= 12; k++) { // 添加月
            this.months.push({
                key: k.toString(),
                value: k + this.opt.MMUnit
            });
        }
        for (let l = 1; l <= 24; l++) { // 添加小时
            this.hours.push({
                key: l.toString(),
                value: l + this.opt.hhUnit
            });
        }
        for (let m = 1; m <= 60; m++) { // 添加分&秒
            this.minutes.push({
                key: m.toString(),
                value: m + this.opt.mmUnit
            });
            this.seconds.push({
                key: m.toString(),
                value: m + this.opt.ssUnit
            });
        }
    }

    addDateSlot() {
        this.opt.viewType.forEach(element => {
            let defaultNum = ucfirst( element ).substring(0, element.length-1 );
            this.picker.addSlot(this[element], this.opt[`default${defaultNum}`]);
        });
    }

    getActiveText(activeData) {
        let Keys = '';
        activeData.forEach( (element,inedx,arr) =>{
            if( inedx !==  arr.length -1 ){
                Keys += element['key'] + '-'
            }else{
                Keys += element['key']
            }
        });
        return Keys
    }

    init() {
        this.addDate();
        this.addDateSlot();
    }

}


export default PickerDate;