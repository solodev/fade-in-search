$( document ).ready(function() {
    $(document).on('click', '.search-close', function(){
    	$('.search-box').fadeOut();
    });
    $(document).on('click', '.open-search', function(){
    	$('.search-box').fadeIn();
    });
});
