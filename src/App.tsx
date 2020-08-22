import React from "react";
import { useDispatch, useSelector } from "react-redux";

import NameForm from "./components/NameForm";
import Greeting from "./components/Greeting";

import type { State } from "./store";
import { setName, clearName } from "./store/user/actions";

function App() {
  const userName = useSelector<State, string | null>((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello there!</h1>

      { userName != null ? (
        <Greeting
          name={userName}
          onReject={() => dispatch(clearName())}
        />
      ) : (
        <NameForm
          onSubmit={(name) => dispatch(setName(name))}
        />
      )}
    </div>
  );
}

export default App;
