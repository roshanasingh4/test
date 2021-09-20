import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <form>
        <div className="mb-3 form-check">
          <input
            type="text"
            id="form1"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Id"
            style={{ backgroundColor: "#ececec" }}
          />
        </div>
        <Link
          className="btn btn-primary btn-lg button"
          to={`details/${search}`}
        >
          Search
        </Link>
      </form>
    </div>
  );
}

export default Home;
