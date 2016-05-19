// Create js-ex2.js to implement the following.

// Create an array of 10 numbers, say 6,12,54,2,65,7,99,45,89,29

// Create a function called compute that can be used like this.
// compute(5) //Print the first five numbers in the array
// compute() //Print all the numbers
// compute("even")//Print all the even numbers in the array
// compute("odd")//Print all the odd numbers in the array
// compute(2,"even")//Print three even numbers
// compute(3,"odd")//Print three odd numbers
// compute("jkfdkdsfkj")//Print an error message
// compute(1,2,3,34,4)//Print an error message

var numArray = [6,12,54,2,65,7,99,45,89,29];
compute();	
compute(7)
compute("even")
compute("odd")
compute(3,"odd")
compute(2,"even")
compute(2,"even",3)
compute("sdfhgakghafh")
compute(1,2,3,34,4);
function showMessage(message){
	console.log(message)
}
function compute(){
	var argumentLength = arguments.length;
	console.log("argumentLength --> "+argumentLength);
	// console.log(arguments);
	var output ="";

	if (argumentLength==0) {
		for (var i = 0; i < numArray.length; i++) {
			output+=numArray[i]+",";
		}

	}else if(argumentLength==1){
		var argument1 = arguments[0];
		if (isNaN(argument1)) {
			if (argument1=="even") {
				showMessage("even")
				for (var i = 0; i < numArray.length; i++) {
					var num = numArray[i];
					if (num % 2 == 0) {
						output+=numArray[i]+",";
					}
				}

			}else if(argument1=="odd"){
				showMessage("odd")
				for (var i = 0; i < numArray.length; i++) {
					var num = numArray[i];
					if (!(num%2==0)) {
						output+=numArray[i]+",";
					}
				}
			}else{
				output = "Error !!!";
			}
		}else{
			for (var i = 0; i < numArray.length&& i< argument1; i++) {
				output+=numArray[i]+",";
			}
		}

	}else if(argumentLength==2){
		var argument1 = arguments[0];
		var argument2 = arguments[1];

		if (argument2=="even") {
			showMessage("even")
			for (var i = 0,j=0; i < numArray.length&&j<argument1; i++) {
				var num = numArray[i];
				if (num % 2 == 0) {
					j++;
					output+=numArray[i]+",";
				}
			}

		}else if(argument2=="odd"){
			showMessage("odd")
			for (var i = 0, j=0; i < numArray.length&&j<argument1; i++) {
				var num = numArray[i];
				if (!(num%2==0)) {
					j++;
					output+=numArray[i]+",";
				}
			}
		}else{
			output = "Error !!!";
		}
		
	}else{
		output = "Error !!!";
	}
	showMessage(output);

}