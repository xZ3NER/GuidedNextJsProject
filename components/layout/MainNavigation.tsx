import classes from "./MainNavigation.module.css";
import Link from "next/link";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Next Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
