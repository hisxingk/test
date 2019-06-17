$(function(){
	$.ajax({
		type:"get",					//请求方法
		url:"js/index.json",			//接口
		async:true,					//是否异步
		success:function (data) {	//请求成功执行
		var mySwiper1 = new Swiper ('.kv-container_1', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: false, // 循环模式选项
		    autoplay:true,
		    autoplay: {
		        disableOnInteraction: false,
		    },
		    
		    // 如果需要分页器
//		    pagination: {
//		      el: '.swiper-pagination',
//		    },
		    
		    // 如果需要前进后退按钮
//		    navigation: {
//		      nextEl: '.swiper-button-next',
//		      prevEl: '.swiper-button-prev',
//		    },
		    
		    // 如果需要滚动条
//		    scrollbar: {
//		      el: '.swiper-scrollbar',
//		    },
		})
		var mySwiper2 = new Swiper ('.kv-container_2', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: false, // 循环模式选项
		    autoplay:true,
		    autoplay: {
		        disableOnInteraction: false,
		    },
		    
		    // 如果需要分页器
//		    pagination: {
//		      el: '.swiper-pagination',
//		    },
		    
		    // 如果需要前进后退按钮
//		    navigation: {
//		      nextEl: '.swiper-button-next',
//		      prevEl: '.swiper-button-prev',
//		    },
		    
		    // 如果需要滚动条
//		    scrollbar: {
//		      el: '.swiper-scrollbar',
//		    },
		})
		var mySwiper3 = new Swiper ('.swiper-container-horizontal1', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: false, // 循环模式选项
		    effect : 'slide',
		    autoplay:true,
		    slidesPerView : 4,
			slidesPerGroup : 4,
			grabCursor : true,
		    autoplay: {
		        disableOnInteraction: true,
    			delay: 6000,//1秒切换一次
		    },
		    
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination1',
		      clickable :true,
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next1',
		      prevEl: '.swiper-button-prev1',
//		      disabledClass: 'my-button-disabled',
//		      hideOnClick: true,
//    		  hiddenClass: 'my-button-hidden',
		    },
		    
		    // 如果需要滚动条
//		    scrollbar: {
//		      el: '.swiper-scrollbar',
//		    },
		})
		var mySwiper4 = new Swiper ('.swiper-container-horizontal2', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: false, // 循环模式选项
		    effect : 'slide',
		    slidesPerView : 4,
			slidesPerGroup : 4,
			grabCursor : true,
		    
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination2',
		      clickable :true,
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next2',
		      prevEl: '.swiper-button-prev2',
//		      disabledClass: 'my-button-disabled',
//		      hideOnClick: true,
//    		  hiddenClass: 'my-button-hidden',
		    },
		    
		    // 如果需要滚动条
//		    scrollbar: {
//		      el: '.swiper-scrollbar',
//		    },
		})
