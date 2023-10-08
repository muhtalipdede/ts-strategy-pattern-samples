import PaymentStrategy from "./payment-strategy";

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} TL with PayPal.`);
    }
}

export default PayPalPayment;