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
        this.wrapper = this.el.children[0];
        this.wrapper.posY = 0;
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

        this.init();

    }

    Event(detach) {
        let action = detach ? 'removeEventListener' : 'addEventListener';
        this.el[action]('touchstart', e => this.onTouchStart(e), false);
        this.el[action]('touchmove', e => this.onTouchMove(e), false);
        this.el[action]('touchend', e => this.onTouchEnd(e), false);
        this.el[action]('touchcancel', e => this.onTouchEnd(e), false);
    }

    onTouchStart(e) {
        this.touches.startX = e.touches[0].clientX;
        this.touches.startY = e.touches[0].clientY;
        this.prevY = this.touches.startY;
        this.touches.posY = this.wrapper.posY;
        this.wrapper.style.webkitTransitionDuration = 0 + 'ms'; // 清除动画
        console.log( this.wrapper );
        this.touches.startTimeStamp = e.timeStamp; // 记录点击时间
    }

    onTouchMove(e) {
        e.preventDefault();

        this.touches.currentY = e.touches[0].clientY;
        this.touches.diffY = this.touches.startY - this.touches.currentY;
        this.touches.currentPosY = this.touches.posY - this.touches.diffY;

        this.wrapper.style.webkitTransform = `translate3d(0px,${this.touches.currentPosY}px, 0px)`;
    }

    onTouchEnd(e) {

        this.touches.endX = e.changedTouches[0].clientX
        this.touches.endY = e.changedTouches[0].clientY
        this.touches.diffX = this.touches.startX - this.touches.endX
        this.touches.diffY = this.touches.startY - this.touches.endY

        if (Math.abs(this.touches.diffX) < 6 && Math.abs(this.touches.diffY) < 6) { // 判断是否是tap
            return
        }

        this.touches.duration = e.timeStamp - this.touches.startTimeStamp; // 计算拖动时间

        console.log( this.wrapper.offsetHeight );

        // 惯性值计算 
        var inertance = this.calcInertance({ // 惯性值计算
            range: this.touches.diffY,
            duration: this.touches.duration,
            current: this.touches.currentPosY,
            min: 0,
            max: this.wrapper.offsetHeight
        });


        this.wrapper.style.webkitTransitionDuration = inertance.duration + 'ms'
        this.wrapper.posY = inertance.value;
        this.wrapper.style.webkitTransform = `translate3d(0px, ${inertance.value}px , 0px)`

    }

    scrollTo(x, y, time, easing){

    }

    calcInertance(opts) { // 计算惯性坐标

        var friction = 0.003; // 摩擦力
        var opRange = opts.range; // 滑动距离
        var opDuration = opts.duration; // 滑动时长
        var duration = (2 * opRange / opDuration) / friction; // 使用公式算出duration(新时长)
        var range = -(friction / 2) * (duration * duration); // 使用公式算出offset(新距离)
        if (opRange < 0) { // 如果拖动间距为负值，则为向下拖动
            duration = -duration
            range = -range
        }
        console.log('滑动距离:' + opRange)
        console.log('滑动时长:' + opDuration)
        console.log('新时长:' + duration)
        console.log('新距离:' + range)
        var value = opts.current + range; // 使用距离计算新的位置
        console.log( '新距离', value );
        // 矫正位置与时长
        if (value > 0) { // 最上面
            // Math.abs(Math.round(value)) - Math.abs(Math.round(opts.min))
            duration = 300;
            value = 0;
        } 
        // else if (value < opts.max) { // 最下面
        //     //duration = 300;
        //     value = opts.max;
        // } 
        //else { // 在中间
        //     var remainder = value % this.opt.cellHeight;
        //     if (remainder !== 0) {
        //         // 算出比例
        //         var divided = Math.round(value / this.opt.cellHeight);
        //         // 对准位置
        //         value = this.opt.cellHeight * divided
        //     }
        // }

        // 更新选中项
        //this.updateActiveOptions(this.activeSlot, value);
        // 返回值
        return {
            duration: Math.round(duration),
            value: Math.round(value)
        }
    }

    init() {
        this.Event();
    }


}


export default IScroll;
