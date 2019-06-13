(function(){
  var tabsBox = document.getElementById('tabs'),
      tabsBtn = document.querySelectorAll('.tabs__btn'),
      tabContent = document.querySelectorAll('.tabs-content');
  tabsBox.onclick = function(e){
    var target = e.target;
    while(target != tabsBox){
      if(target.classList.contains('tabs__btn')){
        break;
      } else {
        target = target.parentNode;
      }
    }
    var data = target.getAttribute('data-tab');
    for(var i=0; i<tabsBtn.length; i++){
      tabsBtn[i].classList.remove('tabs__btn_active');
    }
    target.classList.add('tabs__btn_active')


    for(var i=0; i<tabContent.length; i++){
      tabContent[i].classList.remove('tabs-content_active');
    }
    document.getElementById(data).classList.add('tabs-content_active');
  }
}());
