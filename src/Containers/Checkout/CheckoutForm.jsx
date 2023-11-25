import {
   PaymentElement,
   useElements,
   useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Loader } from "rsuite";
import useSecureRequest from "../../Hooks/Shared/API/SecureRequest/useSecureRequest";

const CheckoutForm = ({ clientSecret }) => {
   const { changeUserMembership } = useSecureRequest();
   const stripe = useStripe();
   const elements = useElements();

   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (!stripe) {
         return;
      }
      if (!clientSecret) {
         return;
      }
      stripe.retrievePaymentIntent(clientSecret);
   }, [stripe, clientSecret]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Update user membership plan
      changeUserMembership().then((res) => console.log(res));

      if (!stripe || !elements) {
         return;
      }

      setIsLoading(true);

      await stripe.confirmPayment({
         elements,
         confirmParams: {
            return_url: "http://localhost:5173",
         },
      });
   };
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button
               type="submit"
               className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
               {isLoading ? <Loader /> : "Pay Now"}
            </button>
         </form>
      </div>
   );
};

export default CheckoutForm;
