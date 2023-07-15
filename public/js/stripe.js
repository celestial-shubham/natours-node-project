/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
export const bookTour = async tourID => {
  const stripe = Stripe('pk_test_51NOFqlSBmcnW8TJY7aG4VYfZJf9hENTn0Udu80wE67wKIZOC0MhH4YgUOBSXYkyY6v15HdmymuUEMnfAxgfwWsua00EYTyOShC');
  // 1 GET CheckOut session from API
  try {
    console.log("value of tour ---->" , tourID)
    // 1. Get checkout session from the API
    const session = await axios(`/api/v1/booking/checkout-session/${tourID}`);
    console.log(session);

    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
