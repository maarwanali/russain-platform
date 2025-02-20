"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

function VideoScreen() {
  const searchParams = useSearchParams();
  const vidoeId = searchParams.get("videoId");
  const videoUrl =
    "https://storage.googleapis.com/russain_videos/test.mp4?GoogleAccessId=nestjs-storage-service-533%40russain-platform.iam.gserviceaccount.com&Expires=1723485880&Signature=VztzPlMynRY4jzEPUKhKnu6wRMOLbWmwAMJa2g7M%2BP0KDA7MYscfqoYmbVksJ7nLnRuh3IAA5EUgB6dr6RI2k1chLPTGFLoBYhs6v7mhtsEXzRufjDsW%2Bm5BBgISBtpusRHtie%2FHEBlBFL7XyI%2FwdYDprl%2FlzooeQgZzWxneAHfBS402gY06cOuc3zUaq%2BYVSL6Y%2BZZzC6%2FTwvjfXJMZcHefrs3TvJVIw4wAGMhunS0namLhcA8Izzl5UK7AppoRPgCumLsnBA3MZhuT1DYoMRuemFd6LdM6jo8QzPKi3lRPSHJDJPFgPBGpdfsTJUEW59mX6pK6PdJe38cfeK3G%2FA%3D%3D";
  return (
    <div className="flex-1 flex justify-center items-start  mt-10 ">
      <video className="w-[80%]  object-cover" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoScreen;
