import React from "react";
import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button success outline rounded>
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>See Deail</Button>
      </div>
      <div>
        <Button secondary outline>
          Hi dead
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Whats up
        </Button>
      </div>
    </div>
  );
}

export default App;
