import { MeetupData } from "@/util/models/meetup-data";
import Image from "next/image";
import classes from "./MeetupDetail.module.css";

interface MeetupDetailProps {
  children?: React.ReactNode;
  meetup: MeetupData;
}

export const MeetupDetail = ({ meetup }: MeetupDetailProps) => {
  return (
    <section className={classes.detail}>
      <Image
        src={meetup.image}
        alt={meetup.title}
        width={400}
        height={500}
        priority
      />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
};
