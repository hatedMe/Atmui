/**
 * 
 * 
 * 
 * 
 * 
 * 
 */





class Picker {

    constructor(el, opt) {
        this.defaults = {

            pickerClass: 'picker',
            pickerActiveClass: 'active',

            headerClass: 'picker-header',
            headerDoneClass: 'picker-done',
            headerDoneText: '完成',
            headerCancelClass: 'picker-cancel',
            headerCancelText: '取消',

            lockClass: 'lock',
            wrapperClass: 'picker-wrapper',
            slotboxClass: 'picker-slotbox',
            slotClass: 'picker-slot',
            layerClass: 'picker-layer',

            cellHeight: 44,
            bounceRange: 44, // 弹性值

            isClickMaskHide: true
        }


        var opt = opt || {};
        for (let attr in this.defaults) {
            if (opt[attr] === undefined) {
                opt[attr] = this.defaults[attr]
            }
        }

        this.opt = opt; // 配置
        this.el = el; //  当前父级元素
        this.isHid = true; // 控制显示 && 隐藏
        this.picker = this.el.querySelector(`.${this.opt.pickerClass}`);

        this.wrapper = this.el.querySelector(`.${this.opt.wrapperClass}`);
        this.slotbox = this.el.querySelector(`.${this.opt.slotboxClass}`);
        this.headerDone = this.el.querySelector(`.${this.opt.headerDoneClass}`);
        this.headerCancel = this.el.querySelector(`.${this.opt.headerCancelClass}`);

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
            posY: 0,
            currentPosY: 0,
            direction: null
        }

