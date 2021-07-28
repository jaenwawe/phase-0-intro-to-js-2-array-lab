const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
return cats;
}

function  destructivelyRemoveLastCat(){
    cats.pop();
return cats;
}

function  destructivelyRemoveFirstCat(){
    cats.shift();
return cats;
}

function appendCat(name){
   const newCats = [...cats];
    newCats.push(name);
  return newCats;    
}



function  prependCat(name){
    const newCats = [...cats];
    newCats.unshift(name);
return newCats;   
}

function  removeLastCat(){
    const newCats = [...cats];
    newCats.pop();
return newCats;
}

function removeFirstCat(){
    const newCats = [...cats];
    newCats.shift();
    return newCats;
}