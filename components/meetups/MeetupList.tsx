import { MeetupData } from '@/util/models/meetup-data';
import { MeetupItem } from '..';
import classes from './MeetupList.module.css';

// Interface (used for object types), for props, 
// better aproach than React.FC in React 18.
// MeetupData it's an exported class, just like in Java OOP class
interface MeetupListProps {
  children?: React.ReactNode;
  meetups: MeetupData[];
}

export const MeetupList = ({meetups}: MeetupListProps) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          meetupItem={meetup}
        />
      ))}
    </ul>
  );
}