import Head from "next/head";

import Navigation from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>My Site</title>
      </Head>
      <div>
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}