function FeaturedDeals(e){if($("#featureddeals-tab").length>0){var a=e.data("settingsid");"True"==e.data("autoselect")&&GetFeaturedDealsData(a,e)}}function GetFeaturedDealsData(e,a){$.ajax({type:"POST",url:"/enbdapi/v1/deals/featureddealstab",data:{SettingsId:e,Language:ENBD.CurrentLanguage},success:function(e){UpdateFeaturedDealsTemplate(e,a)}})}function UpdateFeaturedDealsTemplate(e,a){var t=document.getElementById("FeaturedDeals-template").innerHTML,d=Handlebars.compile(t)(e);$(a.attr("href")).html(d),$(a).data("loaded",!0),setTimeout((function(){nbdCardDeals()}),100)}$(document).ready((function(){FeaturedDeals($("#featureddeals-tab a.active")),$(".tab-item__link").click((function(){1!=$(this).data("loaded")&&FeaturedDeals($(this))}))})),$((jQuery,void $((function(){nbdCardDeals()}))));var nbdCardDeals=function(){new Swiper(".card-deals__swiper",{slidesPerView:2,spaceBetween:0,autoHeight:!0,navigation:{nextEl:".card-deals__swiper-next",prevEl:".card-deals__swiper-prev"},pagination:{el:".card-deals__swiper-pagination",clickable:!0},breakpoints:{540:{slidesPerView:2},768:{slidesPerView:3},1200:{slidesPerView:4}}})};