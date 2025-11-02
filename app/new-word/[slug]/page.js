import { getNewWords } from "@/lib/meals";
import classes from "./vocabulary.module.css";
import { notFound } from "next/navigation";

export default async function WordOneDay({ params }) {
  const { slug } = await params;
  const day = slug.split("-");
  if (isNaN(+day[1])) {
    notFound();
  }

  async function KeyWords() {
    const newWords = await getNewWords();
    return <DayWordGrid daysWord={newWords} />;
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
