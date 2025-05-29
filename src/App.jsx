import axios from "axios";
import { useState } from "react";
const initialData = { author: "", title: "", body: "", public: "" };

export default function App() {
  const [formData, setFormData] = useState(initialData);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  return (
    <>
      <form>
        <input
          className="input "
          name="author"
          onChange={handleInputChange}
          type="text"
          placeholder="Inserisci testo"
        ></input>
      </form>
    </>
  );
}
