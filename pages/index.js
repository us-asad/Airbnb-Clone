import Head from "next/head";
import { Header, Banner, Main, Footer } from "components";

export default function Home({ cardsData, exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      <Header />
      <Banner />
      <Main cardsData={cardsData} exploreData={exploreData} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreFetchData = await fetch("https://jsonkeeper.com/b/4G1G");
  const exploreData = await exploreFetchData.json();
  const cardsDataFetchData = await fetch("https://jsonkeeper.com/b/VHHT");
  const cardsData = await cardsDataFetchData.json();

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}