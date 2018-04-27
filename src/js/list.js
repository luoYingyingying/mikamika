require(["config"], function(){
	require(["jquery", "template", "carousel","loadHF"], function($,template,carousel){
		

		$.getJSON("/mock/list.json",function(data){
			let html=template("prod_temp",{products:data.res_body.products});
			// 显示
			$(".bottom").prepend(html);
		});
		$.getJSON("/mock/list2.json",function(data){
			let html=template("prod_temp2",{products:data.res_body.products});
			// 显示
			$(".bottom_2").prepend(html);
		});
		
	});
	
});