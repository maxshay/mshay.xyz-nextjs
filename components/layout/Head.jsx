import React from "react";
import Head from "next/head";

const MyHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content="This is my developer website, created with Next.js"
      />
      <meta
        name="keywords"
        content="video, sharing, camera phone, video phone, free, upload"
      />

      <meta property="og:site_name" content="mshay" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mshay.xyz" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://portfolio.insaneblimp.com/images/og-site-main-image.jpg"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta
        property="og:description"
        content="This is my developer website, created with Next.js"
      />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
    </Head>
  );
};

export default MyHead;
