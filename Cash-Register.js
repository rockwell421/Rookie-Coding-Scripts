//Build a cash register in JS

var cashRegister = {
  total: 0;
  add: function(itemCost){
    //+= is another way of saying this.total = itemCost + this.total
    this.total += itemCost;
  }
};

//we are going to manually add four items to the list

cashRegister.add (0.98); //mango
cashRegister.add (1.23); //apples
cashRegister.add (4.99); //eggs
cashRegister.add (0.45); //bananas

console.log("You bill is " + cashRegister.total);

//doing this manually sucks, so we need to make a scan method
//we can do a scan by making a switch statement
//the switch statement is super useful as an index

var cashRegister = {
    total: 0,
    add: function (itemCost) {
    this.total += itemCost;
    },

    scan: function (item) {
        switch (item) {
        case "eggs":
            this.add(0.98);
            break;

        case "milk":
            this.add(1.23);
            break;

        case "magazine":
            this.add(4.99);
            break;

        case "chocolate":
            this.add(0.45);
            break;

        }
        return true;
    }
};

//scan each time by scalling it in dot notation. Here we scan eggs twice and magazine 3 times
cashRegister.scan ("eggs");
cashRegister.scan ("eggs");
cashRegister.scan ("magazine");
cashRegister.scan ("magazine");
cashRegister.scan ("magazine");


//Show the total bill
console.log('Your bill is '+cashRegister.total);



//Manually scanning each of these items is a pain, we can change it so that we add quantity as a parameter to the scan function

//Here's the revised version of the code


var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

//the second parameter gets passed on, we scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


//Let's add a new function- one that voids an item

//we will create a method called lastTransactionAmount and make it equal to the itemCost
//We will also add a method called voidLastTransaction that will subtract the lastTransaction amount from the cash Register total
//then we'll call the function to null the last item, then scan the last item 3x

var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        //made the lastTransactionAmount equal to the itemCost
        lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Added the voidLastTransaction here and set it to total - lastTransactionAmount
    voidLastTransaction: function() {
     cashRegister.total -= lastTransactionAmount
    }

};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Voided the last transaction and then add 3 instead

cashRegister.voidLastTransaction('chocolate');
cashRegister.scan('chocolate', 3);


//Show the total bill
console.log('Your bill is '+cashRegister.total);


//Adding a staff discount for all of the hard work
//Define a new object constructor called StaffMember with two parameter; age, discountpercent)

function StaffMember (name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
    };


var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember('Eddy', 20);



//Final code// Apply the discounts to a transaction 



function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Created me variable with a 20% discount
var me = new StaffMember('Eddy', 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    //create the applyStaffDiscount method here
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent/100);
    }


};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
//Prints out Your bill is $13.74//
