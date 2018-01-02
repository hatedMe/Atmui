//import Type from '../util/Type.js';

var listenTouchEvent = function (element, type, handler, isDetach) {
    var params = {
        threshold: 0
    }
    /* ------------------------
    Model
    ------------------------ */
    var touches = {
        direction: 0,
        vertical: 0,
        horizontal: 0,
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        diffX: 0,
        diffY: 0
    }
    /* ------------------------
    Touch Handler
    ------------------------ */
    var onTouchStart = function (e) {
        touches.startX = e.touches[0].clientX
        touches.startY = e.touches[0].clientY
    }
    var onTouchEnd = function (e) {
        var eventName = ''
        touches.endX = e.changedTouches[0].clientX
        touches.endY = e.changedTouches[0].clientY
        touches.diffX = touches.startX - touches.endX
        touches.diffY = touches.startY - touches.endY
        // 单击事件
        if (Math.abs(touches.diffX) < 6 && Math.abs(touches.diffY) < 6) {
            eventName = 'tap'
        }

        // 设置方向
        if (touches.direction === 0) { // 设置滑动方向(-1上下 | 1左右)
            touches.direction = Math.abs(touches.diffX) > Math.abs(touches.diffY) ? 1 : -1
        }
        if (touches.direction === -1) { // 设置垂直方向(-1上 | 1下)
            touches.vertical = touches.diffY < 0 ? 1 : -1
        }
        if (touches.direction === 1) { // 设置左右方向(-1左 | 1右)
            touches.horizontal = touches.diffX < 0 ? 1 : -1
        }

        // swipeleft | swiperight | swipedown | swipeup 事件
        if (touches.vertical === -1) { // 上
            if (Math.abs(touches.diffY) > params.threshold) {
                eventName = 'swipeup'
            }
        } else if (touches.vertical === 1) { // 下
            if (Math.abs(touches.diffY) > params.threshold) {
                eventName = 'swipedown'
            }
        } else if (touches.horizontal === -1) { // 左
            if (Math.abs(touches.diffY) > params.threshold) {
                eventName = 'swipeleft'
            }
        } else if (touches.horizontal === 1) { // 右
            if (Math.abs(touches.diffY) > params.threshold) {
                eventName = 'swiperight'
            }
        }
        // 清空方向
        touches.direction = 0
        touches.vertical = 0
        touches.horizontal = 0
        // 执行函数
        for (var n in element.touchEvents) {
            if (eventName === n) element.touchEvents[n](e)
        }
    }
    /* ------------------------
    Touch Events
    ------------------------ */
    // 绑定事件
    var attach = function () {
        if (Object.keys(element.touchEvents || {}).length === 0) {
            element.touchEvents = {}
            element['addEventListener']('touchstart', onTouchStart, false)
            element['addEventListener']('touchend', onTouchEnd, false)
        }
        element.touchEvents[type] = handler
    }
    // 移除事件
    var detach = function () {
        if (element.touchEvents) delete element.touchEvents[type]
        if (Object.keys(element.touchEvents || {}).length === 0) {
            element['removeEventListener']('touchstart', onTouchStart, false)
            element['removeEventListener']('touchend', onTouchEnd, false)
        }
    }
    // 添加或移除事件
    if (isDetach) {
        detach()
    } else {
        attach()
    }
}


export default listenTouchEvent