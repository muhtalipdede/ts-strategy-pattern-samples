interface PaymentStrategy {
    pay(amount: number): void;
}

export default PaymentStrategy;