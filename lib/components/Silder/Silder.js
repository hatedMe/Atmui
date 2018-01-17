class Slider {
    constructor(el, opt) {
        this.defaults = {
            pagination: null,
            autoplay: 2500,
            slidesPerView: 1, 
            threshold: 50,
            duration: 300,
            height: 0,

            loop: true,

            wrapperClass: "slider-wrapper",
            slideClass: "slider-item",
            slideActiveClass: "active",
            slidePaginationClass: "slide-pagination",
            bulletActiveClass: "active"

        }

        var opt = opt || {};
        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.opt = opt; // 配置
        this.el = el; //  当前父级元素
        this.activeIndex = 0; 
        this.index = 0;
        this.width = this.el.clientWidth; // 宽
        this.wrapper = this.el.querySelector(`.${this.opt.wrapperClass}`);
        this.slidePagination = this.el.querySelector(`.${this.opt.slidePaginationClass}`);
        this.slideItem = this.wrapper.querySelectorAll(`.${this.opt.slideClass}`);
        this.player = null; // 自动播放定时器
        this.dupSlides = [];

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
        this.slideItem.forEach((element, index) => {
            let spanTag = document.createElement('span');
            let cloneTag;
            this.slidePagination.appendChild(spanTag);
            element.style.width = Math.floor(this.width / this.opt.slidesPerView) + 'px';
            if (index === 0) {
                spanTag.classList.add('active');
            }
            if ((index === 0 || index === this.slideItem.length - 1) && this.opt.loop) {
                cloneTag = element.cloneNode(true)
                this.dupSlides.push(cloneTag);
                index !== 0 ? this.wrapper.insertBefore(cloneTag, this.wrapper.firstChild) : this.wrapper.appendChild(cloneTag);
            }
        });

        this.max = parseInt(this.slideItem.length, 10) + parseInt(this.dupSlides.length, 10);
        this.wrapper.style.width = this.width * this.max + 'px';

        if (this.opt.loop) {
            this.activeIndex = this.opt.slidesPerView
            this.opt.duration = 0
            this.moveToIndex()
            this.opt.duration = this.defaults.duration;
        }

    }

    updateClasses() { // 更新索引
        let slideIndex = this.activeIndex;
        for (let i = 0; i < this.slideItem.length; i++) {
            this.slidePagination.children[i].classList.remove(this.opt.bulletActiveClass);
        }
        if (this.opt.loop) {
            slideIndex = this.activeIndex - this.opt.slidesPerView
            if (this.max - this.opt.slidesPerView === this.activeIndex) { 
                slideIndex = 0
            }
            if (slideIndex < 0) {
                slideIndex = this.slideItem.length + slideIndex
            }
        }
        this.slidePagination.children[slideIndex].classList.add(this.opt.bulletActiveClass);
    }

    Event(detach) {
        var action = detach ? 'removeEventListener' : 'addEventListener';
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
        if (this.opt.onSlideChange) this.opt.onSlideChange(this);  // 回调函数

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
            this.el.removeEventListener('touchmove', e => e.preventDefault(), false)
            return
        }

        e.stopPropagation();

        let moveX = this.touches.posX - this.touches.diffX;

        if (moveX > 0 || -moveX + this.width >= this.wrapper.clientWidth) {
            return
        } else {
            this.wrapper.style.webkitTransform = 'translate(' + moveX + 'px, 0px)';
        }
    }

    onTouchEnd(e) {
        if (this.touches.direction === 1) {
            if (this.touches.diffX > this.opt.threshold) {
                this.index++ 
                this.activeIndex++
            } else if (this.touches.diffX < -this.opt.threshold) {
                this.activeIndex--
                this.index-- 
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
            this.activeIndex = slideIndex;
        }
        if (this.activeIndex < 0) {
            this.activeIndex = 0;
        }
        if ( this.activeIndex > this.max - this.opt.slidesPerView ) {
            this.activeIndex = this.max - this.opt.slidesPerView
        }
        if (this.opt.slidesPerView > 1 && this.activeIndex > this.max - this.opt.slidesPerView) {
            this.activeIndex = this.max - this.opt.slidesPerView
        }

        this.updateClasses();
        this.moveToIndex();

        

        if( this.opt.loop ){

            if( this.index < 0){
                this.index = this.slideItem.length - this.opt.slidesPerView
            }
            if( this.index > this.slideItem.length - this.opt.slidesPerView ){
                this.index = 0
            }
        }

        if (this.opt.onSlideChangeEnd) this.opt.onSlideChangeEnd(this);  // 回调函数
        setTimeout(() => {
            this.wrapper.style.transitionDuration = '0ms';
            
            if (this.opt.loop) {
                if (this.touches.posX === 0) {
                    this.activeIndex = this.max - this.opt.slidesPerView * this.dupSlides.length;
                    this.opt.duration = 0;
                    this.moveToIndex();
                    this.opt.duration = this.defaults.duration;
                    return
                }
                if (-this.touches.posX + this.width >= this.wrapper.clientWidth) {
                    this.activeIndex = this.opt.slidesPerView;
                    this.opt.duration = 0;
                    this.moveToIndex();
                    this.opt.duration = this.defaults.duration;
                    return
                }
            }
        }, this.opt.duration);
    }

    moveToIndex() {
        this.wrapper.style.webkitTransitionDuration = this.opt.duration + 'ms';
        this.touches.posX = -this.activeIndex * this.width;
        this.wrapper.style.webkitTransform = 'translate(' + this.touches.posX + 'px,0px)';
    }

    autoplayer(detach) {
        if (!this.opt.autoplay) return
        let action = !!detach ? true : false;
        if (action) {
            this.player = setInterval(() => {
                this.activeIndex++;
                this.index ++;
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
        this.autoplayer(true);
    }

}


export default Slider
