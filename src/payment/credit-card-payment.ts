import PaymentStrategy from "./payment-strategy";

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} TL with Credit Card.`);
    }
}

export default CreditCardPayment;