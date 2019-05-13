
/**
 * This but for more than 1 bill. Remaking 40 as constructor functions.
 * Generate as many as needed.
 */

function Bill(company, client, items, taxType, paymentMethod) {
    this.company = company
    this.client = client
    this.items = items
    this.taxType = taxType
    this.paymentMethod = paymentMethod
}

Bill.prototype.calculateTotal = function () {
    let tax = this.taxType < 1 ? 1 + this.taxType : this.taxType
    return this.items.map(item => item.price * item.quantity).reduce((a, b) => a + b) * tax
}

Bill.prototype.showTotal = function () {
    let msg = `The total price with tax included is ` + this.calculateTotal() + ` Euros.`
    console.log(msg)
}

function Company(name, address, phone, id) {
    this.name = name
    this.address = address
    this.phone = phone
    this.pd = id
}

function Items(description, price, quantity) {
    this.description = description
    this.price = price
    this.quantity = quantity
}

bill1 = new Bill(
    new Company('Boracay Editions', 'Flower Street', '685959209', '293494809F'),
    new Company('Navi Pepsiman', 'Soda Street', '9848710934', 'F840590S'),
    [new Items('Book 1', 20, 12),
    new Items('Book 2', 28.4, 10),
    new Items('Book 3', 34.7, 7)],
    0.23,
    'cash')

console.log(bill1)
bill1.showTotal()