import { Suspense } from "react";
import Days from "../component/days";
import classes from "./loading.module.css";
import { getWords } from "@/lib/meals";

async function Words() {
  const words = await getWords();
  return <Days words={words} />;
}

export default function NewWord() {
  return (
    <main>
      <h1>New Words</h1>
      <Suspense fallback={<p className={classes.loading}>Fetching data...</p>}>
        <Words />+
      </Suspense>
    </main>
  );
}
