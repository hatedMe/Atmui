

export default class Swipeout {
    constructor(vm, opt) {
        this.defaults = {

            // pickerClass: 'picker',
            // pickerActiveClass: 'active',

            // headerClass: 'picker-header',
            // headerDoneClass: 'picker-done',
            // headerDoneText: '完成',
            // headerCancelClass: 'picker-cancel',
            // headerCancelText: '取消',

            // lockClass: 'lock',
            // wrapperClass: 'picker-wrapper',
            duration: 300,
            swipeoutContentClass: 'swipeout-content',
            swipeoutButtonBoxClass: 'swipeout-button-box',
            // layerClass: 'picker-layer',

            // cellHeight: 44,
            bounceRange: 44, // 弹性值

            //isClickMaskHide: true
        }


        var opt = opt || {};
        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }


        this.el = vm.$el;
        this.vm = vm;
        console.log( opt )
        this.opt = opt; // 配置
        // this.el = el; //  当前父级元素
        // this.isHid = true; // 控制显示 && 隐藏
        // this.picker = this.el.querySelector(`.${this.opt.pickerClass}`);

        // this.wrapper = this.el.querySelector(`.${this.opt.wrapperClass}`);
        this.swipeoutContent = this.el.querySelector(`.${this.opt.swipeoutContentClass}`);
        this.buttons = this.el.querySelectorAll(`.${this.opt.swipeoutButtonBoxClass} > button`);
        // this.headerCancel = this.el.querySelector(`.${this.opt.headerCancelClass}`);

        this.activeOptions = []; // 选中项
        this.slotArray = [];  // 初始所有项

        this.touches = {
            startX: 0,  
            startY: 0,
            currentX: 0,
            currentY: 0,
            endX: 0,
            endY: 0,
            startTimeStamp: 0,
            duration: 0,
            diffX: 0,
            diffY: 0,
            posX:0,
            posY: 0,
            currentPosY: 0,
            direction: null
        }

        this.init();
    }


    onTouchStart(ev){
        this.el.addEventListener('touchmove', e => e.preventDefault(), false);
        const touch = ev.touches ? ev.touches[0] : ev;

        console.log( touch );
        this.touches.startX = touch.pageX;
        this.touches.startY = touch.pageY;

    }

    onTouchMove(ev){
        const touch = ev.touches ? ev.touches[0] : ev

        this.touches.currentX = touch.pageX;
        this.touches.currentY = touch.pageY;
        this.touches.diffX = this.touches.startX - this.touches.currentX;
        this.touches.diffY = this.touches.startY - this.touches.currentY;
        // console.log( Array.from( this.buttons ).map( el => el.offsetWidth ) );

        // if (this.touches.direction === 0) { 
        //     this.touches.direction = Math.abs(this.touches.diffX) > Math.abs(this.touches.diffY) ? 1 : -1
        // }
        // if (this.touches.direction === -1) {
        //     this.touches.vertical = this.touches.diffY < 0 ? 1 : -1
        // }
        // if (this.touches.direction === 1) {
        //     this.touches.horizontal = this.touches.diffX < 0 ? 1 : -1
        // }

        // if (this.touches.vertical !== 0) {
        //     this.el.removeEventListener('touchmove', e => e.preventDefault(), false)
        //     return
        // }

        ev.stopPropagation();

        let moveX = this.touches.posX -this.touches.diffX;

        console.log( moveX )
        if (moveX > 0 ) {
            return
        } else {
            this.swipeoutContent.style.webkitTransitionDuration =  '0ms';
            this.swipeoutContent.style.WebkitTransform = `translate3d(${moveX}px, 0px, 0px)`;
        }

        
    }


    onTouchEnd(){

        console.log( this.touches );


        if( this.touches.diffX < 80 ){
            this.swipeoutContent.style.webkitTransitionDuration =  this.opt.duration + 'ms';
            this.swipeoutContent.style.WebkitTransform = `translate3d(0px, 0px, 0px)`;
        } else {
            this.moveTo()
        }
        
        // this.touches.direction = 0
        // this.touches.vertical = 0
        // this.touches.horizontal = 0
    }

    moveTo (){
        this.swipeoutContent.style.webkitTransitionDuration = this.opt.duration + 'ms';
        this.swipeoutContent.style.WebkitTransform = `translate3d(-210px, 0px, 0px)`;
    }

    Event(detach) {
        let action = detach ? 'removeEventListener' : 'addEventListener';
        this.el[action]('touchstart', e => this.onTouchStart(e), false);
        this.el[action]('touchmove', e => this.onTouchMove(e), false);
        this.el[action]('touchend', e => this.onTouchEnd(e), false);
        this.el[action]('touchcancel', e => this.onTouchEnd(e), false);

        // this.el[action]('webkitTransitionEnd', e => this.onTransitionEnd(e), false);

        // this.headerDone[action]('click', e => this.onClickDone(e), false);
        // this.headerCancel[action]('click', e => this.onClickCancel(e), false);
    }


    init(){
        this.Event();
    }

}