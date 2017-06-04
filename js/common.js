$(function() {

	//Кастомизированный Select
	$('.slct, #reg-d').click(function(){
		var dropBlock = $(this).parent().find('.drop');
		
		// Если выпадающий блок скрыт то делаем его видимым
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();
			
			//Выделяем ссылку открывающую select 
			$(this).addClass('active');
			
			$('.drop li').click(function(){
				var selectResult = $(this).html();
				var selectVal = $(this).attr('data-value');

				$(this).closest('div').find('.slct, #reg-d').removeClass('active').html(selectResult);
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

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	// input mask
	$('#phone-mask').inputmask("+7(999)999-99-99");

	// tabs
	$(".tab-item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
		$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active-tab");

	var checkIcon = "<i class='fa fa-check' aria-hidden='true'></i>";
	$('#reg-d.checked-f').append(checkIcon);
	var errCheckedIcon = "<i class='fa fa-times' aria-hidden='true'></i>"
	$('#reg-d.err-checked-f').append(errCheckedIcon);

});

