$(function(){
	$.ajax({
		type:"get",					//请求方法
		url:"js/index.json",			//接口
		async:true,					//是否异步
		success:function (data) {	//请求成功执行
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
				$("<div class='drop-down-menu-body-left-content'><a class='WDNMD'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
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
	$(".main-top-ul-li").eq(0).mouseover(function(){
		$(".main-top-ul-li-p").eq(0).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(1).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(2).css("color","#025f8e")
		$(".titme").eq(0).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(0).mouseout(function(){
		$(".main-top-ul-li-p").eq(0).css("color","#000")
		$(".main-top-ul-li-p").eq(1).css("color","#000")
		$(".main-top-ul-li-p").eq(2).css("color","#000")
		$(".titme").eq(0).css("color","#000")
	})
	
	$(".main-top-ul-li").eq(1).mouseover(function(){
		$(".main-top-ul-li-p").eq(3).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(4).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(5).css("color","#025f8e")
		$(".titme").eq(1).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(1).mouseout(function(){
		$(".main-top-ul-li-p").eq(3).css("color","#000")
		$(".main-top-ul-li-p").eq(4).css("color","#000")
		$(".main-top-ul-li-p").eq(5).css("color","#000")
		$(".titme").eq(1).css("color","#000")
	})
	
	$(".main-top-ul-li").eq(2).mouseover(function(){
		$(".main-top-ul-li-p").eq(6).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(7).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(8).css("color","#025f8e")
		$(".titme").eq(2).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(2).mouseout(function(){
		$(".main-top-ul-li-p").eq(6).css("color","#000")
		$(".main-top-ul-li-p").eq(7).css("color","#000")
		$(".main-top-ul-li-p").eq(8).css("color","#000")
		$(".titme").eq(2).css("color","#000")
	})
	
	$(".main-top-ul-li").eq(3).mouseover(function(){
		$(".main-top-ul-li-p").eq(9).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(10).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(11).css("color","#025f8e")
		$(".titme").eq(3).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(3).mouseout(function(){
		$(".main-top-ul-li-p").eq(9).css("color","#000")
		$(".main-top-ul-li-p").eq(10).css("color","#000")
		$(".main-top-ul-li-p").eq(11).css("color","#000")
		$(".titme").eq(3).css("color","#000")
	})
	
	$(".main-top-ul-li").eq(4).mouseover(function(){
		$(".main-top-ul-li-p").eq(12).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(13).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(14).css("color","#025f8e")
		$(".titme").eq(4).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(4).mouseout(function(){
		$(".main-top-ul-li-p").eq(12).css("color","#000")
		$(".main-top-ul-li-p").eq(13).css("color","#000")
		$(".main-top-ul-li-p").eq(14).css("color","#000")
		$(".titme").eq(4).css("color","#000")
	})
	
	$(".main-top-ul-li").eq(5).mouseover(function(){
		$(".main-top-ul-li-p").eq(15).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(16).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(17).css("color","#025f8e")
		$(".titme").eq(5).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(5).mouseout(function(){
		$(".main-top-ul-li-p").eq(15).css("color","#000")
		$(".main-top-ul-li-p").eq(16).css("color","#000")
		$(".main-top-ul-li-p").eq(17).css("color","#000")
		$(".titme").eq(5).css("color","#000")
	})
	
	$(".main-top-ul-li").eq(7).mouseover(function(){
		$(".main-top-ul-li-p").eq(18).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(19).css("color","#025f8e")
		$(".main-top-ul-li-p").eq(20).css("color","#025f8e")
		$(".titme").eq(6).css("color","#025f8e")
	})
	$(".main-top-ul-li").eq(7).mouseout(function(){
		$(".main-top-ul-li-p").eq(18).css("color","#000")
		$(".main-top-ul-li-p").eq(19).css("color","#000")
		$(".main-top-ul-li-p").eq(20).css("color","#000")
		$(".titme").eq(6).css("color","#000")
	})
	
	$('.WDNMD').click(function () {
		alert('WDNMD')
	})
	$('#WDNMD').click(function () {
		alert('WDNMD')
	})
})