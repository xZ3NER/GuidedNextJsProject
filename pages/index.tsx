// our-domain.com/

import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { MeetupList } from "@/components";
import { MeetupData, MeetupDocument } from "@/util/models/meetup-data";
import { MongoClient } from "mongodb";

interface HomePageProps {
  meetups: MeetupData[];
}

const HomePage: NextPage<HomePageProps> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>NextJS Meetups</title>
        <meta name='description' content='Browse a huge list of meetups make on Next and MongoDB' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <MeetupList meetups={meetups} />
      </main>
    </>
  );
};

// Reserved function by next js for STATIC SITE GENERATION (SSG)
export const getStaticProps: GetStaticProps = async () => {
  // Fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://default-user:lKBBiv0n0KBGcGxi@cluster0.gyhfg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection<MeetupData>("meetups");

  const meetups = await meetupCollections.find().toArray();

  // Return as props for our page component

  // You can make it Incremental Static Regeneration (ISR)
  // adding revalidate: (value)
  // Will be regenerated every 1 second if there's requests on the page (IRS)
  return {
    props: {
      meetups: JSON.parse(
        JSON.stringify(
          meetups.map(
            (meetup: MeetupData) =>
              new MeetupData(
                meetup._id.toString(),
                meetup.title,
                meetup.image,
                meetup.address,
              )
          )
        )
      ),
    },
    revalidate: 1,
  };
};

{
  /* ServerSide Rendering (SSR), for data that changes frequently (pre-generate on every user request) */
}
// export const getServerSideProps = async (context) => {
// const req = constext.req (request)
// const res = context.res (response)

//   const DUMMY_MEETUPS = ["a"];

//   return {
//     props: {
//       meetups: JSON.parse(JSON.stringify(DUMMY_MEETUPS)),
//     }
//   };
// };

export default HomePage;
