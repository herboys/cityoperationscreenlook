 // 数字滚动
 function numInit() {
   $('.counter-value').each(function () {
     $(this).prop('Counter', 0).animate({
       Counter: $(this).text()
     }, {
       duration: 2500,
       easing: 'swing',
       step: function (now) {
         $(this).text(now.toFixed(0));
       }
     });
   });
 }

 function numInit1() {
   $('.counter-value1').each(function () {
     $(this).prop('Counter', 0).animate({
       Counter: $(this).text()
     }, {
       duration: 2500,
       easing: 'swing',
       step: function (now) {
         $(this).text(now.toFixed(1));
       }
     });
   });
 }

 function numInit2() {
   $('.counter-value2').each(function () {
     $(this).prop('Counter', 0).animate({
       Counter: $(this).text()
     }, {
       duration: 2500,
       easing: 'swing',
       step: function (now) {
         $(this).text(now.toFixed(2));
       }
     });
   });
 }
 numInit();
 numInit1();
 numInit2();


 (function ($) {
   if (!document.defaultView || !document.defaultView.getComputedStyle) {
     var oldCurCSS = jQuery.curCSS;
     jQuery.curCSS = function (elem, name, force) {
       if (name === 'background-position') {
         name = 'backgroundPosition';
       }
       if (name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[name]) {
         return oldCurCSS.apply(this, arguments);
       }
       var style = elem.style;
       if (!force && style && style[name]) {
         return style[name];
       }
       return oldCurCSS(elem, 'backgroundPositionX', force) + ' ' + oldCurCSS(elem, 'backgroundPositionY', force);
     };
   }
   var oldAnim = $.fn.animate;
   $.fn.animate = function (prop) {
     if ('background-position' in prop) {
       prop.backgroundPosition = prop['background-position'];
       delete prop['background-position'];
     }
     if ('backgroundPosition' in prop) {
       prop.backgroundPosition = '(' + prop.backgroundPosition + ')';
     }
     return oldAnim.apply(this, arguments);
   };

   function toArray(strg) {
     strg = strg.replace(/left|top/g, '0px');
     strg = strg.replace(/right|bottom/g, '100%');
     strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
     var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
     return [parseFloat(res[1], 10), res[2], parseFloat(res[3], 10), res[4]];
   }
   $.fx.step.backgroundPosition = function (fx) {
     if (!fx.bgPosReady) {
       var start = $.css(fx.elem, 'backgroundPosition');
       if (!start) {
         start = '0px 0px';
       }
       start = toArray(start);
       fx.start = [start[0], start[2]];
       var end = toArray(fx.end);
       fx.end = [end[0], end[2]];
       fx.unit = [end[1], end[3]];
       fx.bgPosReady = true;
     }
     var nowPosX = [];
     nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
     nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
     fx.elem.style.backgroundPosition = nowPosX[0] + ' ' + nowPosX[1];
   };
 })(jQuery);










 /**
 * jCarouselLite - jQuery plugin to navigate images/any content in a carousel style widget.
 * @requires jQuery v1.2 or above
 *
 * http://gmarwaha.com/jquery/jcarousellite/
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.1
 * Note: Requires jquery 1.2 or above from version 1.0.1
 */

