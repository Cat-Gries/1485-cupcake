// JavaScript Document

jQuery(document).ready(function($){
	
		$('.smooth-scroll').on('click', 'a', function(e) {
   			e.preventDefault();
		
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-150
			 }, 1000, function(){
		

			   window.location.hash = hash;
			 });
		
		});

	
});