import React from "react";
import Header from "./components/header";
import Image from "next/image";

export default function Propose() {
  return (
    <div>
      <Header />
      <div className="grid place-items-center pt-20">
        <Image src="/us.jpeg" alt="first kiss image" width={500} height={500} />
      </div>
    </div>
  );
}