/**
 * Creates a carousel-style navigation widget for images/any-content from a simple HTML markup.
 *
 * The HTML markup that is used to build the carousel can be as simple as...
 *
 *  <div class="carousel">
 *      <ul>
 *          <li><img src="image/1.jpg" alt="1"></li>
 *          <li><img src="image/2.jpg" alt="2"></li>
 *          <li><img src="image/3.jpg" alt="3"></li>
 *      </ul>
 *  </div>
 *
 * As you can see, this snippet is nothing but a simple div containing an unordered list of images.
 * You don't need any special "class" attribute, or a special "css" file for this plugin.
 * I am using a class attribute just for the sake of explanation here.
 *
 * To navigate the elements of the carousel, you need some kind of navigation buttons.
 * For example, you will need a "previous" button to go backward, and a "next" button to go forward.
 * This need not be part of the carousel "div" itself. It can be any element in your page.
 * Lets assume that the following elements in your document can be used as next, and prev buttons...
 *
 * <button class="prev">&lt;&lt;</button>
 * <button class="next">&gt;&gt;</button>
 *
 * Now, all you need to do is call the carousel component on the div element that represents it, and pass in the
 * navigation buttons as options.
 *
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 *
 * That's it, you would have now converted your raw div, into a magnificient carousel.
 *
 * There are quite a few other options that you can use to customize it though.
 * Each will be explained with an example below.
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option btnPrev, btnNext : string - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 * @desc Creates a basic carousel. Clicking "btnPrev" navigates backwards and "btnNext" navigates forward.
 *
 * @option btnGo - array - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      btnGo: [".0", ".1", ".2"]
 * });
 * @desc If you don't want next and previous buttons for navigation, instead you prefer custom navigation based on
 * the item number within the carousel, you can use this option. Just supply an array of selectors for each element
 * in the carousel. The index of the array represents the index of the element. What i mean is, if the
 * first element in the array is ".0", it means that when the element represented by ".0" is clicked, the carousel
 * will slide to the first element and so on and so forth. This feature is very powerful. For example, i made a tabbed
 * interface out of it by making my navigation elements styled like tabs in css. As the carousel is capable of holding
 * any content, not just images, you can have a very simple tabbed navigation in minutes without using any other plugin.
 * The best part is that, the tab will "slide" based on the provided effect. :-)
 *
 * @option mouseWheel : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      mouseWheel: true
 * });
 * @desc The carousel can also be navigated using the mouse wheel interface of a scroll mouse instead of using buttons.
 * To get this feature working, you have to do 2 things. First, you have to include the mouse-wheel plugin from brandon.
 * Second, you will have to set the option "mouseWheel" to true. That's it, now you will be able to navigate your carousel
 * using the mouse wheel. Using buttons and mouseWheel or not mutually exclusive. You can still have buttons for navigation
 * as well. They complement each other. To use both together, just supply the options required for both as shown below.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      mouseWheel: true
 * });
 *
 * @option auto : number - default is null, meaning autoscroll is disabled by default
 * @example
 * $(".carousel").jCarouselLite({
 *      auto: 800,
 *      speed: 500
 * });
 * @desc You can make your carousel auto-navigate itself by specfying a millisecond value in this option.
 * The value you specify is the amount of time between 2 slides. The default is null, and that disables auto scrolling.
 * Specify this value and magically your carousel will start auto scrolling.
 *
 * @option speed : number - 200 is default
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      speed: 800
 * });
 * @desc Specifying a speed will slow-down or speed-up the sliding speed of your carousel. Try it out with
 * different speeds like 800, 600, 1500 etc. Providing 0, will remove the slide effect.
 *
 * @option easing : string - no easing effects by default.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      easing: "bounceout"
 * });
 * @desc You can specify any easing effect. Note: You need easing plugin for that. Once specified,
 * the carousel will slide based on the provided easing effect.
 *
 * @option vertical : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      vertical: true
 * });
 * @desc Determines the direction of the carousel. true, means the carousel will display vertically. The next and
 * prev buttons will slide the items vertically as well. The default is false, which means that the carousel will
 * display horizontally. The next and prev items will slide the items from left-right in this case.
 *
 * @option circular : boolean - default is true
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      circular: false
 * });
 * @desc Setting it to true enables circular navigation. This means, if you click "next" after you reach the last
 * element, you will automatically slide to the first element and vice versa. If you set circular to false, then
 * if you click on the "next" button after you reach the last element, you will stay in the last element itself
 * and similarly for "previous" button and first element.
 *
 * @option visible : number - default is 3
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      visible: 4
 * });
 * @desc This specifies the number of items visible at all times within the carousel. The default is 3.
 * You are even free to experiment with real numbers. Eg: "3.5" will have 3 items fully visible and the
 * last item half visible. This gives you the effect of showing the user that there are more images to the right.
 *
 * @option start : number - default is 0
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      start: 2
 * });
 * @desc You can specify from which item the carousel should start. Remember, the first item in the carousel
 * has a start of 0, and so on.
 *
 * @option scrool : number - default is 1
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      scroll: 2
 * });
 * @desc The number of items that should scroll/slide when you click the next/prev navigation buttons. By
 * default, only one item is scrolled, but you may set it to any number. Eg: setting it to "2" will scroll
 * 2 items when you click the next or previous buttons.
 *
 * @option beforeStart, afterEnd : function - callbacks
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      beforeStart: function(a) {
 *          alert("Before animation starts:" + a);
 *      },
 *      afterEnd: function(a) {
 *          alert("After animation ends:" + a);
 *      }
 * });
 * @desc If you wanted to do some logic in your page before the slide starts and after the slide ends, you can
 * register these 2 callbacks. The functions will be passed an argument that represents an array of elements that
 * are visible at the time of callback.
 *
 *
 * @cat Plugins/Image Gallery
 * @author Ganeshji Marwaha/ganeshread@gmail.com
 */

