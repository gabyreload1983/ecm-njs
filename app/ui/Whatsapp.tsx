import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
  return (
    <Link href={`https://wa.me/+543476636658/`} target="_blank">
      <Image
        src="/whatsapp.svg"
        alt="woman calculating taxes"
        width={40}
        height={40}
        className="transition delay-50 duration-300 ease-in-out hover:scale-125"
      />
    </Link>
  );
}
