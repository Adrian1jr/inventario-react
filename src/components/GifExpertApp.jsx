import { useState } from "react";
import "../css/gifapp.css";

export const GifExpertApp = () => {
  //Listas a utilizar
  const [gifs, setGifs] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  //Input Change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async (inputValue) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QKTicEr3kVUl0loW5XnndHYfwocQdu58&q=${inputValue}&limit=2`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    setGifs(gifs);
  };

  //Agregar categoria nueva
  const handleAddCategory = () => {
    //Validar que no se agregue una categoria igual
    if (categories.includes(inputValue)) return;

    //Tomar las categorias anteriores y agregar la nueva
    setCategories([inputValue]);
    fetchData(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <div className="container-add-category">
        <input
          type="text"
          placeholder="Add category"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="btn-add-category"
          onClick={handleAddCategory}
        >
          Agregar Categoria
        </button>
      </div>
      <div>
        <div>
          {categories.map((category) => (
            <h3 key={category}>{category}</h3>
          ))}
        </div>

        <div className="container-gifs">
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.url} alt={gif.title} />
          ))}
        </div>
      </div>
    </>
  );
};
