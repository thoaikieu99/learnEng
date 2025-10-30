import classes from "./vocabulary.module.css";

export default async function WordOneDay({ params }) {
  const { slug } = await params;
  const day = slug.split("-");
  console.log(+day[1]);
  if (isNaN(+day[1])) {
    return 1;
  }

  return (
    <main>
      <h1>Welcome to Day {day[1]} of Vocabulary</h1>
      <div className={classes.box_one}>
        <b className={classes.centerDiv}>Xin chao</b>
      </div>
    </main>
  );
}
