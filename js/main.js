$('.yearpicker').yearpicker({
          year: 2000,
          startYear: 1930,
          endYear: 2020
        });
$(function(){
	$('#profile-widget__inner').click(function(){
		$('#profile-widget__popup-inner').slideToggle( "200" );
	})
});