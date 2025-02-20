import SideBar from "@/components/SideBar";
import VideoScreen from "@/components/VideoScreen";
import React from "react";

function CoursePage({ params }: { params: { courseName: string } }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-[100%] ">
      {/* Video Screen */}
      <VideoScreen />
      {/* Sidebar */}
      <SideBar courseName={params.courseName} />
    </div>
  );
}

export default CoursePage;
