// our-domain.com/new-meetup

import { NewMeetupForm } from "@/components";
import { MeetupData } from "@/util/models/meetup-data";
import { NextPage } from "next";
import Head from "next/head";

const NewMeetupPage: NextPage = () => {
  const addMeetupHandler = (meetup: MeetupData) => {
    console.log(meetup);
  };

  return (
    <>
      <Head>
        <title>New meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
