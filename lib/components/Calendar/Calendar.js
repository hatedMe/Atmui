/*
 * 日历 
 */


let date = new Date(); //定义一个日期对象；
let year = date.getFullYear(); //获取当前年份；
let month = date.getMonth() + 1; //获取当前月份；
let day = date.getDate(); //获取当前日期；

let s = [];

function datt() {  // year, month

    console.log( day );

    let week = new Date(year + '-' + month + '-1').getDay(); // 计算本月1号是周几；
    let days = new Date(year, month, 0).getDate(); //计算本月有多少天；
    let dayw = new Date(year, month - 1, 0).getDate(); //计算上月有多少天；

    //获取当前日期的时间戳；
    let ym = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dm = new Date().getDate();
    let td_time = new Date(ym, mm, dm).getTime();

    //console.log( days );

    for(let i = 1; i<= days; i++){  // 添加本月天数
        var wk=new Date( `${year}-${month}-${i}` ).getDay();
        if( i == day ){
            s.push({
                date:'',
                day:i,
                today:i,
            })
        }else{
        s.push({
            //time:time,
            day:i,
            wk,
        })
    }
    }

    for(let j=dayw-week+1;j<=dayw;j++){  // 添加上个月的天数

        s.unshift({
            day:j,
        })
    }


    console.log( s );
    
    return s;
}


export default datt;