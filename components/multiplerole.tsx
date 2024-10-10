// components/MultiSelect.tsx

import React, { useEffect, useRef, useState } from "react";

export type Option = {
  value: string;
  label: string;
};

export const RoleOptions: Option[] = [
  { value: "SelectUnselectAll", label: "Select / Unselect All" },
  {
    value: "AuthorizationTypeAdministrator",
    label: "Authorization Type Administrator",
  },
  { value: "OrganizationalAnnouncement", label: "Organizational Announcement" },
  { value: "JobStepsDeveloper", label: "Job Steps Developer" },
  { value: "AccountsCompanyDetails", label: "Accounts Company Details" },
  { value: "BudgetsAndAlertsAdmin", label: "Budgets And Alerts Admin" },
  { value: "vishnu_test_123", label: "vishnu_test_123" },
  { value: "TicketsAdministrator", label: "Tickets Administrator" },
  { value: "CorporateCalendarAdmin", label: "Corporate Calendar Admin" },
  {
    value: "AuthorizationTypeAdministrator",
    label: "Authorization Type Administrator",
  },
  { value: "PolicyActionAdministrator", label: "Policy Action Administrator" },
  { value: "PolicyGroupAdministrator", label: "Policy Group Administrator" },
  { value: "PolicyAdministrator", label: "Policy Administrator" },
  {
    value: "UserSettingsDeleteAccountViewer1",
    label: "UserSettings DeleteAccount Viewer 1",
  },
  {
    value: "UserSettingsDeleteAccountAdmin",
    label: "UserSettings DeleteAccount Admin",
  },
  {
    value: "UserSettingsSystemOutageAdmin",
    label: "UserSettings SystemOutage Admin",
  },
  {
    value: "UserSettingsSystemOutageViewer",
    label: "UserSettings SystemOutage Viewer",
  },
  {
    value: "UserSettingsAccessPermViewer",
    label: "UserSettings AccessPerm Viewer",
  },
  {
    value: "UserSettingsAccessPermAdmin",
    label: "UserSettings AccessPerm Admin",
  },
  {
    value: "UserSettingsCertificationsDeveloper",
    label: "UserSettings Certifications Developer",
  },
  {
    value: "UserSettingsCertificationsAdmin",
    label: "UserSettings Certifications Admin",
  },
  { value: "UserSettingsAPIViewer", label: "UserSettings API Viewer" },
  { value: "UserSettingsAPIDeveloper", label: "UserSettings API Developer" },
  { value: "UserSettingsAPIAdmin", label: "UserSettings API Admin" },
  { value: "UserSettingsProxyAdmin", label: "UserSettings Proxy Admin" },
  { value: "UserSettingsProxyUser", label: "UserSettings Proxy User" },
  { value: "UserSettingsSessionsUser", label: "UserSettings Sessions User" },
  { value: "UserSettingsSessionsAdmin", label: "UserSettings Sessions Admin" },
  { value: "UserSettingsAlertsNUser", label: "UserSettings AlertsN User" },
  { value: "UserSettingsAlertsNAdmin", label: "UserSettings AlertsN Admin" },
  { value: "UserSettingsAlertsNViewer", label: "UserSettings AlertsN Viewer" },
  { value: "UserSettingsSAMLViewer", label: "UserSettings SAML Viewer" },
  { value: "UserSettingsSAMLAdmin", label: "UserSettings SAML Admin" },
  { value: "UserSettingsSSOAdmin", label: "UserSettings SSO Admin" },
  { value: "UserSettingsSSOViewer", label: "UserSettings SSO Viewer" },
  { value: "RoleAdministrator", label: "Role Administrator" },
  { value: "GroupAdministrator", label: "Group Administrator" },
  { value: "GroupViewer", label: "Group Viewer" },
  { value: "RoleViewer", label: "Role Viewer" },
  {
    value: "AccountsCompanyDetailsAdministrator",
    label: "Accounts-Company-Details Administrator",
  },
  { value: "AccountViewer", label: "Account Viewer" },
  { value: "ProxyUser", label: "Proxy User" },
  { value: "BillingAdmin", label: "Billing Admin" },
  { value: "AccountAdmin", label: "Account Admin" },
  { value: "UserAdmin", label: "User Admin" },
  { value: "UserViewer", label: "User Viewer" },
  { value: "TemplateViewer", label: "Template Viewer" },
  { value: "TemplateDeveloper", label: "Template Developer" },
  { value: "DashBoardAll", label: "DashBoard All" },
  { value: "MonitorAll", label: "Monitor All" },
  { value: "SchedulerViewer", label: "Scheduler Viewer" },
  { value: "SchedulerDeveloper", label: "Scheduler Developer" },
  { value: "JobPackageViewer", label: "Job Package Viewer" },
  { value: "JobPackageDeveloper", label: "Job Package Developer" },
  { value: "ConnectorDeveloper", label: "Connector Developer" },
  { value: "ConnectorAdministrator", label: "Connector Administrator" },
  { value: "WorkflowViewer", label: "Workflow Viewer" },
  { value: "WorkflowDeveloper", label: "Workflow Developer" },
  { value: "JobViewer", label: "Job Viewer" },
  { value: "JobDeveloper", label: "Job Developer" },
  { value: "FolderViewer", label: "Folder Viewer" },
  { value: "FolderDeveloper", label: "Folder Developer" },
  { value: "FolderAdministrator", label: "Folder Administrator" },
  { value: "WorkspaceViewer", label: "Workspace Viewer" },
  { value: "WorkspaceDeveloper", label: "Workspace Developer" },
  { value: "WorkspaceAdministrator", label: "Workspace Administrator" },
  {
    value: "AccountsCompanyDetailsAdministrator",
    label: "Accounts-Company-Details Administrator",
  },
];

const MultiRoleSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Ref for the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle option toggle
  const handleOptionToggle = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle "Select / Unselect All"
  const handleSelectAll = () => {
    if (selectedOptions.length === RoleOptions.length - 1) {
      // Unselect all if all options are currently selected
      setSelectedOptions([]);
    } else {
      // Select all options (excluding "Select / Unselect All")
      setSelectedOptions(
        RoleOptions.filter(
          (option) => option.value !== "SelectUnselectAll"
        ).map((option) => option.value)
      );
    }
  };

  // Determine if "Select / Unselect All" should be checked
  const isAllSelected =
    RoleOptions.filter((option) => option.value !== "SelectUnselectAll")
      .length === selectedOptions.length;

  // Filter options based on search term
  const filteredOptions = RoleOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        className="w-full py-2 px-3 border bg-[#f9fafb] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:none focus:transparent"
        // className="w-full py-2 px-3 border xl:max-w-[300px] lg:max-w-[300px] md:max-w-none sm:max-w-none max-w-none bg-[#f9fafb] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:none focus:transparent overflow-hidden text-ellipsis whitespace-nowrap"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select Group"}
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 border border-gray-300 bg-[#f9fafb] shadow-lg rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border-b border-gray-300 rounded-t-lg focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-[185px] overflow-y-auto">
            {filteredOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={
                    option.value === "SelectUnselectAll"
                      ? isAllSelected
                      : selectedOptions.includes(option.value)
                  }
                  onChange={() => {
                    if (option.value === "SelectUnselectAll") {
                      handleSelectAll();
                    } else {
                      handleOptionToggle(option.value);
                    }
                  }}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiRoleSelect;