(function($) {                                          // Compliant with jquery.noConflict()
  $.fn.jCarouselLite = function(o) {
      o = $.extend({
          btnPrev: null,
          btnNext: null,
          btnGo: null,
          mouseWheel: false,
          auto: null,
          hoverPause: false,
  
          speed: 200,
          easing: null,
  
          vertical: false,
          circular: true,
          visible: 3,
          start: 0,
          scroll: 1,
  
          beforeStart: null,
          afterEnd: null
      }, o || {});
  
      return this.each(function() {                           // Returns the element collection. Chainable.
  
          var running = false, animCss=o.vertical?"top":"left", sizeCss=o.vertical?"height":"width";
          var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;
  
          if(o.circular) {
              ul.prepend(tLi.slice(tl-v+1).clone())
                .append(tLi.slice(0,o.scroll).clone());
              o.start += v-1;
          }
  
          var li = $("li", ul), itemLength = li.size(), curr = o.start;
          div.css("visibility", "visible");
  
          li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
          ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
          div.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});
  
          var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
          var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
          var divSize = liSize * v;                           // size of entire div(total length for just the visible items)
  
          li.css({width: li.width(), height: li.height()});
          ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize));
  
          div.css(sizeCss, divSize+"px");                     // Width of the DIV. length of visible images
  
          if(o.btnPrev) {
              $(o.btnPrev).click(function() {
                  return go(curr-o.scroll);
              });
              if(o.hoverPause) {
                  $(o.btnPrev).hover(function(){stopAuto();}, function(){startAuto();});
              }
          }
  
  
          if(o.btnNext) {
              $(o.btnNext).click(function() {
                  return go(curr+o.scroll);
              });
              if(o.hoverPause) {
                  $(o.btnNext).hover(function(){stopAuto();}, function(){startAuto();});
              }
          }
  
          if(o.btnGo)
              $.each(o.btnGo, function(i, val) {
                  $(val).click(function() {
                      return go(o.circular ? o.visible+i : i);
                  });
              });
  
          if(o.mouseWheel && div.mousewheel)
              div.mousewheel(function(e, d) {
                  return d>0 ? go(curr-o.scroll) : go(curr+o.scroll);
              });
  
          var autoInterval;
  
          function startAuto() {
            stopAuto();
            autoInterval = setInterval(function() {
                    go(curr+o.scroll);
                }, o.auto+o.speed);
          };
  
          function stopAuto() {
              clearInterval(autoInterval);
          };
  
          if(o.auto) {
              if(o.hoverPause) {
                  div.hover(function(){stopAuto();}, function(){startAuto();});
              }
              startAuto();
          };
  
          function vis() {
              return li.slice(curr).slice(0,v);
          };
  
          function go(to) {
              if(!running) {
  
                  if(o.beforeStart)
                      o.beforeStart.call(this, vis());
  
                  if(o.circular) {            // If circular we are in first or last, then goto the other end
                      if(to<0) {           // If before range, then go around
                          ul.css(animCss, -( (curr + tl) * liSize)+"px");
                          curr = to + tl;
                      } else if(to>itemLength-v) { // If beyond range, then come around
                          ul.css(animCss, -( (curr - tl) * liSize ) + "px" );
                          curr = to - tl;
                      } else curr = to;
                  } else {                    // If non-circular and to points to first or last, we just return.
                      if(to<0 || to>itemLength-v) return;
                      else curr = to;
                  }                           // If neither overrides it, the curr will still be "to" and we can proceed.
  
                  running = true;
  
                  ul.animate(
                      animCss == "left" ? { left: -(curr*liSize) } : { top: -(curr*liSize) } , o.speed, o.easing,
                      function() {
                          if(o.afterEnd)
                              o.afterEnd.call(this, vis());
                          running = false;
                      }
                  );
                  // Disable buttons when the carousel reaches the last/first, and enable when not
                  if(!o.circular) {
                      $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                      $( (curr-o.scroll<0 && o.btnPrev)
                          ||
                         (curr+o.scroll > itemLength-v && o.btnNext)
                          ||
                         []
                       ).addClass("disabled");
                  }
  
              }
              return false;
          };
      });
  };
  
  function css(el, prop) {
      return parseInt($.css(el[0], prop)) || 0;
  };
  function width(el) {
      return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
  };
  function height(el) {
      return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
  };
  
  })(jQuery);



  /* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": .8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);



/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};



    $(function() {
        function apiFn() {
            this.hostname = ""
        }
        apiFn.prototype = {
            Init:function() {
                this.findCount()
                this.otherDataFn()
                this.baseInfo()
                this.questionFn()
                this.publicityFn()
                this.threeTasksFn()
                this.departmentFn()
                this.guideFn()
                this.policyFn()
                this.coverageFn()
                this.yearsNumFn()
                this.contentFn()
                this.publicNumFn()
                setInterval(function() {
                    numInit()
                },6000)
            },
            findCount:function() {
               
            },
            // 其他数据展示
            otherDataFn:function() {
                $(".daysData").addClass("counter-value").text("304")
                $(".weekData").addClass("counter-value").text("2044")
                $(".monthData").addClass("counter-value").text("909")
                $(".someThing").addClass("counter-value").text("980")
                $(".policyData").addClass("counter-value").text("200")
            },
            // 基础信息
            baseInfo:function() {
                
                
                var baseChart = echarts.init(document.getElementById('baseId'));
                var charts = [
                    {name: "测试1", num: 200},
                    {name: "测试2", num: 300},
                    {name: "测试3", num: 400},
                    {name: "测试4", num: 500},
                    {name: "测试5", num: 300},
                ]
                var color = ['rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249']

                let lineY = []
                for (var i = 0; i < charts.length; i++) {
                var x = i
                if (x > color.length - 1) {
                    x = color.length - 1
                }
                var data = {
                    name: charts[i].name,
                    color: color[x] + ')',
                    value: charts[i].num,
                    itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                        }, {
                        offset: 1,
                        color: color[x] + ', 1)'
                        }], false),
                        barBorderRadius: 10
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(0, 0, 0, 0.1)'
                    }
                    }
                }
                lineY.push(data)
                }
                var option= {
                title: {
                    show: false
                },
                grid: {
                    // borderWidth: 1,
                    top: '10%',
                    left: '30%',
                    right: '20%',
                    bottom: '3%'
                },
                color: color,
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisTick: {
                    show: false
                    },
                    axisLine: {
                    show: false
                    },
                    axisLabel: {
                    show: false,
                    inside: false
                    },
                    data: charts.name
                }, {
                    type: 'category',
                    inverse: true,
                    axisLine: {
                    show: false
                    },
                    axisTick: {
                    show: false
                    },
                    axisLabel: {
                    show: true,
                    inside: false,
                    textStyle: {
                        color: '#38E1E1',
                        fontSize: '8',
                    },
                    formatter: function (val,index) {
                        return `${charts[index].num}`
                    }
                    },
                    splitArea: {
                    show: false
                    },
                    splitLine: {
                    show: false
                    },
                    data: charts
                }],
                xAxis: {
                    // type: 'value',
                    axisTick: {
                    show: false
                    },
                    axisLine: {
                    show: false
                    },
                    splitLine: {
                    show: false
                    },
                    axisLabel: {
                    show: false
                    }
                },
                series: [{
                    name: '',
                    type: 'bar',
                    zlevel: 2,
                    barWidth: '5px',
                    data: lineY,
                    animationDuration: 1500,
                    label: {
                    normal: {
                        color: 'white',
                        show: true,
                        position: [-65, -2],
                        textStyle: {
                        fontSize: 8
                        },
                        formatter: function (a, b) {
                            return a.name
                        }
                    }
                    }
                }],
                animationEasing: 'cubicOut'
                }
                baseChart.setOption(option)
                setInterval(function() {
                    baseChart.clear()
                    baseChart.setOption(option)
                },40000)
            },
            // 问题反馈类型占比
            questionFn:function() {
                var numArr = [
                    {name: '测试11', value: 300},
                    {name: '测试22', value: 500},
                    {name: '测试33', value: 400},
                    {name: '测试44', value: 350},
                    {name: '测试55', value: 363},
                    {name: '测试66', value: 800},
                ]
                // for(var i = 0; i < data.list.length; i++) {
                //     numArr.push({name: data.list[i].name,value: data.list[i].num})
                // }
                var datas = numArr
                var questionChart = echarts.init(document.getElementById('questionId'));
                var option = {
                    title: {
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    color:['#2E8CFF', '#FD9133','#37D2D4','#19CA88','#858FF8'],
                    legend: {
                        itemWidth: 11,// 标志图形的长度
                        itemHeight: 11,// 标志图形的宽度
                        orient: 'vertical',
                        // left: 'right',
                        top: '15%',
                        x: '50%',
                        data: datas,
                        textStyle: { //图例文字的样式
                            color: '#fff',
                            fontSize: 8
                        },
                    },
                    series: [
                        {
                            name: '问题反馈',
                            type: 'pie',
                            radius: '75%',
                            center: ['20%', '50%'],
                            animationDuration: 2500,
                            data: datas,
                            label: {
                                normal: {
                                    position: 'inner',
                                    show : false
                                }
                            }
                        }
                    ]
                };
                questionChart.setOption(option)
                setInterval(function() {
                    questionChart.clear()
                    questionChart.setOption(option)
                },8000)
            },
            // 党务公开
            publicityFn:function() {
                var dataArr = [
                    {name: '测试11', value: 300},
                    {name: '测试22', value: 500},
                    {name: '测试33', value: 400},
                    {name: '测试44', value: 350},
                    {name: '测试55', value: 363},
                    {name: '测试66', value: 800},
                ]
                // for(var i = 0; i < res.list.length; i++) {
                //     dataArr.push({name: res.list[i].name, value: res.list[i].num})
                // }

                var publicitChart = echarts.init(document.getElementById('publicityId'));
                var data = dataArr
                var option = {
                    color: ['#38EB70', '#F7E16C', '#0EFCFF', '#FD9133', '#4D92F2'],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        itemWidth: 12,// 标志图形的长度
                        itemHeight: 12,// 标志图形的宽度
                        orient: 'vertical',
                        // left: 'right',
                        top: '5%',
                        bottom: '50%',
                        x: '45%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 8,

                        },
                        data: data,
                    },
                    series: [
                        // 主要展示层的
                        {
                            radius: ['70%', '90%'],
                            center: ['25%', '50%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    position: 'inner',
                                    show : false
                                }
                            },
                            name: "XX公开数量",
                            data: data,
                        },
                        // 边框的设置
                        {
                            radius: ['50%', '55%'],
                            center: ['25%', '50%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            data: [{
                                value: 1,
                                itemStyle: {
                                    color: "rgba(250,250,250,0.3)",
                                },
                            }],
                        }
                    ]
                };
                publicitChart.setOption(option)
                setInterval(function() {
                    publicitChart.clear()
                    publicitChart.setOption(option)
                },6000)
            },
            // 三务公开数量
            threeTasksFn:function() {
                let names = "666666";
                if(6 - names.length > 0) {
                    for(g = 0; g < 6 - names.length; g++) {
                        $(".main_top_middle_num_list"+(6 - g)).text('0')
                    }
                }
                for(var j = 0; j < names.length; j++) {
                    $(".main_top_middle_num_list"+(names.length - j)).text(names.substr(j,1))
                }
                var dataArr = [
                    {name: '测试11', value: 300},
                    {name: '测试22', value: 500},
                    {name: '测试33', value: 400},
                    {name: '测试44', value: 350},
                    {name: '测试55', value: 363},
                    {name: '测试66', value: 800},
                ]
                for(var i = 1; i < dataArr.length; i++) {
                    $(".main_top_left_c_l_n"+i).addClass("counter-value").text(dataArr[i].value)
                }
                var threeTasksChart = echarts.init(document.getElementById('threeTasksId'));
                var data = dataArr
                var option = {
                    color: ['#38EB70', '#2E8CFF', '#0EFCFF', '#858FF8', '#FD9133','#F7E270'],
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        itemWidth: 15,// 标志图形的长度
                        itemHeight: 15,// 标志图形的宽度
                        orient: 'vertical',
                        // left: 'right',
                        top: '10%',
                        bottom: '50%',
                        x: '50%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 8,

                        },
                        data: data
                    },
                    series : 
                        {
                            name:'三务公开数量',
                            type:'pie',
                            animationDuration: 1500,
                            radius: ['70%', '90%'],
                            center: ['25%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    position: 'inner',
                                    show : false
                                }
                            },
                            data:data
                        }
                };
                threeTasksChart.setOption(option)
                setInterval(function() {
                    threeTasksChart.clear()
                    threeTasksChart.setOption(option)
                },4000)
            },
            // 各部门苏木镇嘎查村公开占比
            departmentFn:function() {
                var dataArr = [
                    {name: '测试11', value: 300},
                    {name: '测试22', value: 500},
                    {name: '测试33', value: 400},
                    {name: '测试44', value: 350},
                    {name: '测试55', value: 363},
                ]
                    // 中间滚动数据展示
                    for(var j = 0; j < dataArr.length; j++) {
                        $(".main_list_title_num"+(j+1)).addClass("counter-value").text(dataArr[j].value)
                        $(".main_list_title"+(j+1)).text(dataArr[j].name)
                    }
                var departmentChart = echarts.init(document.getElementById('departmentId'));
                var data = dataArr
                var option = {
                    color: ['#FD9133', '#47F6A2', '#37D2D4', '#3493FF'],
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        itemWidth: 15,// 标志图形的长度
                        itemHeight: 15,// 标志图形的宽度
                        orient: 'vertical',
                        // left: 'right',
                        top: '30%',
                        bottom: '50%',
                        x: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 8,

                        },
                        data: data,
                    },
                    series: [
                        {
                            name: 'XXXX公开占比',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['78%', '52%'],
                            labelLine: {
                                normal: {
                                    length: 12,
                                    lineStyle: {
                                        type: 'solid',
                                        color: '#0EFCFF'
                                    }
                                }

                            },
                            label: {
                                normal: {
                                    formatter: (params)=>{
                                        return params.name
                                    },
                                    borderWidth: 0,
                                    borderRadius: 4,
                                    padding: [0,0],
                                    height: 20,
                                    fontSize: 8,
                                    align: 'center',
                                    color: '#0EFCFF',
                                }
                            },
                            data: data
                        },
                        {
                            color: '#0EFCFF',
                            type: 'pie',
                            radius: ['55', '56'],
                            center: ['78%', '52%'],
                            data: [100],
                            label: {
                                show: false
                            }
                        },
                        {
                            type: 'pie',
                            radius: ['25', '26'],
                            center: ['78%', '52%'],
                            data: [100],
                            label: {
                                show: false
                            }
                        }
                    ]
                };
                departmentChart.setOption(option)
                setInterval(function() {
                    departmentChart.clear()
                    departmentChart.setOption(option)
                },12000)
            },
            // 办事指南
            guideFn:function() {
                $(".main_bottom_t_l_main").jCarouselLite({
                    vertical: true,
                    hoverPause:true,
                    visible: 4,
                    auto: 1000,
                    speed: 500
                });
            },
            // 政策解读
            policyFn:function() {
                $(".main_bottom_t_l_main2").jCarouselLite({
                    vertical: true,
                    hoverPause:true,
                    visible: 4,
                    auto: 1000,
                    speed: 500
                });
            },
            // 主要关注内容区域占比
            coverageFn:function() {
                var resArr = [
                    {name: '测试11', value: 300},
                    {name: '测试22', value: 500},
                    {name: '测试33', value: 400},
                    {name: '测试44', value: 350},
                    {name: '测试55', value: 363},
                    {name: '测试66', value: 800},
                ]
                var indicatorArr = []
                var numArr = []
                for(var i = 0; i < resArr.length; i++) {
                    indicatorArr.push({name: resArr[i].name,max: 900})
                    numArr.push(resArr[i].value)
                }
                var data = [
                    {
                        value: numArr,
                    }
                ]
                var coverageChart = echarts.init(document.getElementById('coverageId'));
                var option = {
                    legend: {
                        show: true,
                        icon: "circle",
                        bottom: 30,
                        center: 0,
                        itemWidth: 14,
                        itemHeight: 14,
                        itemGap: 21,
                        orient: "horizontal",
                        data: ['a', 'b'],
                        textStyle: {
                            fontSize: '70%',
                            color: '#0EFCFF'
                        },
                    },

                    radar: {
                        // shape: 'circle',
                        radius: '70%',
                        triggerEvent: true,
                        // type: 'default',
                        name: {
                            textStyle: {
                                color: '#39DCF4',
                                fontSize: '10',
                                // borderRadius: 3,
                                padding: [10, 10]
                            }
                        },
                        nameGap: '2',
                        indicator: indicatorArr,
                        splitArea: {
                            areaStyle: {
                                color: 'rgba(255,255,255,0)'
                            }
                        },
                        axisLine: { //指向外圈文本的分隔线样式
                            lineStyle: {
                                color: 'rgba(255,255,255,.2)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                width: 1,
                                color: 'rgba(255,255,255,.2)'
                            }
                        },

                    },
                    series: [{
                        name: 'XXX区域占比',
                        type: 'radar',
                        animationDuration: 2000,
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    color: '#2EEFAD'
                                }
                            }
                        },
                        symbolSize: 0,
                        lineStyle: {
                            normal: {
                                // color: 'rgba(252,211,3, 1)',
                                width: 0
                            }
                        },
                        data: data
                    }]
                };
                coverageChart.setOption(option)
                setInterval(function() {
                    coverageChart.clear()
                    coverageChart.setOption(option)
                },10000)
            },
            // 本年公开数量
            yearsNumFn:function() {
                var resArr = [
                    {name: '测试11', value: 30},
                    {name: '测试22', value: 50},
                    {name: '测试33', value: 40},
                    {name: '测试44', value: 35},
                    {name: '测试55', value: 36},
                    {name: '测试66', value: 80},
                ]
                var nameArr = []
                var caiArr = []
                var cunArr = []
                var danArr = []
                var junArr = []
                var zhenArr = []
                for(var i = 0; i < resArr.length; i++) {
                    nameArr.push(resArr[i].name)
                    caiArr.push(resArr[i].value)
                    cunArr.push(resArr[i].value)
                    danArr.push(resArr[i].value)
                    junArr.push(resArr[i].value)
                    zhenArr.push(resArr[i].value)
                }
                var yearsNumChart = echarts.init(document.getElementById('yearsNumId'));
                var spNum = 5,_max=100;
                var y_data = nameArr.reverse();
                var _datamax = [100,100,100,100,100,100,100,100,100,100,100,100],
                    _data1 = caiArr.reverse(),
                    _data2 = cunArr.reverse(),
                    _data3 = danArr.reverse();
                    _data4 = junArr.reverse();
                    _data5 = zhenArr.reverse();
                var fomatter_fn = function(v) {
                    return (v.value / _max * 100).toFixed(0) 
                }
                var _label = {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: fomatter_fn,
                        textStyle: {
                            color: '#fff',
                            fontSize: 8
                        }
                    }
                };
                var option = {
                    grid: {
                        containLabel: true,
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    },
                    tooltip: {
                        show: true,
                        backgroundColor: '#fff',
                        borderColor: '#ddd',
                        borderWidth: 1,
                        textStyle: {
                            color: '#3c3c3c',
                            fontSize: 16
                        },
                        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
                    },
                    xAxis: {
                        splitNumber: spNum,
                        interval: _max / spNum,
                        max: _max,
                        axisLabel: {
                            show: false,
                            formatter: function(v) {
                                var _v = (v / _max * 100).toFixed(0);
                                return _v == 0 ? _v : _v + '%';
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }

                    },
                    yAxis: [{
                        data: y_data,
                        axisLabel: {
                            fontSize: 8,
                            color: 'rgba(255,255,255,.7)'

                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    }, {
                        show: false,
                        data: y_data,
                        axisLine: {
                            show: false
                        }
                    }],
                    series: [{
                        type: 'bar',
                        name: '财务',
                        stack: '2',
                        label: _label,
                        legendHoverLink: false,
                        barWidth: 7,
                        itemStyle: {
                            normal: {
                                color: '#FD9133'
                            },
                            emphasis: {
                                color: '#FD9133'
                            }
                        },
                        data: _data1
                    }, {
                        type: 'bar',
                        name: '村务',
                        stack: '2',
                        legendHoverLink: false,
                        barWidth: 20,
                        label: _label,
                        itemStyle: {
                            normal: {
                                color: '#2E8CFF'
                            },
                            emphasis: {
                                color: '#2E8CFF'
                            }
                        },
                        data: _data2
                    }, {
                        type: 'bar',
                        stack: '2',
                        name: '党务',
                        legendHoverLink: false,
                        barWidth: 20,
                        label: _label,
                        itemStyle: {
                            normal: {
                                color: '#37D2D4'
                            },
                            emphasis: {
                                color: '#37D2D4'
                            }
                        },
                        data: _data3
                    }, {
                        type: 'bar',
                        stack: '2',
                        name: '居务',
                        legendHoverLink: false,
                        barWidth: 20,
                        label: _label,
                        itemStyle: {
                            normal: {
                                color: '#19CA88'
                            },
                            emphasis: {
                                color: '#19CA88'
                            }
                        },
                        data: _data4
                    }, {
                        type: 'bar',
                        stack: '2',
                        name: '政务',
                        legendHoverLink: false,
                        barWidth: 20,
                        label: _label,
                        itemStyle: {
                            normal: {
                                color: '#0EFCFF'
                            },
                            emphasis: {
                                color: '#0EFCFF'
                            }
                        },
                        data: _data5
                    }]
                };
                yearsNumChart.setOption(option)
                setInterval(function() {
                    yearsNumChart.clear()
                    yearsNumChart.setOption(option)
                },120000)
            },
            // 关注内容区域占比
            contentFn:function() {
                var resArr = [
                    {name: '测试11', value: 30},
                    {name: '测试22', value: 50},
                    {name: '测试55', value: 33},
                    {name: '测试66', value: 80},
                ]
                var nameArr = []
                var caiArr = []
                var cunArr = []
                var danArr = []
                var junArr = []
                var zhenArr = []
                for(var i = 0; i < resArr.length; i++) {
                    nameArr.push(resArr[i].name)
                    caiArr.push(resArr[i].value)
                    cunArr.push(resArr[i].value)
                    danArr.push(resArr[i].value)
                    junArr.push(resArr[i].value)
                    zhenArr.push(resArr[i].value)
                }

                var contentChart = echarts.init(document.getElementById('contentId'));
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x: '35%',
                        y: '0%',
                        data: ["财务","村务","党务","居务","政务"],
                        textStyle: {
                            color: "#fff",
                            fontSize: 8
                        },
                        itemWidth: 10,
                        itemHeight: 10,
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: nameArr,
                            axisLabel: {
                                interval: 0,
                                textStyle: {
                                    fontSize: 8,
                                    color: 'rgba(255,255,255,.7)',
                                }
                            },
                            "axisTick": {       //y轴刻度线
                                "show": false
                            },
                            "axisLine": {       //y轴
                                "show": false,
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            name: '单位：%',
                            nameTextStyle: {
                                color: 'rgba(255,255,255,.7)',
                                fontSize: 8
                            },
                            max: 100,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            "axisTick": {       //y轴刻度线
                                "show": false
                            },
                            "axisLine": {       //y轴
                                "show": false,
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(255,255,255,.8)',
                                    fontSize: 8
                                    // opacity: 0.1,
                                }
                            },
                            splitLine: {  //决定是否显示坐标中网格
                                show: true,
                                lineStyle: {
                                    color: ['#fff'],
                                    opacity: 0.2
                                }
                            },
                        },
                        {
                            type: 'value',
                            scale: true,
                            show: false,
                            // name: "销量额(万元)",
                            nameTextStyle: {
                                color: 'rgba(255,255,255,.2)',
                            },
                            max: 1,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            "axisTick": {       //y轴刻度线
                                "show": false
                            },
                            "axisLine": {       //y轴
                                "show": false,
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(255,255,255,.2)',
                                    // opacity: 0.1,
                                }
                            },
                            splitLine: {  //决定是否显示坐标中网格
                                show: true,
                                lineStyle: {
                                    color: ['#fff'],
                                    opacity: 0.2
                                }
                            },

                        }
                    ],
                    color: ['#0EFCFF', '#FD9133'],
                    grid: {
                        left: '5%',
                        right: '1%',
                        top: '25%',
                        bottom: '15%'
                        // containLabel: true
                    },
                    series: [
                        {
                            barWidth: '10%',
                            name: '财务',
                            type: 'bar',
                            data: caiArr,
                        },
                        {
                            animationDuration: 2500,
                            barWidth: '20%',
                            name: '村务',
                            type: 'bar',
                            data: cunArr,
                        },
                        {
                            animationDuration: 2500,
                            barWidth: '20%',
                            name: '党务',
                            type: 'bar',
                            data: danArr,
                        },
                        {
                            animationDuration: 2500,
                            barWidth: '20%',
                            name: '居务',
                            type: 'bar',
                            data: junArr,
                        },
                        {
                            animationDuration: 2500,
                            barWidth: '20%',
                            name: '政务',
                            type: 'bar',
                            data: zhenArr,
                        }
                    ]
                };
                contentChart.setOption(option)
                setInterval(function() {
                    contentChart.clear()
                    contentChart.setOption(option)
                },90000)
            },
            // 巡察
            publicNumFn:function() {
                var resArr = [
                    {name: '测试11', value: 300},
                    {name: '测试22', value: 500},
                    {name: '测试33', value: 400},
                    {name: '测试44', value: 350},
                    {name: '测试55', value: 363},
                    {name: '测试66', value: 800},
                ]
                var xunArr = []
                var jingArr = []
                var dateArr = []
                for(var i = 0; i < resArr.length; i++) {
                    xunArr.push(resArr[i].value)
                    jingArr.push(resArr[i].value)
                    dateArr.push(resArr[i].name)
                }
                var publicNumChart = echarts.init(document.getElementById('publicNumId'));
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x: '35%',
                        y: '0%',
                        data: ['巡察', '警示'],
                        textStyle: {
                            color: "#fff",
                            fontSize: 8
                        },
                        itemWidth: 10,
                        itemHeight: 10,
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: dateArr,
                            axisLabel: {
                                interval: 0,
                                textStyle: {
                                    fontSize: 8,
                                    color: 'rgba(255,255,255,.7)',
                                }
                            },
                            "axisTick": {       //y轴刻度线
                                "show": false
                            },
                            "axisLine": {       //y轴
                                "show": false,
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            name: '单位：%',
                            nameTextStyle: {
                                color: 'rgba(255,255,255,.7)',
                                fontSize: 8
                            },
                            max: 1000,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            "axisTick": {       //y轴刻度线
                                "show": false
                            },
                            "axisLine": {       //y轴
                                "show": false,
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(255,255,255,.8)',
                                    fontSize: 8
                                    // opacity: 0.1,
                                }
                            },
                            splitLine: {  //决定是否显示坐标中网格
                                show: true,
                                lineStyle: {
                                    color: ['#fff'],
                                    opacity: 0.2
                                }
                            },
                        },
                        {
                            type: 'value',
                            scale: true,
                            show: false,
                            // name: "销量额(万元)",
                            nameTextStyle: {
                                color: 'rgba(255,255,255,.2)',
                            },
                            max: 1,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            "axisTick": {       //y轴刻度线
                                "show": false
                            },
                            "axisLine": {       //y轴
                                "show": false,
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(255,255,255,.2)',
                                    // opacity: 0.1,
                                }
                            },
                            splitLine: {  //决定是否显示坐标中网格
                                show: true,
                                lineStyle: {
                                    color: ['#fff'],
                                    opacity: 0.2
                                }
                            },

                        }
                    ],
                    color: ['#2E8CFF', '#38EB70'],
                    grid: {
                        left: '5%',
                        right: '1%',
                        top: '25%',
                        bottom: '15%'
                        // containLabel: true
                    },
                    series: [
                        {
                            animationDuration: 2500,
                            barWidth: '20%',
                            name: '巡察',
                            type: 'bar',
                            data: xunArr,
                        },
                        {
                            barWidth: '20%',
                            name: '警示',
                            type: 'bar',
                            data: jingArr,
                        }
                    ],
                    animationEasing: 'cubicOut'
                };
                publicNumChart.setOption(option)
                setInterval(function() {
                    publicNumChart.clear()
                    publicNumChart.setOption(option)
                },60000)
            }
            
        }
        var start = new apiFn()
        start.Init()
    })

