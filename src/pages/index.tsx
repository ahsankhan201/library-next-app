import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NewBook from "./newBook";
import Navbar from "@/components/navBar/NavBar";
import Books from "@/components/Books";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div
          style={{
            marginTop: "60px",
          }}
        >
          <Books />
        </div>
      </main>
    </>
  );
}
