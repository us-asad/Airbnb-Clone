import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { Header, InfoCard, Map, Spinner } from "components";

const links = [
  "Cancellation Flexibility",
  "Type of Place",
  "Price",
  "Rooms and Beds",
  "More filters"
];

export default function Search({ searchData }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { location, startDate, endDate, numOfGuests } = router.query;

  useEffect(() => {
    if (startDate && endDate) setLoading(false);
  }, [startDate, endDate]);

  if (loading) return (
  	<div className="h-screen flex justify-center items-center">
  		<Spinner className="mr-2 w-16 h-16 text-gray-200 animate-spin fill-red-500" />
  	</div>
  );

  const dateFortmatter = date => format(new Date(date), "dd MMMM yy");
  const range = `${dateFortmatter(startDate)} - ${dateFortmatter(endDate)}`;
  const searchTitle = `${location} | ${range} | ${numOfGuests}`;

  return (
    <div>
      <Head>
        <title>{searchTitle} | Airbnb Clone</title>
      </Head>
      <Header placeholder={searchTitle} />
      <main className="flex flex-col xl:flex-row mt-16">
        <section className="flex-grow pt-14 px-6">
          <p>300+ Stays - {range} - for {numOfGuests}guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {links.map((link, index) => <p key={index} className="button">{link}</p>)}
          </div>
          <div className="flex flex-col mb-3">
            {searchData.map((item, index) => <InfoCard key={index} {...item} />)}
          </div>
        </section>
        <section className="min-w-screen h-[300px] xl:min-w-[600px] xl:h-auto">
          <Map searchData={searchData} />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS")
  const searchData = await searchResults.json();

  return {
    props: {
      searchData,
    }
  }
}