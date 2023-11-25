import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

// Load stripe object
const stripePromise = loadStripe(
   "pk_test_51OEWcNEEQXEbu6JCtZfvLNLJzWLi307wKWro7wDtdtjJpK3MQ5U8AeustsJJ1Rqoc4KMj2TowSfbGWwBdqQrm3lp00xwnHba8T"
);
const Payment = ({ price }) => {
   const [clientSecret, setClientSecret] = useState();

   useEffect(() => {
      axios
         .post(`${import.meta.env.VITE_SERVER_URL}/payment/create-intent`, {
            price,
         })
         .then((res) => setClientSecret(res.data.clientSecret));
   }, [price]);
   return (
      <div>
         {clientSecret && (
            <Elements options={{ clientSecret }} stripe={stripePromise}>
               <CheckoutForm clientSecret={clientSecret} />
            </Elements>
         )}
      </div>
   );
};

export default Payment;
