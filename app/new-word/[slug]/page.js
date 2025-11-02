import { getNewWords } from "@/lib/meals";
import classes from "./vocabulary.module.css";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import NewWordItem from "@/app/component/newWord/newWord-item";

export default async function WordOneDay({ params }) {
  const { slug } = await params;

  const day = +slug.split("-")[1];
  if (isNaN(day)) {
    notFound();
  }

  async function KeyWords() {
    const newWords = await getNewWords(day);
    if (newWords[0]) {
      return <NewWordItem dataWord={newWords} />;
    }
  }

  return (
    <main>
      <h1>Welcome to Day {day} of Vocabulary</h1>
      <div className={classes.box_one}>
        <Suspense
          fallback={<p className={classes.loading}>Loading new word...</p>}
        >
          <KeyWords />+
        </Suspense>
      </div>
    </main>
  );
}
