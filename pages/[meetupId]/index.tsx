// our-domain.com/:meetupId

import { MeetupDetail } from "@/components";
import { MeetupData } from "@/util/models/meetup-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { MongoClient, ObjectId } from "mongodb";

interface MeetupDetailsPageProps {
  meetup: MeetupData;
}

const MeetupDetailsPage: NextPage<MeetupDetailsPageProps> = ({ meetup }) => {
  const title = meetup.title;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MeetupDetail meetup={meetup} />
    </>
  );
};

// If you're using getStaticProps in a dynamic page, and need to access that dynamic data, use:
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://default-user:lKBBiv0n0KBGcGxi@cluster0.gyhfg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections: any = db.collection<MeetupData>("meetups");

  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();

  // Describe all the dynamic segment values
  return {
    // False: Show 404 if no param with those values was found
    // True: Will expect more values than the paths (continue find that path)
    // (will show up an empty page an add the data when it's done)
    // Blocking: Same as true, but will not show anything until everything it's done
    fallback: 'blocking',
    paths: meetups.map((meetup: MeetupData) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

interface Params extends ParsedUrlQuery {
  meetupId: string;
}

type Props = {
  meetup: MeetupData;
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const param = context.params!;
  const id = param.meetupId;

  // Fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://default-user:lKBBiv0n0KBGcGxi@cluster0.gyhfg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections: any = db.collection<MeetupData>("meetups");

  const meetup: MeetupData = await meetupCollections.findOne({
    _id: new ObjectId(id),
  });

  client.close();

  return {
    props: {
      meetup: JSON.parse(
        JSON.stringify(
          new MeetupData(
            meetup._id.toString(),
            meetup.title,
            meetup.image,
            meetup.address,
            meetup.description
          )
        )
      ),
    },
  };
};

export default MeetupDetailsPage;
