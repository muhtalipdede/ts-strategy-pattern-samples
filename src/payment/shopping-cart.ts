import PaymentStrategy from "./payment-strategy";

class ShoppingCart {
    constructor(private paymentStrategy: PaymentStrategy) { }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

export default ShoppingCart;