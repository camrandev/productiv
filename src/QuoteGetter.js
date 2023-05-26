import React, { useState } from "react";
const axios = window.axios

function QuoteGetter() {
  const initialButtonText = "Click here for an inspirational quøte!";
  const [quote, setQuote] = useState("");

  const [buttonText, setButtonText] = useState(initialButtonText);

  async function getQuote() {
    const q = await axios.get(
      "https://inspo-quotes-api.herokuapp.com/quotes/random"
    );
    console.log(q);
    setButtonText("Nu quøte");
    setQuote(q.data.quote.text);
  }
  //need a function to access the quote from the API
  //need to import axios

  //needs to render the following, conditionally

  //render a quote IF one exists
  //render the button with conditional text

  return (
    <div className="text-end">
      {quote !== "" && <p>{quote}</p>}
      <button onClick={getQuote}>{buttonText}</button>
    </div>
  );
}

export default QuoteGetter;
