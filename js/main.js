$('.yearpicker').yearpicker({
          year: 2000,
          startYear: 1930,
          endYear: 2020
        });
$(function(){
	let eWidth = $('#profile-widget').width();
	alert(eWidth)
	$("#profile-widget__popup-inner").css("width", eWidth + 'px');
})