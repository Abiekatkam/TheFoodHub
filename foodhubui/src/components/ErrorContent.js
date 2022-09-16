import React from "react";

function ErrorContent() {
  return (
    <>
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <a class="btn" href="/">
        HomePage
      </a>
    </>
  );
}

export default ErrorContent;