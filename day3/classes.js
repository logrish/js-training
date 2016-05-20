function Book(theTitle, thePrice){
    this.title = theTitle;
    this.price = thePrice;
    this.buy = function (store){
        console.log("Buying" + " "+ this.title+" from "+store);
    };
}
var b1 = new Book("chanakyas chant", 220);
console.log(b1.title+" @ "+b1.price);
b1.buy("FK");
 var b2 = new Book("the white tiger", 123);
console.log(b2.title+"@"+b2.price)
b2.buy("amazon");