        this.init();
    }


    addSlot(values, defaultKey) { //添加一列
        let slot = document.createElement('ul');
        slot.setAttribute('class', this.opt.slotClass);
        slot.values = values;
        slot.defaultKey = defaultKey;
        this.slotbox.appendChild(slot);

        this.slotArray.push( slot );

        slot.index = this.slotbox.children.length - 1;
        this.renderSlot(slot);
        return this.slotArray;

    }

    renderSlot(slot) { // 渲染一列
        let index = slot.index;
        let values = slot.values;
        let defaultIndex = 0;
        slot.innerHTML = '';
        for (let i = 0; i < values.length; i++) {
            let li = document.createElement('li');
            if (slot.defaultKey && slot.defaultKey === values[i]['key']) {
                defaultIndex = i
            }
            li.innerHTML = values[i]['value'];
            slot.appendChild(li);
        }

        // // 选中项
        this.activeOptions[index] = slot.values[defaultIndex];
        slot.defaultPosY = -defaultIndex * this.opt.cellHeight;
        slot.posY = -defaultIndex * this.opt.cellHeight;
        slot.minPosY = 0;
        slot.maxPosY = -(slot.values.length - 1) * this.opt.cellHeight;
        slot.minBouncePosY = this.opt.bounceRange;
        slot.maxBouncePosY = slot.maxPosY - this.opt.bounceRange;
        slot.style.webkitTransform = `translate3d(0px,${slot.posY}px,0px)`;
    }

    replaceSlot(index, values, defaultKey, fn) {
        var slot = this.slotbox.children[index]; // 设置属性
        slot.setAttribute('class', this.opt.slotClass);
        slot.values = values;
        slot.defaultKey = defaultKey;
        // if (classes.indexOf(s.params.lockClass) >= 0) slot.isLock = true
        // else slot.isLock = false

        // if (classes.indexOf(s.params.lockClass) >= 0) s.slotbox.children[index].isLock = true
        // else s.slotbox.children[index].isLock = false
        // 渲染
        this.renderSlot(slot);
        if (fn) fn(this); // callback
    }

    Event(detach) {
        let action = detach ? 'removeEventListener' : 'addEventListener';
        this.slotbox[action]('touchstart', e => this.onTouchStart(e), false);
        this.slotbox[action]('touchmove', e => this.onTouchMove(e), false);
        this.slotbox[action]('touchend', e => this.onTouchEnd(e), false);
        this.slotbox[action]('touchcancel', e => this.onTouchEnd(e), false);

        this.el[action]('webkitTransitionEnd', e => this.onTransitionEnd(e), false);

        this.headerDone[action]('click', e => this.onClickDone(e), false);
        this.headerCancel[action]('click', e => this.onClickCancel(e), false);
    }

    onTouchStart(e) {
        this.touches.startX = e.touches[0].clientX;
        this.touches.startY = e.touches[0].clientY;
        this.activeSlot = e.target; // 寻找当前点击的槽
        //if (this.activeSlot.isLock) return;         // 锁定的槽将不工作
        this.touches.posY = this.activeSlot.posY; // 获得位置
        this.activeSlot.style.webkitTransitionDuration = 0; // 清除动画
        this.touches.startTimeStamp = e.timeStamp; // 记录点击时间
        if (this.opt.onScrollStart) this.opt.onScrollStart(this); // Callback
    }
    onTouchMove(e) {
        e.preventDefault();
        //if (s.activeSlot.isLock) return;        // 锁定的槽将不工作
        this.touches.currentY = e.touches[0].clientY;
        this.touches.diffY = this.touches.startY - this.touches.currentY;
        this.touches.currentPosY = this.touches.posY - this.touches.diffY;

        if (this.touches.currentPosY > this.activeSlot.minBouncePosY) {
            this.touches.currentPosY = this.activeSlot.minBouncePosY;
        } else if (this.touches.currentPosY < this.activeSlot.maxBouncePosY) {
            this.touches.currentPosY = this.activeSlot.maxBouncePosY;
        }
        this.activeSlot.style.webkitTransform = `translate3d(0px,${this.touches.currentPosY}px , 0px)`;

        if (this.opt.onScroll) this.opt.onScroll(this); // Callback
    }
    onTouchEnd(e) {
        //if (this.activeSlot.isLock) return;// 锁定的槽将不工作
        this.touches.endX = e.changedTouches[0].clientX
        this.touches.endY = e.changedTouches[0].clientY
        this.touches.diffX = this.touches.startX - this.touches.endX
        this.touches.diffY = this.touches.startY - this.touches.endY

        if (Math.abs(this.touches.diffX) < 6 && Math.abs(this.touches.diffY) < 6) { // 判断是否是tap
            return
        }

        this.touches.duration = e.timeStamp - this.touches.startTimeStamp; // 计算拖动时间


        var inertance = this.calcInertance({ // 惯性值计算
            range: this.touches.diffY,
            duration: this.touches.duration,
            current: this.touches.currentPosY,
            min: this.activeSlot.minPosY,
            max: this.activeSlot.maxPosY
        })

        // 滚动到指定位置
        this.activeSlot.style.webkitTransitionDuration = inertance.duration + 'ms'
        this.activeSlot.posY = inertance.value
        this.activeSlot.style.webkitTransform = `translate3d(0px, ${inertance.value}px , 0px)`

        if (this.opt.onScrollEnd) this.opt.onScrollEnd(this); // Callback onScrollEnd
    }

    onTransitionEnd(e) {
        var target = e.target
        if (e.propertyName !== 'transform' || target !== this.picker) {
            return
        }
        // 容器显隐
        if (target.classList.contains(this.opt.pickerClass)) {
            if (this.opt.onTransitionEnd) this.opt.onTransitionEnd(this);
            if (this.isHid) {
                if (this.opt.onHid) this.opt.onHid(s)
            } else {
                if (this.opt.onShowed) this.opt.onShowed(s)
            }
        }
    }


    onClickDone(e) { 
        this.target = e.target
        this.opt.onClickDone(this);
        this.hide();
    }

    onClickCancel(e) {
        this.target = e.target;
        if (this.opt.onClickCancel) {
            this.opt.onClickCancel(this);
        } else {
            this.hide();
        }
    }

    calcInertance(opts) { // 计算惯性坐标

        var friction = 0.002; // 摩擦力
        var opRange = opts.range; // 滑动距离
        var opDuration = opts.duration; // 滑动时长
        var duration = (2 * opRange / opDuration) / friction; // 使用公式算出duration(新时长)
        var range = -(friction / 2) * (duration * duration); // 使用公式算出offset(新距离)
        if (opRange < 0) { // 如果拖动间距为负值，则为向下拖动
            duration = -duration
            range = -range
        }
        // console.log('滑动距离:' + opRange)
        // console.log('滑动时长:' + opDuration)
        // console.log('新时长:' + duration)
        // console.log('新距离:' + range)
        var value = opts.current + range; // 使用距离计算新的位置
        // 矫正位置与时长
        if (value > opts.min) { // 最上面
            // Math.abs(Math.round(value)) - Math.abs(Math.round(opts.min))
            duration = 300;
            value = opts.min;
        } else if (value < opts.max) { // 最下面
            duration = 300;
            value = opts.max;
        } else { // 在中间
            var remainder = value % this.opt.cellHeight;
            if (remainder !== 0) {
                // 算出比例
                var divided = Math.round(value / this.opt.cellHeight);
                // 对准位置
                value = this.opt.cellHeight * divided
            }
        }

        // 更新选中项
        this.updateActiveOptions(this.activeSlot, value);
        // 返回值
        return {
            duration: Math.round(duration),
            value: Math.round(value)
        }
    }

    updateActiveOptions(slot, posY) { // 更新选中项目
        var index = -Math.round((posY - this.opt.cellHeight * 2) / this.opt.cellHeight) - 2;

        // 添加到激活项
        var activeOption = slot.values[index];
        this.activeOptions[slot.index] = activeOption;
    }

    hide() {
        this.isHid = true;
        // this.mask.classList.remove(this.opt.maskActiveClass);
        this.el.classList.remove(this.opt.pickerActiveClass);
        // 显示滚动条
        //if (s.overflowContainer) s.overflowContainer.classList.remove(s.params.overflowContainerActiveClass);
    }

    show() { // 显示
        this.isHid = false;
        // this.mask.classList.add(s.params.maskActiveClass);
        this.el.classList.add(s.params.pickerActiveClass);
        // 禁用滚动条
        // if (this.overflowContainer) this.overflowContainer.classList.add(this.opt.overflowContainerActiveClass);
    }

    init() {
        this.Event();
    }

}




export default Picker;