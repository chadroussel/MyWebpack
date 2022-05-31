import { useState } from "react";

const songFormula = {
  beat: 1,
  verse: 2,
  hook: 3,
};

const clubBangerFormula = {
  ...songFormula,
  chant: 2,
  hook: 3,
};

console.log(songFormula);
console.log(clubBangerFormula);

const Formulas = () => {
  const [formula, setFormula] = useState({});
  return (
    <div>
      <h3>Current Formula: </h3>
      <button onClick={() => setFormula(songFormula)}>Song Formula</button>
      <button onClick={() => setFormula(clubBangerFormula)}>
        Club Banger Formula
      </button>

      <ul>
        {Object.keys(formula).map((material) => (
          <li key={material}>
            {material}: {formula[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formulas;
