import React from "react";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
function App() {
  const handleClick = () => {
    console.log("Click...");
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleClick}
          className="mb-5"
        >
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deail
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hi dead
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Whats up
        </Button>
      </div>
    </div>
  );
}

export default App;
