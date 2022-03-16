import { useState,useEffect } from "react";
import './styles.css'
//add pokemon to localstorage
const Add = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));

    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }, [name]);
  

  return (
    <form id="fr">
      <input
        type="text" 
        class="form-control" id="form" 
        placeholder="Enter a name of pokemon"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" value='Submit' class="btn btn-info" id="bt">Enregistrer</button>
    </form>
  );
};

export default Add;