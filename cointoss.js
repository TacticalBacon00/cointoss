/*
var heads = 0, tails = 0;
for (i=0; i<100; i++) {if(Math.floor(Math.random()*2) >= 1) {heads++;} else {tails++;}
  console.log("Heads: " + heads + "; Tails: " + tails);}
console.log("End result: ");
console.log("Heads: " + heads + "; Tails: " + tails);

function toss(){
	if(Math.floor(Math.random()*2) >= 1) {
		return "Heads";
		} else {
			return "Tails";
			}
}
toss();
*/

var exports = module.exports = {};

exports.results = {
	toss: function (){
	if(Math.floor(Math.random()*2) >= 1) {
		return "Heads";
		} else {
			return "Tails";
			}
}
} 