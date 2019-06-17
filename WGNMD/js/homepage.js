$(function(){
   
	$.ajax({
		type:"get",					//请求方法
		url:"json/homepage.json",			//接口
		async:true,					//是否异步
		success:function (data) {	//请求成功执行
//		var mySwiper = new Swiper ('.swiper-container', {
//		    direction: 'horizontal', // 垂直切换选项
//		    loop: true, // 循环模式选项
//		    autoplay : {
//		    	delay:3000
//		    },
//		    
//		    // 如果需要分页器
//		    pagination: {
//		      el: '.swiper-pagination',
//		    },
//		    
//		    // 如果需要前进后退按钮
//		    navigation: {
//		      nextEl: '.swiper-button-next',
//		      prevEl: '.swiper-button-prev',
//		    },
//		    
//		    // 如果需要滚动条
//		    scrollbar: {
//		      el: '.swiper-scrollbar',
//		    },
//	    })
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
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
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
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
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
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(1)')
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
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(2)')
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
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(3)')
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
				$("<li><a href='#'>"+t+"</a></li>").appendTo('.search-word:eq(0) ul')
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
})
