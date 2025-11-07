import { Suspense } from "react";
import classes from "./loading.module.css";
import { getDayNewWords } from "@/lib/meals";
import DayWordGrid from "../component/dayWord/dayWord-grid";

async function DayNewWords() {
  const daysWord = await getDayNewWords();
  return <DayWordGrid daysWord={daysWord} />;
}

export default function NewWord() {
  return (
    <main>
      <h1>New Words</h1>
      <Suspense fallback={<p className={classes.loading}>Fetching data...</p>}>
        <DayNewWords />
      </Suspense>
    </main>
  );
}
