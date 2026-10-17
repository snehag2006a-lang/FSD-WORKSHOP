import { useState } from "react";

function SearchBox() {
  const [term, setTerm] = useState("");

  return (
    <input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchBox;