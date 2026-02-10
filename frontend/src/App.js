import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  const getQuote = async () => {
    const backendUrl = `http://${window.location.hostname}:5000/api/quote`;
    const res = await fetch(backendUrl);
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
