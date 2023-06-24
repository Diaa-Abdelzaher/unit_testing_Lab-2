class User {
    constructor(name, password) {
        this.name = name;
        this.password = password
        this.cart = []
    }

    /**
     * Adds a product to the cart array.
     * @param {Object} product
     * @param {string} product.name 
     * @param {number} product.pric
     */
    addToCart(product) {
        this.cart.push(product)
    }

    // test this function's logic 
    calculateTotalCartPrice() {
        return this.cart.reduce((accPrice, prd) => accPrice + prd.price, 0)
    }

    /**
     * @param {object} paymentModel    
    * @param {function} paymentModel.goToVerifyPage 
    * @param {function} paymentModel.returnBack 
    * @param {function} paymentModel.isVerify  
    */
    /* These are test cases for checkout function:
    */
    checkout(paymentModel) {
        paymentModel.goToVerifyPage()
        paymentModel.returnBack()
        if (paymentModel.isVerify()) {
            return true
        }
        else return false
    }}

module.exports = User