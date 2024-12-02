import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "@#$%*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    generatePassword();
  }, [length, number, character]);

  return (
    <div>
      <div className="input">
        <input type="text" value={password} />
        <button>copy</button>
      </div>
      <div className="input-range">
        <input type="range" onChange={(e) => setLength(e.target.value)} />
        <label>length : {length}</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={number} />
        <label>number</label>

        <input type="checkbox" defaultChecked={character} />
        <label>character</label>
      </div>
    </div>
  );
}
export default App;
