var User = require('../../test1')

describe("User", function(){
    let user; 
    beforeEach(function(){
        user = new User ("UserName", "password");
    });

describe("Test addToCard function",function(){
    it("should add a product to the cart", function(){
        const product = {name: "Iphone", price: 1000};
        user.addToCart(product);
        expect(user.cart).toEqual([product]);
}) 
});

it("should calculate the total cart price", function(){
    const product1 = {name: "Iphone", price: 1000};
    const product2 = {name: "Labtop", price: 2000};
    const product3 = {name: "TV", price: 2000};

    user.addToCart(product1);
    user.addToCart(product2);
    user.addToCart(product3);
    expect(user.calculateTotalCartPrice()).toEqual(3000);
});
});




describe("User", function(){
    let user;

    beforeEach(function(){
        user = new User("tsetUser", "password");
    });

    it("should calculate the total cart price", function(){
        const product1 = {name: "Phone", price: 10000};
        const product2 = {name: "Laptop", price: 20000};
        const product3 = {name: "TV", price: 5000};

        user.addToCart(product1);
        user.addToCart(product2);
        user.addToCart(product3);

        expect(user.calculateTotalCartPrice()).toEqual(2000);
    });

    describe("checkout", function(){
        let paymentModel;

        beforeEach(function(){
            paymentModel = {
                goToVerifyPage: jasmine.createSpy("goToVeryifyPage"),
                returnBack: jasmine.createSpy("returnBack"),
                isVerify: jasmine.createSpy("isVerify")
            };
        });

        it("should call paymentModel Methods", function(){
            user.checkout(paymentModel);
            expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
            expect(paymentModel.returnBack).toHaveBeenCalled();
            expect(paymentModel.isVerify).toHaveBeenCalled();
        });

        it("should return true if payment is verified", function(){
            paymentModel.isVerify.and.returnValue(true);
            expect(user.checkout(paymentModel)).toBe(true);
        });

        it("should return false if payment is not verified", function(){
            paymentModel.isVerify.and.returnValue(false);
            expect(user.checkout(paymentModel)).toBe(false);
        });
    });
})



