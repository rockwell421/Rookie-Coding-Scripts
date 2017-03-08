var text = "Morning Eddy, how did you sleep today, Eddy?";
var myName = "Eddy";
var hits= [];

for ( var i = 0; i < text.length; i++) {
    if (text[i] === "E") {
        for(var j = i; j < i+myName.length; j++){
            hits.push(text[j]);
           }
    }
}
if (hits.length === 0) {
 console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
