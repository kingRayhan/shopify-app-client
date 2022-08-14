import React from "react";

const App = () => {
  const queries = new URLSearchParams(window.location.search);
  return <div>Host: {queries.get("host")}</div>;
};

export default App;
