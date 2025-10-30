import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <p>WELCOME HOME</p>
        <Link href="/new-word">Learn Vocabulary</Link>
        <p></p>
      </main>
    </div>
  );
}
