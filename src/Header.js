import React from "react";
import QuoteGetter from "./QuoteGetter";

/** header
 *
 * App -> header -> QuoteFetcher
 **/
function Header() {
  return (
    <header className="container-fluid pt-4 pb-1">
      <div className="container">
        <h1>Prøductïv</h1>
        <p className="lead">The best name in todo list management.</p>
        <QuoteGetter />
      </div>
    </header>
  );
}

export default Header;
