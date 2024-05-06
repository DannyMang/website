import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Homepage } from "@/components/ui/Homepage";

const LandingPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>daniel ung</title>
      </Head>
      <main className="flex-1 bg-white p-8">
        <Homepage />
      </main>
    </div>
  );
};

export default LandingPage;
