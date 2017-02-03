# fade-in-search
An additional method of implementing site search calls for the search form to fade-in and fill the entire screen. This method, while certainly not applicable to every design, does have some benefits. First, the effect largely does not interfere with other design elements. Since the search from appears as a full-screen overlay, you do not have to perfrom any css jiu jitsu to accomodate the new element. Furthermore, with the search form full screen you give clear focus for your end users.

In this tutorial, [Solodev](https://www.solodev.com/) shows how to implement fade-in search on your website.

## Tutorials

For detailed instructions, view Solodev's [Creating an Action Grid Slider on your Website](https://www.solodev.com/blog/web-design/adding-a-fade-in-search-form.stml) article.

## Demo

Try out a working example on [JSFiddle](https://jsfiddle.net/solodev/oq1b7sx5/).

## HTML

The fade-in search contains the following basic markup.
```
<div class="search-box">
	<a href="#" class="search-close"><img src="https://www.solodev.com/assets/fade-in-search/close.png" alt="Close Icon"></a>
	<div class="container">
		<div class="row">
			<form class="search-form col-lg-10 col-lg-offset-1" action="">
				<input id="header-search" placeholder="What are your looking for?" required="" type="text" name="q"> <button class="search-submit" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
			</form>
		</div>
	</div>
</div><!-- .search-box -->

<div class="topmenu" style="background: none;">
	<a href="#" class="logo" title="Go to homepage"><img src="https://www.solodev.com/assets/fade-in-search/logo.png" alt="WebCorpCo Logo" class="img-responsive"></a>
	<div class="nav hidden-sm hidden-xs">
		<ul>
			<li><a href="#" class="dropdown-toggle">About</a></li>
			<li><a href="#" class="dropdown-toggle">Services</a></li>
			<li><a href="#" class="dropdown-toggle">Resources</a></li>
		</ul>
		<a href="#" class="button open-search"><i class="fa fa-search"></i></a>
	</div><!-- .nav -->
	
	<div class="nav visible-sm visible-xs pull-right">
		<ul>
			<li><a href="#" class="button open-search"><i class="fa fa-search"></i></a></li>
			<li><a class="js-toggleMenu" href="#"><i class="fa fa-bars"></i></a></li>
		</ul>
	</div><!-- .mobile-nav -->
</div>
```
## CSS

All required CSS is in the file fade-in-search.css

## JavaScript

This tutorial utilizes the JavaScript below.
```
$( document ).ready(function() {
    $(document).on('click', '.search-close', function(){
    	$('.search-box').fadeOut();
    });
    $(document).on('click', '.open-search', function(){
    	$('.search-box').fadeIn();
    });
});
```

## External Includes

This tutorial utilizes the following third party resources.

```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

