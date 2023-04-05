import React from "react";
import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: "asd",
      label: "Click here ?",
      content: "More content dfgeregthgn sis here",
    },
    {
      id: "aswerd",
      label: "Can i use React on a project ?",
      content: "You can use react",
    },
    {
      id: "aswewred",
      label: "Can i use JS on a project ?",
      content: "You can use JS",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
