"use client";

import { useState } from "react";
import { UserPanelProvider } from "../components/content/UserInfoPanel/UserPanelContext";
import CustomersMain from "../components/Customers/CustomersMain";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Company() {
  const [data, setData] = useState<null | object>({});
  const [visibility, setVisibility] = useState(false);
  const value = { data, setData, visibility, setVisibility };
  return (
    <ProtectedRoute>
      <main className="flex relative h-full w-full">
        <UserPanelProvider>
          <CustomersMain />
        </UserPanelProvider>
      </main>
    </ProtectedRoute>
  );
}
