import React from "react";
import { useSelector } from "react-redux";

import UserForm from "./components/UserForm";
import Greeting from "./components/Greeting";

import type { State } from "./store";
import type { State as UserState } from "./store/user/types";
import useAction from "./store/use-action";

function App() {
  const user = useSelector<State, UserState>((state) => state.user);

  const setName = useAction("USER$SET_NAME");
  const setAge = useAction("USER$SET_AGE");
  const clear = useAction("USER$CLEAR");

  return (
    <div>
      <h1>Hello there!</h1>

      { user.name != null && user.age != null ? (
        <Greeting name={user.name} age={user.age} onReject={clear} />
      ) : (
        <UserForm
          onSubmit={(name, age) => {
            setName(name);
            setAge(age);
          }}
        />
      )}
    </div>
  );
}

export default App;
