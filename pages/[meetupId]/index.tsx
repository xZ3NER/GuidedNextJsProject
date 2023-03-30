// our-domain.com/:meetupId

import { MeetupDetail } from "@/components";
import { MeetupData } from "@/util/models/meetup-data";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const MeetupDetailsPage: NextPage = () => {
  const router = useRouter();
  const title = `Meetup ${router.query.meetupId}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MeetupDetail
        meetup={
          new MeetupData(
            "meet1",
            "Meetup 1",
            "https://cdn.pixabay.com/photo/2023/03/25/09/51/cat-7875506_1280.jpg",
            "Some address 24, 1",
            "First meetup description"
          )
        }
      />
    </>
  );
};

export default MeetupDetailsPage;
