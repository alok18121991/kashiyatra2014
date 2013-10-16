$("document").ready(function () {
	$('.buttonclose a').on('click', function() {
		$(this).parent().parent().fadeOut(1000);
		$(this).off('click');
		return false;
	});

   
   $('#home,#hm,.pr,.re,.co,.comp,.sp').click(
        function (e) {
            $('html, body').animate({scrollTop: '0px'}, 800);
        }
    );
   $("#home").click();
  

  
});
