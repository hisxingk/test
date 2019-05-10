$(function(){
	$.ajax({
		type:"get",					//请求方法
		url:"json/homepage.json",			//接口
		async:true,					//是否异步
		success:function (data) {	//请求成功执行
//			console.log(data.Shoetype[0])
//			console.log(data.shangpin[0])
			$.each(data.Shoetype1,function (i,t) {
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
			})
			console.log($('.Extention:eq(2)'))
		},
		error:function (sd) {			//请求失败执行
			console.log(sd)
		}
	});
})
