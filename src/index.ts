import CreditCardPayment from "./payment/credit-card-payment";
import PayPalPayment from "./payment/paypal-payment";
import ShoppingCart from "./payment/shopping-cart";

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const cart1 = new ShoppingCart(creditCardPayment);
cart1.checkout(1000);

const cart2 = new ShoppingCart(payPalPayment);
cart2.checkout(500);