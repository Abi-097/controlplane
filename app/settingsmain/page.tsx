"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname to get current path

const SettingsMain = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname to get the current path

  useEffect(() => {
    // Check if the user is on /settingsmain, then redirect
    if (pathname === "/settingsmain") {
      router.replace("/settingsmain/my-profile");
    }
  }, [pathname, router]);

  return null; // This component is only responsible for redirecting
};

export default SettingsMain;
