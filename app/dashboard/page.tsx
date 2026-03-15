
"use client";

import { LogIn } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Taskcontrol from "../components/Taskcontrol";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div
      className=" bg-cover bg-center flex items-center justify-center mt-8"
     
    >
      <Image src="/images/main-bg.png" alt="dashboard" className="w-[900] h-[85vh] rounded-lg" width={50} height={50}/>

      {/* floating dashboard container */}
      <div className="flex w-[900] h-[75vh] -ml-160 rounded-2xl overflow-hidden shadow-2xl bg-white mt-4">
      
        <Sidebar />

        <Taskcontrol />

      </div>

    </div>
  );
}