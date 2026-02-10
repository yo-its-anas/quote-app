const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const quotes = [
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
  { author: "Steve Jobs", quote: "Stay hungry, stay foolish." },
  { author: "Nelson Mandela", quote: "It always seems impossible until it’s done." },
  { author: "Muhammad Ali", quote: "Don’t count the days, make the days count." },
  { author: "Abraham Lincoln", quote: "Whatever you are, be a good one." },
  { author: "Mark Zuckerberg", quote: "The biggest risk is not taking any risk." },
  { author: "Bill Gates", quote: "Success is a lousy teacher." },
  { author: "Elon Musk", quote: "When something is important enough, you do it even if the odds are not in your favor." },
  { author: "Imran Khan", quote: "Never give up, no matter how hard life gets." },
  { author: "Bruce Lee", quote: "Knowing is not enough, we must apply." }
];

app.get("/api/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
