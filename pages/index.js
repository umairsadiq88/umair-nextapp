import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="umair sadiq" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
          
          <meta name="google-site-verification" content="zTo923SWkYMp778kttcb5wEGR-2MHSIsh8uWU1u1HBg" />
      </Head>
      <Header />
      
    </>
  );
};

export default index;