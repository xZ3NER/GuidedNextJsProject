// our-domain.com/new-meetup

import { NewMeetupForm } from "@/components";
import { MeetupDocument } from "@/util/models/meetup-data";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const NewMeetupPage: NextPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup: MeetupDocument) => {
    // Call our api route endpoint
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // Shows our custom res.json({...}) object.
    console.log(data);

    router.push("/");
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
