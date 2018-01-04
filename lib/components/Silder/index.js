



class Slider {
    constructor( el, opt ){
        let defaults = {
            pagination:null,
			autoplay:false,
			slidesPerView:1,
			threshold:"50",
			duration:"300",
			height:0,

			//loop
			loop:false,
			slideDuplicateClass:'slider-slide-duplicate',

			//dom class
			wrapperClass:"slider-wrapper",
			slideClass:"slider-slide",
			slideActiveClass:"active",
			bulletClass:"bullet",
			bulletActiveClass:"active"

			/*callbacks
			onInit:function(Slider)
			onSlideChangeStart:function(Slider)
			onSlideChange:function(Slider)
			onSlideChangeEnd:function(Slider)
			*/
        }

		

		var opt = opt || {};

		for( let attr in defaults ){
			if (opt[attr] === undefined) {
				opt[attr] = defaults[attr]
			  }
		}
		
		this.opt = opt ;  // 配置
		this.el = el;    //  当前父级元素
		this.activeInddex = 0;  // 索引

    }

    updateClasses(){

    }

	onTouchStart(){  

	}
}


export default Slider