function() {
  var str = document.querySelectorAll(".word");
  str.forEach(function(item){
    var arr = item.innerHTML.split('');
    item.innerHTML = '';
    arr.forEach(function(letter, i){
      item.innerHTML += '<span class="letter">' + letter + '</span>'
    })
  })
};
