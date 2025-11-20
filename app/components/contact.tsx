import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mt-20 space-y-3">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="">
        You can send over an e-mail to{" "}
        <Link
          href="mailto:me@vinisa.dev"
          className="text-blue-400 hover:underline"
        >
          me@vinisa.dev
        </Link>
      </p>
    </div>
  );
}