	jQuery(document).ready(function($){

		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		});

		$("#menubar a").click(function(){
			var $this = $(this);
			if(ga){
				ga('send','event','menu','click',$this.html());
			}
		});

		$("#scene").parallax();

		var a = parseFloat(250);
		var b = parseFloat(0);
		var c = parseFloat(250);
		var d = parseFloat(0);

		var scrollTop = $(window).scrollTop();
		//var scroll_actually = new Array();

		$(window).scroll(function(e){
			var $this = $(this);
			if(scrollTop > $this.scrollTop()){
				if(getScrollTop()<=1200 && getScrollTop()>=0){
					a = a+35;
					b = b+10;
					//console.log('a- '+a+' b- '+b);
					$('.img_1').css('backgroundPosition','50% '+a+'px');
					$('.back_0').css('backgroundPosition','0 '+b+'px');
				}
			}
			else{
				if(getScrollTop()>=0 && getScrollTop()<=1200){
					a = a-35;
					b = b-10;
					//console.log('a- '+a+' b- '+b);
					$('.img_1').css('backgroundPosition','50% '+a+'px');
					$('.back_0').css('backgroundPosition','0 '+b+'px');
				}
			}

			if(getScrollTop()==0){
				$("#menubar").hide();
				a = parseFloat(250);
				b = parseFloat(0);
				c = parseFloat(250);
				d = parseFloat(0);
				$('.back_0').css('backgroundPosition', '0 0');
	            $('.back_1').css('backgroundPosition', '0 0');
	            $('.img_2').css('backgroundPosition', '50% '+250+'px');
	            $('.img_1').css('backgroundPosition', '50% '+250+'px');
			}else if(getScrollTop()>100){
				$("#menubar").show();
			}
			scrollTop = $this.scrollTop();
		});

	});

function getScrollTop(){ 
    if(typeof pageYOffset!= 'undefined'){
        //most browsers
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}