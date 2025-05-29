import axios from "axios";
import { useState } from "react";
const initialData = { author: "", title: "", body: "", public: false };

export default function App() {
  const [formData, setFormData] = useState(initialData);
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsChecked(!isChecked);
  };
  console.log(formData);

  return (
    <>
      <form>
        <input
          className="input "
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          type="text"
          placeholder="Author"
        ></input>
        <input
          className="input "
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          type="text"
          placeholder="title"
        ></input>
        <textarea
          className="input "
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          type="text"
          placeholder="body"
        ></textarea>
        <input
          type="checkbox"
          name="public"
          value={formData.public}
          checked={isChecked}
          onChange={handleInputChange}
        />
        <button>Crea Post </button>
      </form>
    </>
  );
}
