function changeLettersColor(){
  var navItems = document.querySelectorAll('.letter'),
      img = document.querySelector('.mainScreen__bg'),
      leftImg = img.getBoundingClientRect().left,
      imgWidth = img.getBoundingClientRect().width,
      delta = imgWidth/100*18.78;
  navItems.forEach(function(item){
    var left = item.getBoundingClientRect().left;
    if(leftImg+delta < left) {
      item.style.color = '#000'
    } else {
      item.style.color = 'yellow'
    }
  })
}
window.addEventListener('load', changeLettersColor);
window.addEventListener('resize', changeLettersColor);
