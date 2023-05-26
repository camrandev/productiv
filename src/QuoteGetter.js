import React, { useState } from "react";
import Quote from "./Quote"
const axios = window.axios;
/** QuoteGetter
 *
 * No Props
 *
 * State:
 * - quoteText: the actual text of the quote
 * - buttonText: the text to display on the button
 *
 * App -> QuoteGetter -> Quote
 **/
function QuoteGetter() {
  const initialButtonText = "Click here for an inspirational quøte!";
  const [quote, setQuote] = useState("");

  const [buttonText, setButtonText] = useState(initialButtonText);

  async function getQuote() {
    const q = await axios.get(
      "https://inspo-quotes-api.herokuapp.com/quotes/random"
    );

    const quoteText = q.data.quote.text;
    setButtonText("Nu quøte");
    setQuote(quoteText);
  }

  return (
    <div className="text-end">
      {quote !== "" && <Quote quoteText={quote}/>}
      {/* TODO: add proper colors here */}
      <button onClick={getQuote}>{buttonText}</button>
    </div>
  );
}

export default QuoteGetter;
