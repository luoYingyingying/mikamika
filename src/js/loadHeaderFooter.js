/* 加载头部尾部模块 */
define(["jquery"], function($){

	$(function(){
		$.ajax("/html/include/header.html").done(function(data){
			// 因为头部部分整体被复用，但是头部有相应的功能，在用的时候应该一起加载出来，链式调用done（）方法
			$(".header").html(data);
		}).done(function(){    
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
		
		$(".footer").load("/html/include/footer.html");
	});
	
});