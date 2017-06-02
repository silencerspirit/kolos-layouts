$(function() {

	//Кастомизированный Select
	$('.slct').click(function(){
		var dropBlock = $(this).parent().find('.drop');
		
		// Если выпадающий блок скрыт то делаем его видимым
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();
			
			//Выделяем ссылку открывающую select 
			$(this).addClass('active');
			
			$('.drop li').click(function(){
				var selectResult = $(this).html();
				var selectVal = $(this).attr('data-value');

				$(this).closest('div').find('.slct').removeClass('active').html(selectResult);
				$(this).closest('div').find('input').val(selectVal);
				dropBlock.slideUp();
			});
			
		//Если выпадающий блок не скрыт то скрываем его
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		return false;
	});

	//Скрытие выпадашек при клике за ее пределами
	$('body').mouseup( function(event){
		if( $(event.target).closest('.drop_list').length || $(event.target).closest('.drop').length ) 
		return;
		$('.drop_list').slideUp();
		$('.drop').slideUp();
	});

});
