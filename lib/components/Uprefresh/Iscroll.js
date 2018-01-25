/*
 *
 *
 *
 *
 */








class IScroll {
    constructor(el, opt) {

        var opt = opt || {};

        this.defaults = {
            bounce: true,
            bounceTime: 600,
            bounceEasing: '',
        }

        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.el = el;
        this.opt = opt;
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
            posX: 0,
            posY: 0,
            currentPosY: 0,
            direction: null
        }

        console.log( this );

        this.init();

    }

    Event(detach) {
        let action = detach ? 'removeEventListener' : 'addEventListener';
        this.el[action]('touchstart', e => this.onTouchStart(e), false);
        this.el[action]('touchmove', e => this.onTouchMove(e), false);
        this.el[action]('touchend', e => this.onTouchEnd(e), false);
        this.el[action]('touchcancel', e => this.onTouchEnd(e), false);
    }

    onTouchStart(e){
        this.touches.startY = e.touches[0].clientY;


        this.touches.posY = this.el.offsetHeight; // 获得位置

        console.log( this.touches.posY );

        this.el.style.webkitTransitionDuration = 0; // 清除动画
        this.touches.startTimeStamp = e.timeStamp; // 记录点击时间
    }

    onTouchMove(e){
        e.preventDefault();
        this.touches.currentY = e.touches[0].clientY;
        this.touches.diffY = this.touches.startY - this.touches.currentY;
        let moveY = this.touches.posY - this.touches.diffY;
        console.log( moveY );
        this.el.style.webkitTransform = `translate3d(0px,${moveY}px, 0px)`;
    }

    onTouchEnd(e){
        

        this.touches.duration = e.timeStamp - this.touches.startTimeStamp; // 计算拖动时间

        // 惯性值计算 

        console.log( this.touches.duration );

        //this.activeSlot.style.webkitTransitionDuration = inertance.duration + 'ms'
        //this.activeSlot.posY = inertance.value
        //this.el.style.webkitTransform = `translate3d(0px, ${inertance.value}px , 0px)`
        
    }

    init(){
        this.Event();
    }


}


export default IScroll;
