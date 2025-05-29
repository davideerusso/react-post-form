import axios from "axios";
import { useState } from "react";
const initialData = { author: "", title: "", body: "", public: false };
const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
export default function App() {
  const [formData, setFormData] = useState(initialData);
  const [cardData, setCardData] = useState();

  const handleFormSubmit = (e) => {
    axios.post(`${apiUrl}`, formData).then((res) => {
      const { author, title, body } = res.data;
      setCardData({ author, title, body });
      console.log(res.data);
    });
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

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

      {cardData && (
        <div>
          <div>
            <p>{formData.author}</p>
            <h3>{formData.title}</h3>
            <p>{formData.body}</p>
            <p>{!formData.public ? "Bozza" : "Pubblico"}</p>
          </div>
        </div>
      )}
    </>
  );
}
