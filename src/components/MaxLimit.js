// MaxLimit.js
import React from "react";

function MaxLimit({ maxCount, setMaxCount }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="max-count" style={{ display: "block", marginBottom: "0.5rem"}}>Max Count:</label>
      <input
        id="max-count"
        type="number"
        value={maxCount}
        onChange={(e) => setMaxCount(parseInt(e.target.value))}
      />
    </div>
  );
}

export default MaxLimit;
