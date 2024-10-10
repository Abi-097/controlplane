"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const MineProfile = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the user is on /settingsmain, then redirect
    if (pathname === "/settingsmain/my-profile") {
      router.replace("/settingsmain/my-profile/name-image");
    }
  }, [pathname, router]);

  return null;
};

export default MineProfile;
