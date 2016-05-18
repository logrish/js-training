var testArray = [];
testArray["name"] = "Sam";
testArray["age"] = 12; 
testArray["country"] = "India";
testArray["city"] = "Pune";

var outPut = "?";
for(var key in testArray){
	outPut = outPut+key+"="+testArray[key]+"&";
}
console.log(outPut);
outPut = outPut.substring(0,outPut.length-1);
console.log(outPut);
