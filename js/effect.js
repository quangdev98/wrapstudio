$(document).ready(function(){
	$('#search_mobiles').click(function(){
		$('#formSearch').slideToggle(400);
	});
	$('.icon_close').click(function(){
		$('#formSearch').slideToggle(400);
	});
	$('.bar_humber').click(function(){
		$(this).toggleClass('icon_core');
		$('.wrapper_menu').toggleClass('selector');
	});
	$('.icon_down').click(function(){
		$(this).siblings('.wrapper_naviga').slideToggle(400);
	});
	$('.icon_down').click(function(){
		$(this).siblings('.wrapper_recursive').slideToggle(400);
	});
	$('.filler_show').click(function(){
		$(this).siblings('.list_fil').slideToggle(300);
	});
	var count = 1;
    $(".minus").click(function(){
        if (count > 1) {
        count--;
        $("#number_gues").val(+count);
    }
    });
    $(".plus").click(function(){
        if (count <1000) {
          count++;
           $("#number_gues").val(+count);
        }
    });
})