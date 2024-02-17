import React from "react";

const TermsAndCondition = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-12">
      <div className="mt-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Terms and Conditions:</h2>
        <ul className="ps-10 mb-6 text-sm md:text-xl flex flex-col gap-2 terms-list">
          <li>
            We don’t have our own delivery man. We provide delivery through
            third-party services. So we take 1 to 2 days.
          </li>
          <li>
            Please keep your mobile on. Please collect the product when the
            delivery man calls you.
          </li>
          <li>
            If returning items that have been cracked, you must pay the delivery
            fee.
          </li>
          <li>
            IfIf you find any defect in the product or receive the wrong
            product, please inform us while in front of the delivery man.
          </li>
        </ul>
        <p className="text-sm md:text-xl">
          Since we actually offer Cash on Delivery so that customers can view
          the product before receiving it, any type of change of mood or
          dissatisfaction by the consumer after getting the product will not be
          considered a return.
        </p>
      </div>
    </section>
  );
};

export default TermsAndCondition;
