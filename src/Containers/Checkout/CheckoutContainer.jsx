import Payment from "./payment";

const CheckoutContainer = () => {
   return (
      <div className="h-[90vh] flex items-center justify-center">
         <div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
               <p className="text-xl font-medium">Payment Details</p>
               <p className="text-gray-400">
                  Complete your order by providing your payment details.
               </p>
               <div>
                  <div className="mt-6 border-t border-b py-2">
                     <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                           Subtotal
                        </p>
                        <p className="font-semibold text-gray-900">$29.00</p>
                     </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                     <p className="text-sm font-medium text-gray-900">Total</p>
                     <p className="text-2xl font-semibold text-gray-900">
                        $29.00
                     </p>
                  </div>
                  <Payment price={29} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CheckoutContainer;
