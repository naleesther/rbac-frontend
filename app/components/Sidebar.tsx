"use client";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  CheckSquare,
  ClipboardList,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  Receipt
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-75 bg-[#EAD8C9]  h-220 p-6 rounded-lg mr-35">

      <h2 className="font-semibold mb-8">
        John's workspace
        <p className="text-xs text-gray-500">#WID12446875</p>
      </h2>

      <ul className="space-y-4 text-gray-700">

        <li className="flex items-center gap-3">
          <LayoutDashboard size={18}/> Dashboard
        </li>

        <li className="flex items-center gap-3">
          <Users size={18}/> Leads
        </li>

        <li className="flex items-center gap-3">
          <Briefcase size={18}/> Opportunities
        </li>

        <li className="flex items-center gap-3">
          <CheckSquare size={18}/> Tasks
        </li>

        <li className="flex items-center gap-3">
          <ClipboardList size={18}/> Assignments
        </li>

        <li className="flex items-center gap-3">
          <Calendar size={18}/> Calendar
        </li>

        <li className="flex items-center gap-3">
          <FileText size={18}/> Reports
        </li>

        <p className="text-xs text-gray-400 mt-6">Users</p>

        <li className="flex items-center gap-3">
          <Users size={18}/> Contacts
        </li>

        <li className="flex items-center gap-3">
          <MessageSquare size={18}/> Messages
        </li>

        <p className="text-xs text-gray-400 mt-6">Other</p>

        <li className="flex items-center gap-3">
          <Settings size={18}/> Configuration
        </li>

        <li className="flex items-center gap-3">
          <Receipt size={18}/> Invoice
        </li>

      </ul>

    </div>
  );
}
