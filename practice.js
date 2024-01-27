let friends = ["mohit" , "rahul" , "keval"]
let search = prompt("enter the word you want")

let finded = 0;
for(let i = 0 ; i<friends.length ; i++){
    
if(friends[i] === search){
console.log("word finded")
finded = 1;
}

}

if(finded == 0) console.log("unable to find the word")





