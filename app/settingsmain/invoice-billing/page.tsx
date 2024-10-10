"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const InvoiceBillingPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the user is on /settingsmain, then redirect
    if (pathname === "/settingsmain/invoice-billing") {
      router.replace("/settingsmain/invoice-billing/information");
    }
  }, [pathname, router]);

  return null;
};

export default InvoiceBillingPage;
