"use client";
import AddContant from "@/components/AddContant";
import AddCourse from "@/components/AddCourse";
import React, { useState } from "react";

function AdminPage() {
  const [activeForm, setActiveForm] = useState("");

  return (
    <div className="h-[90vh] ">
      {/* panel */}
      <div className="  flex justify-evenly items-center h-12 my-3 shadow_b ">
        <h3 className="font-bold text-[var(--clr-font-700)] h-[100%] flex_center hover:underline transition-colors duration-150 cursor-pointer">
          Add Course
        </h3>
        <h3 className="font-bold text-[var(--clr-font-700)] h-[100%] flex_center hover:underline transition-colors duration-150 cursor-pointer">
          Add Vidoe
        </h3>
      </div>
      <div className="2">
        <AddContant />
      </div>
    </div>
  );
}

export default AdminPage;
