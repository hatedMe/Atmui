class Slider {
    constructor(el, opt) {
        let defaults = {
            pagination: null,
            autoplay: false,
            slidesPerView: 1, // 显示几屏幕
            threshold: "50",
            duration: "300",
            height: 0,

            //loop
            loop: false,
            slideDuplicateClass: 'slider-slide-duplicate',

            //dom class
            wrapperClass: "slider-wrapper",
            slideClass: "slider-item",
            slideActiveClass: "active",
            bulletClass: "bullet",
            bulletActiveClass: "active"

            /*callbacks
            onInit:function(Slider)
            onSlideChangeStart:function(Slider)
            onSlideChange:function(Slider)
            onSlideChangeEnd:function(Slider)
            */
        }



        var opt = opt || {};

        for (let attr in defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = defaults[attr]
            }
        }

        this.opt = opt; // 配置
        this.el = el; //  当前父级元素
        this.activeIndex = 0; // 索引

        this.width = this.el.clientWidth; // 宽

        this.wrapper = this.el.querySelector(`.${this.opt.wrapperClass}`);
        this.slideItem = this.wrapper.querySelectorAll(`.${this.opt.slideClass}`)

        

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

        this.init();

    }
    updateContainerSize() { // 更新容器
        this.max = parseInt(2, 10);

        this.wrapper.style.width = this.width * this.max + 'px';

        this.slideItem.forEach(element => {
            element.style.width = this.width + 'px';
        });

    }
    updateClasses() { // 更新索引

    }

    Event(detach) {
        var touchTarget = this.el
        var action = detach ? 'removeEventListener' : 'addEventListener'
        touchTarget[action]('touchstart', e => this.onTouchStart(e), false)
        touchTarget[action]('touchmove', e => this.onTouchMove(e), false)
        touchTarget[action]('touchend', e => this.onTouchEnd(e), false)
        touchTarget[action]('touchcancel', e => this.onTouchEnd(e), false)
    }

    onTouchStart(e) {
        this.el.addEventListener('touchmove', e => e.preventDefault(), false);
        this.touches.startX = e.touches[0].clientX
        this.touches.startY = e.touches[0].clientY
    }

    onTouchMove(e) {
        this.touches.currentX = e.touches[0].clientX
        this.touches.currentY = e.touches[0].clientY
        this.touches.diffX = this.touches.startX - this.touches.currentX
        this.touches.diffY = this.touches.startY - this.touches.currentY
        // runCallBack
        //if (s.params.onSlideChange) s.params.onSlideChange(s)

        // 设置滑动方向
        if (this.touches.direction === 0) { // 设置滑动方向(-1上下 | 1左右)
            this.touches.direction = Math.abs(this.touches.diffX) > Math.abs(this.touches.diffY) ? 1 : -1
        }
        if (this.touches.direction === -1) { // 设置垂直方向(-1上 | 1下)
            this.touches.vertical = this.touches.diffY < 0 ? 1 : -1
        }
        if (this.touches.direction === 1) { // 设置左右方向(-1左 | 1右)
            this.touches.horizontal = this.touches.diffX < 0 ? 1 : -1
        }

        // 如果是上下滑动则不工作
        if (this.touches.vertical !== 0) {
            this.el.removeEventListener('touchmove', e => e.preventDefault(), false)
            return
        }

        // 如果滑动了，则禁止事件向下传播
        e.stopPropagation()

        // x轴距离左边的像素，向左为负数，向右为正数
        var moveX = this.touches.posX - this.touches.diffX
        // 判断是否是边缘
        if (moveX > 0 || -moveX + this.width >= this.wrapper.width) {
            return
        }
        this.wrapper.style.webkitTransform = 'translate(' + moveX + 'px,0px)'
    }

    onTouchEnd (e) {
        // 左右拉动
        if (this.touches.direction === 1) {
          if (this.touches.diffX > this.opt.threshold) {
            // 下一页
            this.activeIndex++
          } else if (this.touches.diffX < -this.opt.threshold) {
            // 上一页
            this.activeIndex--
          }
          console.log( this.activeIndex );
          // this.slideTo(this.activeIndex)
        }
        
        this.touches.direction = 0
        this.touches.vertical = 0
        this.touches.horizontal = 0
      }


      slideTo(){

      }

    init(){
        this.updateContainerSize();
        this.Event();
    }

}


export default Slider
