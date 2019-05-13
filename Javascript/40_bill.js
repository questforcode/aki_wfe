let bill = {
    company: {
        name: '',
        address: '',
        phone: '',
        id: ''
    },
    client: {
        name: '',
        address: '',
        phone: '',
        id: '',
    },
    items: [
        {description: '', price: 20, quantity: 12},
        {description: '', price: 24, quantity: 10},
        {description: '', price: 34, quantity: 7}
    ],
    total: 0,
    taxType: 0.23,
    paymentMethod: 'Cash',
    calculateTotal: function () {
        let tax = this.taxType < 1 ? 1+this.taxType : this.taxType
        return this.items.map(item => item.price * item.quantity).reduce((a,b) =>a+b)*tax
    },
    refreshTotal: function () {
        this.total = this.calculateTotal()
    },
    showTotal: function () {
        this.refreshTotal()
        let msg = `The total price with tax included is ` + this.calculateTotal() + ` Euros.`
        console.log(msg)
    }
}

bill.showTotal()

