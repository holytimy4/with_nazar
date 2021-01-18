window.onscroll = function showHeader() {
    
    var header = document.querySelector('.header');
    
    if (window.pageYOffset > 0) {
        header.classList.add('header__fixed');
    } else{
       header.classList.remove('header__fixed'); 
    }
    
    
};

let anchors = document.querySelectorAll('body a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
};

const filterBox = document.querySelectorAll('.compilations__item');

document.querySelector('.compilations__nav').addEventListener('click', event =>{
    if (event.target.tagName !== 'LI') return false;
    
    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });
    
});

$(document).ready(function(){
 
$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
}
});
 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});
