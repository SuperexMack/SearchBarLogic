let allExtract = document.getElementById("friends")
let friendsExtracting  = allExtract.getElementsByTagName("p")
let frindsArray = []
for(let i = 0 ; i< friendsExtracting.length ; i++){
frindsArray.push(friendsExtracting[i].textContent)
}
let search = prompt("enter the word you want")
let finded = 0;
for(let i = 0 ; i<frindsArray.length ; i++){  
if(frindsArray[i] === search){
console.log("word finded")
let storeElement = document.createElement("p")
var content = document.createTextNode(search);
storeElement.appendChild(content)
document.body.appendChild(storeElement);
allExtract.remove()
finded++;
}
}


if(finded == 0){
allExtract.remove()
let showNotElement = document.createElement("p")
let storeAfter = document.createTextNode("No element Found")
showNotElement.appendChild(storeAfter)
document.body.appendChild(showNotElement)
document.body = "No element Founded"

}











