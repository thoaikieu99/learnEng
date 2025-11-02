import Link from "next/link";

export default function DayWordItem({ day }) {
  return (
    <p>
      <Link href={`/new-word/day-${day}`}>Day {day}</Link>
    </p>
  );
}
