# Strategy Design Pattern Example in TypeScript

This repository contains a TypeScript example of the Strategy design pattern. The Strategy pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows you to select and switch between different algorithms at runtime.

## Example: Payment Strategies

In this example, we have an `PaymentStrategy` interface representing payment strategies. We implement two concrete payment strategies: `CreditCardPayment` and `PayPalPayment`. The `ShoppingCart` class uses these payment strategies to complete a payment.
