import React, { useState } from "react";

/** @private */
interface Props {
  onSubmit(name: string): void;
}

export default function NameForm({ onSubmit }: Props): React.ReactElement {
  const [ name, setName ] = useState<string | null>();

  return (
    <>
      <h3>What's your name?</h3>
      <p>
        Type it in the input below and click "Submit" to introduce yourself.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (name) onSubmit(name);
        }}
      >
        <input
          type="text"
          placeholder="John Doe"
          required
          onInput={(event) => setName(event.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
