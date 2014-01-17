(function(c){window.MediaBox=function(g){var a={stack:[],current:0,previous:0,element:"a.mediabox",gallery:".media-gallery",duration:500,shift:25,easing:"swing",is_open:!1,init:function(){a.cotainer=c("<div/>").hide().addClass("mediabox-window");c("<div/>").addClass("mediabox-background").appendTo(a.cotainer);a.controls=c("<div/>").addClass("mediabox-controls").appendTo(a.cotainer);a.controls.prev=c("<a/>").addClass("mediabox-prev").appendTo(a.controls);a.controls.close=c("<a/>").addClass("mediabox-close").appendTo(a.controls);
a.controls.next=c("<a/>").addClass("mediabox-next").appendTo(a.controls);var b=c("<div/>").addClass("mediabox-title").appendTo(a.cotainer);a.title=c("<div/>").addClass("mediabox-title-wrapper").appendTo(b).hide();b=c("<div/>").addClass("mediabox-media").appendTo(a.cotainer);a.media=c("<div/>").addClass("mediabox-media-wrapper").appendTo(b);c("body").append(a.cotainer)},next:function(){if(a.current<a.stack.length-1){a.previous=a.current;a.current++;var b=a.stack[a.current];a.load(b.url,b.attrs,b.title)}},
prev:function(){if(0<a.current){a.previous=a.current;a.current--;var b=a.stack[a.current];a.load(b.url,b.attrs,b.title)}},load:function(b,c,d){a.open();a.before();a.slideOut(function(){void 0!==d?a.setTitle(d):a.setTitle("");for(var h in a.types){var f=a.types[h](b,c);if(f){a.push(f.attr(c));break}}})},push:function(b){b&&b.jquery&&(b.css({"max-height":c(window).height()-40}),a.media.empty().append(b),b.load(function(){a.checkDirectionNav();a.slideIn()}))},open:function(){0===a.stack.length?a.hideDirectionNav():
a.showDirectionNav();a.is_open||(a.media.empty(),a.cotainer.fadeIn(a.duration),a.is_open=!0)},close:function(){a.cotainer.fadeOut(a.duration);a.current=0;a.previous=0;a.stack=[];a.is_open=!1;a.unload()},slideOut:function(b){a.media.animate({opacity:0,left:"next"===a.getDirection()?0-parseInt(a.shift,10):parseInt(a.shift,10)},{queue:!1,duration:a.duration,easing:a.easing,complete:function(){b&&b()}});a.title.fadeOut({queue:!1,duration:a.duration,easing:a.easing})},slideIn:function(){a.media.css({opacity:0,
left:"next"===a.getDirection()?parseInt(a.shift,10):0-parseInt(a.shift,10)}).animate({opacity:1,left:0},{queue:!1,duration:a.duration,easing:a.easing,complete:function(){a.after()}});""!==a.title.text()&&a.title.fadeIn({queue:!1,duration:a.duration,easing:a.easing})},setTitle:function(b){void 0!==b&&a.title.html(b)},hideDirectionNav:function(){a.controls.prev.hide();a.controls.next.hide()},showDirectionNav:function(){a.controls.prev.show();a.controls.next.show()},checkDirectionNav:function(){0<a.current?
a.controls.prev.removeClass("mediabox-hidden-control"):a.controls.prev.addClass("mediabox-hidden-control");a.current<a.stack.length-1?a.controls.next.removeClass("mediabox-hidden-control"):a.controls.next.addClass("mediabox-hidden-control")},getDirection:function(){var b="next";a.current<a.previous&&(b="prev");return b},getGalleriesString:function(){for(var b=a.gallery.replace(/\s/g,"").split(","),c=0;c<b.length;c++)b[c]+=" a";return b.join(", ")},types:{image:function(a,e){if(a&&a.match(/^.*\.(jpeg|jpg|gif|png)$/))return c("<img/>").attr({src:a})},
youtube:function(a,e){var d=a?a.match(/^.*((youtu.be\/)|(v\/)|(watch\?))v?=?([^#\&\?]*).*/):null;if(d)return c("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen />").attr({frameborder:0,src:"http://www.youtube.com/embed/"+d[d.length-1],width:640,height:480})},vimeo:function(a,e){var d=a?a.match(/^.*(vimeo.com)\/(\d+)/):null;if(d)return c("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen />").attr({frameborder:0,src:"http://player.vimeo.com/video/"+d[d.length-1]})},
web:function(a,e){if(a&&a.match(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/))return c("<iframe/>").attr({frameborder:0,src:a,width:640,height:480})}},before:function(){},after:function(){},unload:function(){}};c.extend(!0,a,g);c(document).on("click",".mediabox-controls>a",function(b){b.preventDefault();c(this).hasClass("mediabox-close")?a.close():c(this).hasClass("mediabox-prev")?a.prev():c(this).hasClass("mediabox-next")&&a.next();return!1});c(document).on("click",
a.element,function(b){b.preventDefault();b=c(this).attr("href");var e={},d="";c(this).attr("data-dimension")&&(e.width=c(this).attr("data-dimension").split("x")[0],e.height=c(this).attr("data-dimension").split("x")[1]);c(this).attr("title")&&(d=c(this).attr("title"));a.stack=[];a.load(b,e,d);return!1});c(document).on("click",a.getGalleriesString(),function(b){b.preventDefault();b=c(this);var e=c(a.gallery).has(this),d=c(e).find("a");a.stack=[];1==b.parent(a.gallery).length?a.current=b.index():a.current=
e.children().has(this).index();d.each(function(){var b={};c(this).attr("data-dimension")&&(b.width=c(this).attr("data-dimension").split("x")[0],b.height=c(this).attr("data-dimension").split("x")[1]);b={url:c(this).attr("href"),attrs:b,title:c(this).attr("title")?c(this).attr("title"):""};a.stack.push(b)});b=a.stack[a.current];a.load(b.url,b.attrs,b.title);return!1});0===c(".mediabox-window").length&&a.init();return a}})(jQuery);