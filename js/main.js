function makeTimer(){var s=new Date("29 April 2020 9:56:00 GMT+01:00");s=Date.parse(s)/1e3;var e=new Date,o=s-(e=Date.parse(e)/1e3),l=Math.floor(o/86400),i=Math.floor((o-86400*l)/3600),t=Math.floor((o-86400*l-3600*i)/60),n=Math.floor(o-86400*l-3600*i-60*t);i<"10"&&(i="0"+i),t<"10"&&(t="0"+t),n<"10"&&(n="0"+n),$("#days").html(l+"<span></span>"),$("#hours").html(i+"<span></span>"),$("#minutes").html(t+"<span></span>"),$("#seconds").html(n+"<span></span>")}$(function(){$(".menu-toggle-icon").on("click",function(){$(".mb-overlay").addClass("mb-visible")}),$(".mb-overlay-bg , .close-mb-menu").on("click",function(){$(".mb-overlay").removeClass("mb-visible")}),$(".add_to_cart_toggle").on("click",function(){$(".add_to_cart_menu").toggleClass("block")}),$(".has-dropdown-m").on("click",function(s){s.preventDefault();let e=$(this);e.next().hasClass("show")?(e.next().removeClass("show"),e.next().slideUp(350)):(e.parent().parent().find("li .dropdown-mobile").removeClass("show"),e.parent().parent().find("li .dropdown-mobile").slideUp(350),e.next().toggleClass("show"),e.next().slideToggle(350))}),$(".menu_icon").on("click",function(){$(".menu_elements").toggleClass("is_active"),$(this).toggleClass("menu_icon_active")}),$(".work-boxes-slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".market_slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".testi-boxes-slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".blog-boxes-slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:760,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".feautures-boxes-slick").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".clients-slick").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$(".has-submenu").on({mouseenter:function(){$(".sub-nav",this).addClass("visible")},mouseleave:function(){$(".sub-nav",this).removeClass("visible")}}),$(document).ready(function(){var s=0,e=setInterval(function(){s<101?($(".count").text(s+"%"),$(".loader").css("width",s+"%"),s++):clearInterval(e)},30)}),document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(s){s.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})}),setInterval(function(){makeTimer()},1e3),$(".reviews_slick").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!0,autoplaySpeed:2e3,arrows:!0,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:700,settings:{slidesToShow:1,slidesToScroll:1}}]});
