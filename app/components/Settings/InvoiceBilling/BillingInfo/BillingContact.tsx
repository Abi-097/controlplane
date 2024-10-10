import React, { useState } from "react";

import BillingContactMain from "./BillingContactMain";

interface BillingContactProps {
  isSoldToContact: boolean;
}

const BillingContact: React.FC<BillingContactProps> = ({ isSoldToContact }) => {
  return (
    <form className="px-8 pt-8">
      <BillingContactMain isSoldToContact={isSoldToContact} />
    </form>
  );
};

export default BillingContact;
