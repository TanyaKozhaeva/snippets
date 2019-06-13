function makeHeaderFixed(){
  var header = document.querySelector('.header');
  if(header.offsetHeight<window.pageYOffset) {
		header.classList.add('header_fixed')
	}
  if(window.pageYOffset == 0) {
			header.classList.remove('header_fixed')
	}
}
window.addEventListener('scroll', makeHeaderFixed);
window.addEventListener('load', makeHeaderFixed);
