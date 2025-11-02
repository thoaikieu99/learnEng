import DayWordItem from "./dayWord-item";

export default function DayWordGrid({ daysWord }) {
  return (
    <ul>
      {daysWord.map((day) => (
        <li key={day.day}>
          <DayWordItem {...day} />
        </li>
      ))}
      <li></li>
    </ul>
  );
}
