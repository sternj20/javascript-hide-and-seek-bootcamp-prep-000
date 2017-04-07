function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested, target){
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n){
  var rankedLi = document.querySelectorAll('.ranked-list li')
    for (var i = 0; i < rankedLi.length; i++ ){
      var number = parseInt(rankedLi[i].textContent)
      rankedLi[i].textContent = number + n
    }
}



  function deepestChild(){
      var divs = document.getElementById('grand-node')
      while (divs.children.length > 0){
          divs = divs.children[0]
      }
      return divs;
  }
