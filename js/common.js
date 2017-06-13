$(function() {

	//Кастомизированный Select
	$('.slct, .reg-d').click(function(){
		var dropBlock = $(this).parent().find('.drop');

		// Если выпадающий блок скрыт то делаем его видимым
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();

			//Выделяем ссылку открывающую select
			$(this).addClass('active');

			$('.drop li').click(function(){
				var selectResult = $(this).html();
				var selectVal = $(this).attr('data-value');

				$(this).closest('div').find('.slct, .reg-d').removeClass('active').html(selectResult);
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
	$("#phone-mask").mask("+7(999)999-99-99");

	// tabs
	$(".tab-item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
		$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active-tab");

	var checkIcon = "<i class='fa fa-check' aria-hidden='true'></i>";
	var errCheckedIcon = "<i class='fa fa-times' aria-hidden='true'></i>"
		$('.checked-f').append(checkIcon);
		$('.err-checked-f').append(errCheckedIcon);

	// input[type="file"]
	var wrapper = $( ".file-upload" ),
		inp = wrapper.find( "input" ),
		btn = wrapper.find( "button" ),
		lbl = wrapper.find( "div" );
	btn.focus(function(){
		inp.focus()
	});
	// Crutches for the :focus style:
	inp.focus(function(){
		wrapper.addClass( "focus" );
	}).blur(function(){
		wrapper.removeClass( "focus" );
	});

	$('.file-upload button').add(lbl).click(function() {
		$(this).parent().find("input").click();
	})

	var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

	inp.change(function(){
		var file_name;
		if( file_api && inp[ 0 ].files[ 0 ] )
			file_name = inp[ 0 ].files[ 0 ].name;
		else
			file_name = inp.val().replace( "C:\\fakepath\\", '' );

		if( ! file_name.length )
			return;

		if( lbl.is( ":visible" ) ){
			lbl.text( file_name );
			btn.text( "Обзор" );
		}
	}).change();

	$( window ).resize(function(){
	$( ".file_upload input" ).triggerHandler( "change" );
});

	$('.inbox-msg-table tr td .checkbox input[type=checkbox]').on('change', function() {

		if ( $(this).is(':checked') ) {
				$(this).closest('tr').addClass('table-tr-active')
		} else {
			$(this).closest('tr').removeClass('table-tr-active')
		}
	})

	function removeInput() {
		var filterAddTag = '<span class="add-texture-f"></span>'
		var filterTagBlock = '<div class="filter-tag-block"></div>'
		// $('.filter-texture .boottrap-tagsinput').find('input').remove();
		$('.filter-texture .bootstrap-tagsinput').append(filterTagBlock)
		$('.filter-texture .bootstrap-tagsinput input').detach().prependTo('.filter-texture .bootstrap-tagsinput .filter-tag-block')
		$('.filter-texture .bootstrap-tagsinput .filter-tag-block').append(filterAddTag)
		// $('.filter-texture .bootstrap-tagsinput input').before(filterAddTag)
	}

	removeInput()

	// slick
		$('.color-slider').slick({
			vertical: true,
			slidesToShow: 4,
			infinite: false,
			prevArrow: $('.prev'),
			nextArrow: $('.next')
		});

		var slider2 = document.getElementById('sliderDouble');

		noUiSlider.create(slider2, {
			start: [ 0, 5000000 ],
			connect: true,
			range: {
				min:  0,
				max:  9999999
			}
		});

		$('.filter-product-t').click(function() {
			$('.filter-tog-b').slideToggle();
		})
});

$(".reg-tab-t").not(":first").hide();
$(".reg-tab-i").click(function() {
	$(".reg-tab-t").hide().eq($(this).index()).fadeIn()
})
