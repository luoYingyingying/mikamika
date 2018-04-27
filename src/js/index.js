require(["config"], function(){
	require(["jquery", "template", "carousel","loadHF"], function($,template,carousel){
		$(".banner").carousel({
			imgs:[{src:"/images/banner1.jpg"},{src:"/images/banner2.jpg"},{src:"/images/banner3.jpg"}],
			width:1263,
			height:400,
			duration:4000
		});
		// 点击注册显示隐藏
		$(".registLink").on("click",function(){

			$(".rg-login").css({"display":"block"});
			$(".mengban").css({"display":"block"});
			$(".register").on("click",function(){
				$(this).css({"color":"white","background":"rgb(102,102,102)"});
				
				$(".register_1").css({"display":"block"});
				$(".login_1").css({"display":"none"});
				$(".login").css({"background":"white","color":"#666"});
			
			});
			$(".login").on("click",function(){
				$(this).css({"color":"white","background":"rgb(102,102,102)"});
				$(".mengban").css({"display":"block"})
				$(".login_1").css("display","block");
				$(".register_1").css("display","none");
				$(".register").css({"background":"white","color":"#666"});
				
			});
			$(".del").on("click",function(){
				$(".rg-login").css({"display":"none"});
				$(".mengban").css({"display":"none"});
			});	
			
		});
		
		
	});

});

