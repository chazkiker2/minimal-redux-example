import React, { useState } from "react";

/** @private */
interface Props {
  onSubmit(name: string, age: number): void;
}

export default function UserForm({ onSubmit }: Props): React.ReactElement {
  const [ name, setName ] = useState<string | null>();
  const [ age, setAge ] = useState<number | null>();

  return (
    <>
      <h3>Who are you again?</h3>
      <p>
        Type in your name and age below and click "Submit" to introduce
        yourself.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (name && age) onSubmit(name, age);
        }}
      >
        <input
          type="text"
          placeholder="John Doe"
          required
          onInput={(event) => setName(event.currentTarget.value)}
        />
        <input
          type="number"
          placeholder="42"
          style={{ width: 50 }}
          required
          min={1}
          step={1}
          onInput={(event) => setAge(+event.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
