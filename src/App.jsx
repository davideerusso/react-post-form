import axios from "axios";
import { useState } from "react";
const initialData = { author: "", title: "", body: "", public: false };

export default function App() {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    /**
     * se e.target è di tipo "checkbox"
     * allora value = e.target.checked
     * altrimenti e.target.value
     */
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  console.log(formData);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            className="input "
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            type="text"
            placeholder="Author"
          ></input>
        </div>
        <div>
          <input
            className="input "
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            type="text"
            placeholder="title"
          ></input>
        </div>

        <div>
          <textarea
            className="input "
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            type="text"
            placeholder="body"
          ></textarea>
        </div>

        <div>
          <input
            type="checkbox"
            name="public"
            checked={formData.public}
            onChange={handleInputChange}
          />
          Rendi pubblica
        </div>
        <button>Crea Post </button>
      </form>

      {formData && (
        <div>
          <div>
            <p>{formData.author}</p>
            <h3>{formData.title}</h3>
            <p>{formData.body}</p>
            <p>{!formData.public ? "Pubblico" : "Bozza"}</p>
          </div>
        </div>
      )}
    </>
  );
}