//			console.log(data.Shoetype[0])
//			console.log(data.shangpin[0])
			/*$.each(data.Shoetype1,function (i,t) {
				$("<li class='Extention'><a href='#'>"+t+"</a></li>").appendTo('.nav-pills1')
				$('.Extention').css({
					"display":"inline-block",
					"text-decoration":"none",
					"width":"66px",
					"height":"50px",
					"padding-left":"15px",
					"padding-right":"15px",
					"line-height":"50px",
					 "float":"left"
				})
				$('.Extention a').css({
					"display":"inline-block",
					"width":"36px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold"
				})
			})
			$.each(data.Shoetype2,function (i,t) {
				$("<li class='Extention'><a href='#'>"+t+"</a></li>").appendTo('.nav-pills2')
				$('.Extention').css({
					"display":"inline-block",
					"text-decoration":"none",
					"width":"66px",
					"height":"50px",
					"padding-left":"15px",
					"padding-right":"15px",
					"line-height":"50px",
					 "float":"left"
				})
				$('.Extention a').css({
					"display":"inline-block",
					"width":"36px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold"
				})
				$('.Extention:eq(5)').css({
					"display":"inline-block",
					"width":"72px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold",
					"padding-left":"15px",
					"padding-right":"15px"
				})
				$('.Extention:eq(5) a').css({
					"display":"inline-block",
					"width":"72px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold",
				})
			})*/
			$.each(data.Carefulrecommendationtop,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a  class='WDNMD'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left",
					"font-weight":"bold"
				})
				$('.drop-down-menu-body-left-content:eq(3)').append("<div id='line'></div>")
				$('#line').css({
					"display":"block",
					"width":"30px",
					"height":"1px",
					"background-color":"#C7CBCC",
					"margin-left":"0px",
					"margin-top":"10px",
					"margin-right":"0px"
				})
			})
			$.each(data.Carefulrecommendationbottom,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a class='WDNMD'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.footwear,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a class='WDNMD'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(1)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.clothes,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a class='WDNMD'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(2)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.Accessories,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a class='WDNMD'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(3)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.RelatedSearches,function (i,t) {
				$("<li><a class='WDNMD'>"+t+"</a></li>").appendTo('.search-word:eq(0) ul')
				$('.search-word:eq(0) ul li').css({
					"width":"80px",
					"height":"22px",
					"padding":"4px 0px",
					"word-break": "break-word",
					"display":"inline-block"
				})
				$('.search-word:eq(0) ul li a').css({
					"width":"80px",
					"height":"14px",
					"font-size":"12px",
					"color":"#999",
					"line-height":"14px",
					"overflow":"hidden",
					"text-overflow":"ellipsis",
					"white-space":"nowrap",
					"text-align":"left",
					"display":"inline-block"
				})
			})
		},
		error:function (sd) {			//请求失败执行
			console.log(sd)
		}
	});
	console.log($('.drop-down-menu-body-left-content:eq(3)'))
	$('.Extention:eq(5)').css({
		"display":"inline-block",
		"width":"72px",
		"height":"50px",
		"color":"white",
		"font-size":"18px",
		"font-weight":"bold",
		"padding-left":"15px",
		"padding-right":"15px"
	})
	$('.Extention:eq(5) a').css({
		"display":"inline-block",
		"width":"72px",
		"height":"50px",
		"color":"white",
		"font-size":"18px",
		"font-weight":"bold",
	})
	$(".Extention:not(:eq(5))").mouseenter(function(){
		$(".drop-down-menu").stop()
		$(".drop-down-menu").slideDown();
	}).mouseleave(function () {
		$(".drop-down-menu").stop()
		$(".drop-down-menu").slideUp();
	});
	$(".drop-down-menu").mouseenter(function(){
		$(this).stop()
		$(this).slideDown();
	}).mouseleave(function () {
		$(this).stop()
		$(this).slideUp();
	});
	$('.search-word:eq(0)').css({
		"width":"80px",
		"height":"268px",
		"display":"inline-block",
		"margin-right":"30px",
		"float":"left",
		"text-align":"left",
		"font-size":"12px",
		"word-break": "break-word"
	});
	$('.search-word:eq(1)').css({
		"width":"180px",
		"height":"26px",
		"display":"inline-block",
		"float":"left",
		"text-align":"left",
		"font-size":"12px",
		"word-break": "break-word"
	});
	$('.title:eq(0)').css({
		"width":"80px",
		"height":"16px",
		"display":"inline-block",
		"margin-bottom":"10px",
		"text-align":"left",
		"font-size":"14px",
		"font-weight":"bold",
		"line-height":"16px"
	});
	$('.title:eq(1)').css({
		"width":"180px",
		"height":"16px",
		"display":"inline-block",
		"margin-bottom":"10px",
		"text-align":"left",
		"font-size":"14px",
		"font-weight":"bold",
		"line-height":"16px"
	});
	$('#keyword').focus(function(){
		$('.search-box').prop('style',"display:inline-block;");
		$('.search-clear2').prop('style',"display:inline-block;");
	}).blur(function(){
		$('.search-box').prop('style',"display:none;");
		$('.search-clear2').prop('style',"display:none;");
	});
	var timer;
	$('.header-cart a').mouseenter(function () {
		$('.header-cart a i').prop('style',"background-image: url(img/commodityL.png);width: 44px;height: 32px;margin-top: 0px;margin-left: 15px;")
	}).mouseleave(function () {
		timer && clearTimeout(timer);
		timer = setTimeout(function () {
			$('.header-cart a i').prop('style',"background-image: url(img/commodity.png);width: 20px;height: 20px;margin-top: 6px;margin-left: 14px;")
		},2000);
	});
	$('.banner-close').on('click',function () {
		$('.banner-fixed-bottom').prop('style','display: none;');
	});
	$('.item-info:eq(0) a').mouseenter(function () {
		$('.item-info:eq(0) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(0) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(0) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(0) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(1) a').mouseenter(function () {
		$('.item-info:eq(1) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(1) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(1) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(1) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(2) a').mouseenter(function () {
		$('.item-info:eq(2) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(2) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(2) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(2) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(3) a').mouseenter(function () {
		$('.item-info:eq(3) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(3) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(3) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(3) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(4) a:eq(0)').mouseenter(function () {
		$('.item-info:eq(4) a:eq(0)').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(4) a:eq(0) span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(4) a:eq(0)').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(4) a:eq(0) span img').prop("src","img/jt-h.png")
	});
	$('.item-info:eq(4) a:eq(1)').mouseenter(function () {
		$('.item-info:eq(4) a:eq(1)').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(4) a:eq(1) span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(4) a:eq(1)').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(4) a:eq(1) span img').prop("src","img/jt-h.png")
	});
	$('.item-info:eq(5) a').mouseenter(function () {
		$('.item-info:eq(5) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(5) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(5) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(5) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(6) a').mouseenter(function () {
		$('.item-info:eq(6) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(6) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(6) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(6) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(7) a:eq(0)').mouseenter(function () {
		$('.item-info:eq(7) a:eq(0)').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(7) a:eq(0) span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(7) a:eq(0)').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(7) a:eq(0) span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(7) a:eq(1)').mouseenter(function () {
		$('.item-info:eq(7) a:eq(1)').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(7) a:eq(1) span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(7) a:eq(1)').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(7) a:eq(1) span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(8) a').mouseenter(function () {
		$('.item-info:eq(8) a').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(8) a span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(8) a').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(8) a span img').prop("src","img/jt-h.png")
	});
	$('.item-info:eq(9) a').mouseenter(function () {
		$('.item-info:eq(9) a').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(9) a span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(9) a').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(9) a span img').prop("src","img/jt-h.png")
	});
	$('.item-info:eq(10) a').mouseenter(function () {
		$('.item-info:eq(10) a').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(10) a span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(10) a').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(10) a span img').prop("src","img/jt-h.png")
	});
	$('.item-info:eq(11) a').mouseenter(function () {
		$('.item-info:eq(11) a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info:eq(11) a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(11) a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info:eq(11) a span img').prop("src","img/jt-b.png")
	});
	$('.item-info:eq(12) a:eq(0)').mouseenter(function () {
		$('.item-info:eq(12) a:eq(0)').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(12) a:eq(0) span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(12) a:eq(0)').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(12) a:eq(0) span img').prop("src","img/jt-h.png")
	});
	$('.item-info:eq(12) a:eq(1)').mouseenter(function () {
		$('.item-info:eq(12) a:eq(1)').css({
			"color":"rgb(152,152,154)"
		})
		$('.item-info:eq(12) a:eq(1) span img').prop("src","img/jt-h-h.png")
	}).mouseleave(function () {
		$('.item-info:eq(12) a:eq(1)').css({
			"color":"rgb(0,0,0)"
		})
		$('.item-info:eq(12) a:eq(1) span img').prop("src","img/jt-h.png")
	});
	$('.btn-have-opacity:eq(16)').mouseenter(function () {
		$('.btn-have-opacity:eq(16)').css({
			"color":"rgb(130,131,133)"
		})
		$('.btn-have-opacity:eq(16) span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.btn-have-opacity:eq(16)').css({
			"color":"rgb(255,255,255)"
		})
		$('.btn-have-opacity:eq(16) span img').prop("src","img/jt-b.png")
	});
	$('.cms-html-edit:eq(0)').css({
		"word-break":"normal",
		"width":"100%",
		"overflow":"hidden",
		"padding-top":"80px",
		"z-index":"1"
	});
	$('.article-kv:eq(0)').css({
		"word-break":"normal",
		"width":"100%",
		"height":"100%",
		"display":"block",
		"position":"relative"
	});
	$('.article-kv .kv-container:eq(0)').css({
		"width":"100%"
	});
	$('.swiper-container:eq(0)').css({
		"margin-left":"auto",
		"margin-right":"auto",
		"position":"relative",
		"overflow":"hidden",
		"z-index":"1",
		"display":"block",
		"word-wrap":"break-word",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%"
	});
	$('.swiper-wrapper:eq(0)').css({
		"width":"100%",
		"position":"relative"
	});
	$('.item-info:eq(0)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.item-info:eq(1)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.item-info:eq(2)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.item-info:eq(3)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.btn-have-opacity:eq(0)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(0)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(1)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(1)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(2)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(2)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(3)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(3)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.article-kv:eq(1)').css({
		"position":"relative",
		"width":"100%",
		"margin":"0 auto",
		"margin-bottom":"24px"
	});
	$('.article-kv .kv-container:eq(1)').css({
		"width":"100%"
	});
	$('.swiper-container:eq(1)').css({
		"margin-left":"auto",
		"margin-right":"auto",
		"position":"relative",
		"overflow":"hidden",
		"z-index":"1"
	});
	$('.swiper-wrapper:eq(1)').css({
		"position":"relative",
		"width":"100%",
		"height":"100%",
		"z-index":"1",
		"display":"flex",
		"transition-property":"transform",
		"box-sizing":"content-box"
	});
	$('.article-kv:eq(1) .kv-container .swiper-slide').css({
		"position":"relative",
		"width":"1357px",
		"height":"100%"
	});
	$('.article-kv:eq(1) .kv-container .swiper-slide .item-info').css({
		"display":"-webkit-flex",
		"flex-direction":"column",
		"align-items":"flex-start",
		"position":"absolute",
		"bottom":"22%",
		"left":"12%",
		"width":"30%"
	});
	$('.btn-have-opacity:eq(4)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(4)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(5)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(5)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.cms-html-edit:eq(2) .article-banner').css({
		"margin-bottom":"24px",
		"padding":"0",
		"display":"block",
		"margin-left":"auto",
		"margin-right":"auto"
	});
	$('.cms-html-edit:eq(2) .article-banner .row').css({
		"flex-wrap":"wrap",
		"width":"100%",
		"display":"flex",
		"font-size":"0",
		"position":"relative"
	});
	$('.cms-html-edit:eq(2) .article-banner .sub-banner').css({
		"max-width":"unset!important",
		"padding":"0 24px!important",
		"display":"-webkit-flex",
		"justify-content":"center"
	});
	$('.btn-have-opacity:eq(6)').css({
		"margin-top":"0px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(6)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(7)').css({
		"margin-top":"0px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(7)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.article-kv:eq(2) .kv-container .swiper-slide .item-info').css({
		"left":"inherit",
		"right":"12%",
		"align-items":"flex-end",
		"display":"-webkit-flex",
		"flex-direction":"column",
		"position":"absolute",
		"bottom":"22%",
		"width":"30%"
	});
	$('.btn-have-opacity:eq(8)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"rgb(0,0,0)",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"rgb(255,255,255)",
		"border-color":"rgb(255,255,255)",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(8)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(9)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"rgb(0,0,0)",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"rgb(255,255,255)",
		"border-color":"rgb(255,255,255)",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(9)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(10)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(10)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(11)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(11)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(12)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(12)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(13)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"rgb(0,0,0)",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"rgb(255,255,255)",
		"border-color":"rgb(255,255,255)",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(13)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.style-guess-you-Iike .swiper-container .swiperwrapper .swiper-slide').mouseenter(function () {
		$(this).css({
			"border":"solid 1px rgb(217,220,221)"
		});
	}).mouseleave(function () {
		$(this).css({
			"border":"solid 1px #FFF"
		});
	});
	$('.article-banner .sub-banner .banner-iterm').mouseenter(function () {
		$(this).css({
			"box-shadow":"3px 3px 3px rgb(217,220,221)"
		});
	}).mouseleave(function () {
		$(this).css({
			"box-shadow":"0px 0px 0px #FFF"
		});
	});
	$('.article-kv:eq(3) .kv-container .swiper-slide .item-info').css({
		"display":"-webkit-flex",
		"flex-direction":"column",
		"align-items":"flex-start",
		"position":"absolute",
		"bottom":"22%",
		"left":"12%",
		"width":"30%"
	});
	$('.btn-have-opacity:eq(14)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(14)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(15)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(15)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(16)').css({
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-size":"auto",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"inline-block",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"relative",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(16)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(16) span').css({
		"display":"inline-block",
	});
	$('.swiper-button-prev1').mouseenter(function () {
		$(this).prop("style","background-image:url(img/2019-06-04_110310.png)")
	}).mouseleave(function () {
		$(this).prop("style","background-image:url(img/2019-06-03_155341.png)")
	});
	$('.swiper-button-next1').mouseenter(function () {
		$(this).prop("style","background-image:url(img/2019-06-04_110240.png)")
	}).mouseleave(function () {
		$(this).prop("style","background-image:url(img/2019-06-03_155254.png)")
	});
	$('.swiper-button-prev2').mouseenter(function () {
		$(this).prop("style","background-image:url(img/2019-06-04_110310.png)")
	}).mouseleave(function () {
		$(this).prop("style","background-image:url(img/2019-06-03_155341.png)")
	});
	$('.swiper-button-next2').mouseenter(function () {
		$(this).prop("style","background-image:url(img/2019-06-04_110240.png)")
	}).mouseleave(function () {
		$(this).prop("style","background-image:url(img/2019-06-03_155254.png)")
	});
	$('.gl-badge-cn:eq(3)').css({
		"position": "absolute",
	    "left": "-238px",
	    "top": "7px"
	});
	$('.gl-badge-cn:eq(7)').css({
		"position": "absolute",
	    "left": "-238px",
	    "top": "7px"
	});
	$('.gl-badge--sale').css({
		"position": "absolute",
	    "left": "-238px",
	    "top": "7px"
	});
	$(".footer-bottom-ul-l-li").eq(1).css("margin","0 12px");
	$(".footer-bottom-ul-l-li").eq(3).css("margin","0 12px");
	$(".footer-bottom-ul-l-li").eq(5).css("margin","0 12px");
	$('.footer-middle-top-right-ul:eq(0) li').css({
		"position":"relative",
		"top":"0",
		"left":"20px"
	});
	$('.footer-bottom-ul-r-li:eq(0)').css({
		"text-decoration":"underline"
	});
	$('.footer-top-ul-li:eq(0)').css({
		"max-width": "8%",
		"min-width": "8%",
	});
	$('.footer-top-ul-li:eq(1)').css({
		"max-width": "14.4%",
		"min-width": "14.4%",
		"position":"relative",
		"top":"30",
		"left":"0%"
	});
	$('.footer-top-ul-li:eq(2)').css({
		"position":"relative",
		"top":"30",
		"left":"5%"
	});
	$('.footer-top-ul-li:eq(3)').css({
		"position":"relative",
		"top":"30",
		"left":"10%"
	});
	$('.footer-top-ul-li:eq(4)').css({
		"max-width": "12.1%",
		"min-width": "12.1%",
		"position":"relative",
		"top":"30",
		"left":"15%"
	});
	$('.footer-bottom-ul-l li:eq(0)').css({
		"width": "10%",
	});
	$('.footer-bottom-ul-l li:eq(1)').css({
		"width": "7.2%",
	});
	$('.footer-bottom-ul-l li:eq(3)').css({
		"width": "7.2%",
	});
	$('.footer-bottom-ul-l li:eq(5)').css({
		"width": "7.2%",
	});
	$('.footer-bottom-ul-l li:eq(7)').css({
		"width": "38.2%",
	});
	$('.article-guess-you-Iike .style-guess-you-Iike .swiper-container .swiper-wrapper .swiper-slide .thumbnail').mouseenter(function () {
		$(this).css({
			"border":"solid 1px rgb(217,220,221)"
		});
	}).mouseleave(function () {
		$(this).css({
			"border":"solid 1px #FFF"
		});
	});
	$('.article-week-best .style-guess-you-Iike .swiper-container .swiper-wrapper .swiper-slide .thumbnail').mouseenter(function () {
		$(this).css({
			"border":"solid 1px rgb(217,220,221)"
		});
	}).mouseleave(function () {
		$(this).css({
			"border":"solid 1px #FFF"
		});
	});
	$('.WDNMD').click(function () {
		alert("你点NM呢,WDNMD");
	});
	$('.Outsidetheborder').click(function () {
		alert("你点NM呢,WDNMD");
	});
})