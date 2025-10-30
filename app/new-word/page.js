import Link from "next/link";

export default function NewWord() {
    return (
        <main>
            <h1>New Words</h1>
            <p><Link href="/new-word/day-1">Day 1</Link></p>
            <p><Link href="/new-word/day-2">Day 2</Link></p>
            <p><Link href="/new-word/day-3">Day 3</Link></p>
            <p><Link href="/new-word/day-4">Day 4</Link></p>
        </main>
    )
}