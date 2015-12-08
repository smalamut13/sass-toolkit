$(document).ready(function() {
	console.log("wutsup");

   $('.nav li').hover(function() {
     $(this).find('.subnav').removeClass('hidden');
   }, function() {
     $(this).find('.subnav').addClass('hidden');
   });
});
