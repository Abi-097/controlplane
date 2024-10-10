"use client";

import { columns } from "@/app/components/Settings/AduitLogs/SettingsAuditLogsColumn";
import { SettingsAuditLogsTable } from "@/app/components/Settings/AduitLogs/SettingsAuditLogsTable";
import React, { useState } from "react";
import dynamic from 'next/dynamic';

const EmailTemplates = dynamic(() => import('@/app/components/emailTemplates/EmailTemplates'), {
    ssr: false, // Disable server-side rendering for this component
});

const EmailTemplate = () => {
  const [data, setData] = useState<any[]>([]);

  return (
    <div className="overflow-auto w-full h-full bg-screenbg">
      {/* The table component should handle horizontal scroll */}
      <div className="overflow-x-auto">
        <EmailTemplates/>
      </div>
    </div>
  );
};

export default EmailTemplate;
