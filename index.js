// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function beforeEach () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  }
  function destructivelyAppendCat(){
    cats.push('Ralph')
    console.log(cats);

  }
  function destructivelyPrependCat(){
    cats.unshift('Bob')
    console.log(cats)
  }
  function destructivelyRemoveLastCat(){
    cats.pop()
  }
  function destructivelyRemoveFirstCat(){
    cats.shift()
  }
  function appendCat(name){
    return [...cats, name];
  }
  function prependCat(name){
    return [name,...cats,];
  }
function removeLastCat(){
    return cats.slice(0, -1);
}
function removeFirstCat(){
    return cats.slice(1)
}



