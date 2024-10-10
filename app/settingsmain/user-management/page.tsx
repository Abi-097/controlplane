"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const UserManagementPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the user is on /settingsmain, then redirect
    if (pathname === "/settingsmain/user-management") {
      router.replace("/settingsmain/user-management/user");
    }
  }, [pathname, router]);

  return null;
};

export default UserManagementPage;
