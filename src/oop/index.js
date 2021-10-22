class Customer {
  constructor(id, CustomerNumber) {

    this.id=id 
    this.CustomerNumber =CustomerNumber
  }
}

let customer = new Customer(1,"1453");
customer.name = "Murat Kurtbogan";
console.log(customer.name);
customer.bisey = "bisey";
//console.log(customer.bisey)
console.log(customer.CustomerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber)
    {
        super(id,customerNumber)
        this.firstName =firstName
        
    }
 }

class CorpororateCustomer  extends Customer{ 
    constructor(companyName,id, customerNumber)
    {
            super(id,customerNumber)
            this.companyName = companyName


    }

}
