import React, { useState } from "react";

import NameForm from "./components/NameForm";
import Greeting from "./components/Greeting";

function App() {
  const [ userName, setUserName ] = useState<string | null>();

  return (
    <div>
      <h1>Hello there!</h1>

      { userName != null ? (
        <Greeting name={userName} onReject={() => setUserName(null)} />
      ) : (
        <NameForm onSubmit={(name) => setUserName(name)} />
      )}
    </div>
  );
}

export default App;
