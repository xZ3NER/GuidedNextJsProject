import classes from "./Card.module.css";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.card}>{children}</div>;
};