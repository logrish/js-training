//Higher order fuctions
confuse()();
function confuse (){
	return function (){
		console.log("its starting");}
}
var vote = function(){ console.log("Voting...")}
vote();