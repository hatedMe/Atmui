class Slider {
    constructor(el, opt) {
        this.defaults = {
            pagination: null,
            autoplay: 2500,
            slidesPerView: 1, // 显示几屏幕
            threshold: "50",
            duration: "300",
            height: 0,

            //loop
            loop: true,
            slideDuplicateClass: 'slider-slide-duplicate',

            //dom class
            wrapperClass: "slider-wrapper",
            slideClass: "slider-item",
            slideActiveClass: "active",
            slidePaginationClass : "slide-pagination",
            bulletActiveClass: "active"

            /*callbacks
            onInit:function(Slider)
            onSlideChangeStart:function(Slider)
            onSlideChange:function(Slider)
            onSlideChangeEnd:function(Slider)
            */
        }



        var opt = opt || {};

        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.opt = opt; // 配置
        this.el = el; //  当前父级元素
        this.activeIndex = 0; // 索引

        this.width = this.el.clientWidth; // 宽

        this.wrapper = this.el.querySelector(`.${this.opt.wrapperClass}`);
        this.slidePagination = this.el.querySelector(`.${this.opt.slidePaginationClass}`);
        this.slideItem = this.wrapper.querySelectorAll(`.${this.opt.slideClass}`);
        

        this.player = null;

        console.log(this.player, '=========');

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
    initWrapperSize() { // 更新容器
        this.max = parseInt(this.slideItem.length, 10);

        this.wrapper.style.width = this.width * this.max + 'px';

        if (this.opt.loop) {
            this.opt.duration = 0
            this.moveToIndex()
            this.opt.duration = this.defaults.duration;
        }

        this.slideItem.forEach((element,index) => {
            console.log( this.slidePagination );
            let spanTag = document.createElement('span');
            if( index == 0 ){
                spanTag.classList.add('active');
            }
            this.slidePagination.appendChild( spanTag );
            element.style.width = Math.floor(this.width / this.opt.slidesPerView) + 'px';
        });


    }
    updateClasses() { // 更新索引
        for(let i =0; i<this.slideItem.length ;i++){
            this.slidePagination.children[i].classList.remove(this.opt.bulletActiveClass);
        }
        this.slidePagination.children[this.activeIndex].classList.add(this.opt.bulletActiveClass);
    }

    Event(detach) {
        var action = detach ? 'removeEventListener' : 'addEventListener'
        this.el[action]('touchstart', e => this.onTouchStart(e), false)
        this.el[action]('touchmove', e => this.onTouchMove(e), false)
        this.el[action]('touchend', e => this.onTouchEnd(e), false)
        this.el[action]('touchcancel', e => this.onTouchEnd(e), false)
    }

    onTouchStart(e) {
        this.el.addEventListener('touchmove', e => e.preventDefault(), false);
        this.touches.startX = e.touches[0].clientX;
        this.touches.startY = e.touches[0].clientY;

        this.autoplayer(false);
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
        
        if ( moveX > 0 || -moveX + this.width >= this.wrapper.clientWidth) {
            return
        }else{
            this.wrapper.style.webkitTransform = 'translate(' + moveX + 'px, 0px)';
        }
        
    }

    onTouchEnd(e) {
        // 左右拉动
        if (this.touches.direction === 1) {
            if (this.touches.diffX > this.opt.threshold) {
                // 下一页
                this.activeIndex++
            } else if (this.touches.diffX < -this.opt.threshold) {
                // 上一页
                this.activeIndex--
            }
            this.slideTo(this.activeIndex)
        }

        this.touches.direction = 0
        this.touches.vertical = 0
        this.touches.horizontal = 0

        this.autoplayer(true);
    }


    slideTo(slideIndex) {
        if (slideIndex >= 0) {
            this.activeIndex = slideIndex
        }
        // 索引不能小于0
        if (this.activeIndex < 0) {
            this.activeIndex = 0
        }
        // 索引不能大于slide总数
        if (this.activeIndex > this.max - 1) {
            this.activeIndex = this.max - 1
        }
        // 一页多屏，索引不能露出空白区域
        if (this.opt.slidesPerView > 1 && this.activeIndex > this.max - this.opt.slidesPerView) {
            this.activeIndex = this.max - this.opt.slidesPerView
        }
        this.updateClasses();
        this.moveToIndex();
        setTimeout(() => {
            this.wrapper.style.transitionDuration = '0ms';
            if (this.opt.loop) {
                if (this.touches.posX === 0) {
                    //this.activeIndex = this.max - this.opt.slidesPerView * 2;
                    //console.log( this.activeIndex );
                    this.activeIndex = 0; // ????? 
                    this.opt.duration = 0;
                    this.moveToIndex();
                    this.opt.duration = this.defaults.duration;
                    return
                }
                if (-this.touches.posX + this.width >= this.wrapper.width) {
                    this.activeIndex = this.opt.slidesPerView
                    // console.log('最右侧，应跳转到：'+s.activeIndex)
                    this.opt.duration = 0
                    this.moveToIndex()
                    this.opt.duration = this.defaults.duration
                    return
                }
            }
        }, this.opt.duration);
    }

    moveToIndex() {
        this.wrapper.style.webkitTransitionDuration = this.opt.duration + 'ms'
        this.touches.posX = -this.activeIndex * this.width
        this.wrapper.style.webkitTransform = 'translate(' + this.touches.posX + 'px,0px)'
    }

    autoplayer(detach) {
        if (!this.opt.autoplay) return
        let action = !!detach ? true : false;
        if (action) {
            this.player = setInterval(() => {
                this.activeIndex++;
                if (this.activeIndex >= this.max) {
                    this.activeIndex = 0
                }
                this.slideTo(this.activeIndex)
            }, this.opt.autoplay)
        } else {
            clearInterval(this.player)
        }
    }

    init() {
        this.initWrapperSize();
        this.Event();
    }

}


export default Slider