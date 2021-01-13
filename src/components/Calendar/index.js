class Calendar {

    constructor(el, opt) {
        this.defaults = {
            defaultActiveDate: new Date(),
            threshold: 50,
            duration: 300,

            warpClass: 'calendar-warp',

        }

        var opt = opt || {};
        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }


        this.el = el;
        this.opt = opt;
        console.log(this.el);
        this.warpContent = this.el.querySelector(`.${this.opt.warpClass}`);

        this.activeIndex = 1;

        //this.
        //this.calendarContentItem = this.warp.children

        this.touches = {
            direction: 0,
            vertical: 0,
            horizontal: 0,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            endX: 0,
            endY: 0,
            diffX: 0,
            diffY: 0,
            posX: 0
        }


        this.year = this.opt.defaultActiveDate.getFullYear(); //获取当前年份
        this.month = this.opt.defaultActiveDate.getMonth() + 1; //获取当前月份
        this.week = this.opt.defaultActiveDate.getDay(); // 计算今天是周几
        this.today = this.opt.defaultActiveDate.getDate(); // 计算今天是几号

        this.nowDays = new Date(this.year, this.month, 0).getDate(); // 计算当前月有多少天
        this.prevDays = new Date(this.year, this.month - 1, 0).getDate(); //计算上月有多少天
        this.nextDays = new Date(this.year, this.month + 1, 0).getDate();  // 计算下月有多少天

        this.init();

    }


    initUpdateWarp() { // 绘制天数（包括上月 本月 次月）

        this.warpDay = [];
        for (let i = 1; i <= this.nowDays; i++) {
            let wk=new Date( `${this.year}-${this.month}-${i}` ).getDay();
            if( i == this.today ){
                this.warpDay.push({
                    day: i,
                    today: 'ture',
                    wk
                })
            }else{
                this.warpDay.push({
                    day:i,
                    wk,
                })
            }
            
        }

        for( let j = this.nowDays - this.week+1 ;j<= this.prevDays;j++){
            this.warpDay.unshift({
                day: j,
                //today: j
            })
        }


        for( let k = 1 ;k <= 35-this.nowDays-this.week;k++ ){
            this.warpDay.push({
                day: k,
                //today: i
            })
        }

        console.log( this.warpDay );

        return this.warpDay;
    }

    updateDay() { // 更新容器

        let width = this.warpContent.clientWidth;
        let Item = this.warpContent.children;
        
        Array.from( Item ).forEach(element => {
            element.style.width = width + 'px';
        });

        this.warpContent.style.width = width * Item.length + 'px';

        this.resetMoveTo();
        
        


        // Event

    }




    Event(detach) { // 事件
        var action = detach ? 'removeEventListener' : 'addEventListener';
        this.warpContent[action]('touchstart', e => this.onTouchStart(e), false);
        this.warpContent[action]('touchmove', e => this.onTouchMove(e), false);
        this.warpContent[action]('touchend', e => this.onTouchEnd(e), false);
        this.warpContent[action]('touchcancel', e => this.onTouchEnd(e), false);
        this.warpContent[action]('click', e => this.onClick(e), false);
        this.warpContent[action]('webkitTransitionEnd', e => this.onTransitionEnd(e), false);
    }

    onTouchStart(e) {
        this.warpContent.addEventListener('touchmove', e => e.preventDefault(), false);
        this.touches.startX = e.touches[0].clientX;
        this.touches.startY = e.touches[0].clientY;
    }

    onTouchMove(e) {
        this.touches.currentX = e.touches[0].clientX
        this.touches.currentY = e.touches[0].clientY
        this.touches.diffX = this.touches.startX - this.touches.currentX
        this.touches.diffY = this.touches.startY - this.touches.currentY
        // if (this.opt.onSlideChange) this.opt.onSlideChange(this);  // 回调函数

        if (this.touches.direction === 0) { 
            this.touches.direction = Math.abs(this.touches.diffX) > Math.abs(this.touches.diffY) ? 1 : -1
        }
        if (this.touches.direction === -1) {
            this.touches.vertical = this.touches.diffY < 0 ? 1 : -1
        }
        if (this.touches.direction === 1) {
            this.touches.horizontal = this.touches.diffX < 0 ? 1 : -1
        }

        if (this.touches.vertical !== 0) {
            this.warpContent.removeEventListener('touchmove', e => e.preventDefault(), false)
            return
        }

        e.stopPropagation();

        let moveX = this.touches.posX - this.touches.diffX;

        this.warpContent.style.webkitTransform = 'translate(' + moveX + 'px, 0px)';

        // if (moveX > 0 || -moveX + this.warpContent.clientWidth >= this.warpContent.clientWidth) {
        //     return
        // } else {
        //     this.warpContent.style.webkitTransform = 'translate(' + moveX + 'px, 0px)';
        // }
    }

    onTouchEnd(e) {
        if (this.touches.direction === 1) {
            if (this.touches.diffX > this.opt.threshold) {
                this.activeIndex++
            } else if (this.touches.diffX < -this.opt.threshold) {
                this.activeIndex--
            }
            this.moveTo()
        }
        //this.moveTo();

        this.touches.direction = 0
        this.touches.vertical = 0
        this.touches.horizontal = 0
    }

    onClick(e){
        e.preventDefault();
        let target = e.target;
        if( target.nodeName.toLowerCase() == 'span' ){
            console.log( 456 );
        }
    }

    onTransitionEnd(){
        // this.updateTranslate();
        console.log( 456789 );
    }

    moveTo() {
        // 更新视图
        console.log( '结束了' );
        this.resetMoveTo();
        // this.updateTranslate();
        setTimeout(() => {
            this.warpContent.style.transitionDuration = '0ms';
        }, this.opt.duration);

    }


    resetMoveTo(){
        this.warpContent.style.webkitTransitionDuration = this.opt.duration + 'ms';
        this.touches.posX = - this.activeIndex * this.warpContent.clientWidth / 3;
        this.warpContent.style.webkitTransform = 'translate(' + this.touches.posX + 'px,0px)';
    }

    updateTranslate(){
        
        this.warpContent.style.webkitTransitionDuration = '0ms';
        this.touches.posX = -this.activeIndex * this.warpContent.clientWidth / 3;
        this.warpContent.style.webkitTransform = 'translateX(' + this.touches.posX + 'px)';
        console.log( this.touches.posX ,'=====' );
    }


    init() { // 初始化
        this.updateDay();
        this.Event();
    }

}


export default Calendar;