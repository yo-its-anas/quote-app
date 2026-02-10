import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  const getQuote = async () => {
    const res = await fetch("http://backend:5000/api/quote");
    const data = await res.json();
    setQuote(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quote of the Day</h1>
      <button onClick={getQuote}>Get Quote</button>

      {quote && (
        <div style={{ marginTop: "20px" }}>
          <p><b>"{quote.quote}"</b></p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
}

export default App;
