function customSelect() {
  var select = document.querySelectorAll('.select'),
    selectItems = document.querySelectorAll('.select__item');
  select.forEach(function(item) {
    item.addEventListener('click', function(){
      this.classList.toggle('select_is-open');
    })
  });

  selectItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var target = item;
      while(!target.classList.contains('select')){
          target = target.parentNode;
      }
      target.querySelector('.select__input-text').innerHTML = item.innerHTML;
    })
  })

}
