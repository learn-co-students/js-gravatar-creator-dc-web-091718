function handleSubmit(e) {
  e.preventDefault()
  resetBoxes();
  let input = e.currentTarget.elements[0].value;
  let md5Array = getHash(input);
  plotIdenticon(md5Array);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})


function getHash(str) {
  let md5hash = new Identicon(str);
  return md5hash.md5;
}

function plotIdenticon (array) {
    let color = determineColor(array);
    let booleanArray = determinePresence(array);
    let finalArray = completeArray(booleanArray);
    let boxes = document.querySelectorAll("#identicon")[0].children
    for (let i = 0; i < boxes.length; ++i){
      if (finalArray[i]) {boxes[i].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`}
    }
}

function determinePresence (array) {
  return array.map(e => {
    if (e % 2 !== 0) return false;
    return true;
  })
}

function determineColor (array) {
  return array.slice(0, 3);
}

function completeArray (array) {
  let newArray = []
  newArray.push(...array.slice(0,3));
  newArray.push(...array.slice(0,2).reverse());
  newArray.push(...array.slice(3,6));
  newArray.push(...array.slice(3,5).reverse());
  newArray.push(...array.slice(6,9));
  newArray.push(...array.slice(6,8).reverse());
  newArray.push(...array.slice(9,12));
  newArray.push(...array.slice(9,11).reverse());
  newArray.push(...array.slice(12,15));
  newArray.push(...array.slice(12,14).reverse());
  console.log(newArray);
  console.log(array);
  return newArray;
}

function resetBoxes() {
  let boxes = document.querySelectorAll("#identicon")[0].children
  for (i = 0; i < boxes.length; ++i) {
    boxes[i].style.backgroundColor = "initial";
  }
}
