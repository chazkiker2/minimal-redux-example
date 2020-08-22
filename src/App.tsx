import React from "react";
import { useDispatch, useSelector } from "react-redux";

import UserForm from "./components/UserForm";
import Greeting from "./components/Greeting";

import type { State } from "./store";
import type { State as UserState } from "./store/user/types";
import { setName, setAge, clear } from "./store/user/actions";

function App() {
  const user = useSelector<State, UserState>((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello there!</h1>

      { user.name != null && user.age != null ? (
        <Greeting
          name={user.name}
          age={user.age}
          onReject={() => dispatch(clear())}
        />
      ) : (
        <UserForm
          onSubmit={(name, age) => {
            dispatch(setName(name));
            dispatch(setAge(age));
          }}
        />
      )}
    </div>
  );
}

export default App;
