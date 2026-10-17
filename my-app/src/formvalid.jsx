import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const isValid =
    form.name.trim() !== "" &&
    form.email.includes("@");

  return (
    <form>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button disabled={!isValid}>
        Register
      </button>

      {!isValid && (
        <p>Please enter valid details</p>
      )}
    </form>
  );
}

export default Form;