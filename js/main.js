var ajax_form = true;

var REG_LINK = ['https://docs.google.com/forms/d/1Ullvh-GfuCKf9kSEd4BgHAkVZ-BD0VGwJpVdCr0Bj3E/viewform',
				'https://docs.google.com/forms/d/19IBgXR7yQlFVG0YySb3R5R7NBj6AYLhHM4zZSa5iBbU/viewform',
				'https://docs.google.com/forms/d/1Nwd6E8gx-_MtO8F0oLqLY7NIzbOt4yI8467cLH7_FvI/viewform'];

var GAMES = [
	{
		name: "Counter Strike 1.6",
		data: "<p class='info'>Counter Strike needs no description.\
			   Its the one of the most played game in the world, and battles still rages between clans\
			   in the bid to become the best of the best.<br />Here's your chance to put to test your FPS\
			   skills and be the best. BIT Mesra presents you CnC '14 , where clans from all over India will\
			   be competing against each other. Loads of prizes awaits for the ultimate winner.\
			   So, why wait - Play Hard, G0 Pr0...</p><br />\
			  <p class='info'><a href='"+REG_LINK[0]+"' target='_blank' >Register</a></p>"
	},
	{
		name: "FIFA",
		data: "<p class='info'>Get closer to the action than ever before by mastering the skills\
			   required to play like a real professional football player in FIFA.\
			   Design your own unique strategy to create the perfect formation and tactics. \
			   Set each player's exact position in the formation, and assign specific attacking \
			   and defensive runs to unlock the opposition.</p><br />\
			   <p class='info'><a href='"+REG_LINK[1]+"' target='_blank' >Register</a></p>"
	},
	{
		name: "Need For Speed",
		data: "<p class='info'>From the creators of the critically-acclaimed Need for Speed Underground \
			  series, Need for Speed Most Wanted combines the thrill of street racing and tuner \
			  customization with the intensity of police pursuits.<br />Get in the driver’s seat \
			  of the most sought-after race cars—including tuners, exotics, muscle cars, and other \
			  sports cars—and experience high-speed, open-world street racing at its best. Tune \
			  your ride, win races, evade cops, become the most wanted. . . .</p><br />\
			  <p class='info'><a href='"+REG_LINK[1]+"' target='_blank' >Register</a></p>"
	}
];

$( document ).ready(function() { // Document ready
 
/*-----------------------------------------------------------------------------------*/
/*	01. FADE IN EFFECTS
/*-----------------------------------------------------------------------------------*/
		
		$('#header .picture').hide();

		$('.fade1').delay(300).fadeIn(1500);
		
		$('.fade2').delay(600).fadeIn(1500);
		
		$('.fade3').delay(900).fadeIn(1500);
		
		$('#header .picture').delay(800).show('fast').animate({'top': 35}, 1500, 'easeOutBack');
			 
		$('#header .picture').css('top', function(){ return $(this).height() });


/*-----------------------------------------------------------------------------------*/
/*	02. Get the CBPSCROLLER
/*-----------------------------------------------------------------------------------*/


			//new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );

			
/*-----------------------------------------------------------------------------------*/
/*	03. SMOOTH SCROLLING ON BUTTON
/*-----------------------------------------------------------------------------------*/
	

$('.button').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash);
    e.preventDefault();
});

$('.features li').click(function(e){
	$this = $(this);
	console.log($this);
	var i = $this.data('arr');
	$.console({
		heading: GAMES[i].name,
		message: 'Register',
		data: GAMES[i].data
	});
});

$("#reach-bit").click(function(){
	$.console({
		heading: 'Reach BIT',
		data: '<div style="text-align:center"><iframe width="800" height="400" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=Fd-EZAEdIVMWBSnfc4fXeOH0OTE5DOPVdllV5Q%3BFQdGZQEdiLYXBSEE58XzHAwYZinne8LwU_v0OTEE58XzHAwYZg&amp;q=kantatoli+to+bit+mesra&amp;sll=23.416715,85.452835&amp;sspn=0.035285,0.066047&amp;ie=UTF8&amp;ll=23.396361,85.388217&amp;spn=0.066444,0.086529&amp;t=h&amp;saddr=kantatoli&amp;daddr=bit+mesra&amp;output=embed"></iframe><br /><small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=Fd-EZAEdIVMWBSnfc4fXeOH0OTE5DOPVdllV5Q%3BFQdGZQEdiLYXBSEE58XzHAwYZinne8LwU_v0OTEE58XzHAwYZg&amp;q=kantatoli+to+bit+mesra&amp;sll=23.416715,85.452835&amp;sspn=0.035285,0.066047&amp;ie=UTF8&amp;ll=23.396361,85.388217&amp;spn=0.066444,0.086529&amp;t=h&amp;saddr=kantatoli&amp;daddr=bit+mesra" style="color:#0000FF;text-align:left">View Larger Map</a></small></div>'
	});
	return false;
});

$("#tshirt>a").click(function(){
	$.console({
		heading: 'CnC Tshirt',
		data: '<p class="info"><a href="'+REG_LINK[2]+'"" target="_blank" >Get It</a></p><img width="900" src="/images/tshirt2.jpg" />',
		attr: 'top:10px'
	});
	return false;
});

});

			
