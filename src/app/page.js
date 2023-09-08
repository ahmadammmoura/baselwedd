import Head from "next/head";
import LetterForm from "./components/landing";
import StackedPaper from "./components/paper";

export default function Home() {
  return (
    <>
      <Head>
        <title>M & B Landing Page</title>
        <meta name="description" content="M & B Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{margin:"auto",position:"relative",width:"100%", height:"100vh",border:"1px solid red"}}>
          <LetterForm />
        </div>
        {/* <div style={{width:"100%", height:"400px",border:"1px solid red"}}>
          <div style={{width:"100px",height:"100px",border:"1px solid red"}}>

          </div>
        </div> */}
      </main>

      <footer>
        {/* Add footer content here */}
      </footer>
    </>
  );
}
