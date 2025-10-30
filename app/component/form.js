export default function Form() {
  const onSubmit = (e) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          name="name" // Add the name attribute
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Name"
          required
          value={form.name}
        />
      </form>
    </>
  );
}
