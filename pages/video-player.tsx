import React from "react";
import dynamic from "next/dynamic";
import Header from "./components/header";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoPlayer() {
  return (
    <div>
      <Header />
      <div className="grid place-items-center pt-20">
        <ReactPlayer url="https://youtube.com/shorts/evpdSXmL99w?feature=share" />
      </div>
    </div>
  );
}
