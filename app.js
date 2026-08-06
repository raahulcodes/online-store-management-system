
let storeInventory = [];
// defining a class named store 
class Store
{
    // creating private fields for the store which is necessary
    #orderId
    #customerName
    #products 
    #totalAmount;
    #status;

    // special function constructor to assign private fields
    constructor(orderId, customerName, products, totalAmount, status)
    {
        this.#orderId = orderId;
        this.#customerName = customerName;
        this.#products = products;
        this.#totalAmount = totalAmount;
        this.#status = status;
        // pushing the values to the array
        storeInventory.push (this);
        // {orderId: orderId, customerName: customerName, products: products, totalAmount: totalAmount, status: status}
    }

    // method inside the class to display all orders when forEach method is used as it will help the private fields to be accessed
    printInventory()
    {
       return `Order ID: ${this.#orderId}
                Customer: ${this.#customerName}
                Products: ${this.#products.join(", ")}
                Amount: ₹${this.#totalAmount}
                Status: ${this.#status}`;
    }

    // getting delivered updates
    get status()
    {
        return this.#status;
    }

    // getting the amount
    get amount()
    {
        return this.#totalAmount;
    }
}

// creating various inventory data
let item1 = new Store(101, "Rahul Sharma", ["Laptop", "Iphone 13"], 120000, "Delivered");
let item5 = new Store(105, "Rahul Sharma", ["Laptop", "Iphone 13"], 120000, "Delivered");
let item2 = new Store(102, "Priyanka Sharma", ["Iphone 13"], 60000, "Pending");
let item3 = new Store(103, "Umesh Singh", ["Laptop"], 60000, "Shipped");
let item4 = new Store(104, "Varinder Singh", ["Plant Pot"], 10000, "Cancelled");

// 1. displaying all orders
storeInventory.forEach(item=>
{
    console.log(item.printInventory());
    console.log("--------------------")
}
)

// 2. Displaying only the delivered order
let deliveredItems = storeInventory.filter(items=>items.status==="Delivered");
console.log(deliveredItems);

// 3. Calculating total revenue generated from all order
let revenueGen = storeInventory.reduce((total, item)=>
    {
        return total + item.amount;
    },0);
console.log("Total Revenue Generated: " + revenueGen);

// 4. Finding the element with highest amount
let highestAmount = storeInventory.reduce((highestAmount, item)=>
    {
        return highestAmount>item.amount? highestAmount:item.amount;
    }, 0);
console.log(highestAmount);

// 5. Counting the no. of orders from each status
let countOrders = storeInventory.reduce((count, order) =>
{
    if (count[order.status])
    {
        count[order.status]++;
    }
    else
    {
        count[order.status] = 1;
    }

    return count;
}, {});

console.log(countOrders);

// displaying all orders worth more than 20,000
let orderTwenTh = storeInventory.filter(order=>order.amount>20000);
console.log(orderTwenTh);
