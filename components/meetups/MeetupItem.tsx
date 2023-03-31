import { MeetupData } from "@/util/models/meetup-data";
import { useRouter } from "next/router";
import { Card } from "..";
import classes from "./MeetupItem.module.css";

interface MeetupItemProps {
  children?: React.ReactNode;
  meetupItem: MeetupData;
}

export const MeetupItem = ({meetupItem}: MeetupItemProps) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    // Works like Link (push the route)
    router.push("/" + meetupItem._id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetupItem.image} alt={meetupItem.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetupItem.title}</h3>
          <address>{meetupItem.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};
