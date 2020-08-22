import React from "react";

/** @private */
interface Props {
  name: string;
  age: number;
  onReject(): void;
}

export default function Greeting({
  name,
  age,
  onReject,
}: Props): React.ReactElement {
  return (
    <>
      <h3>Hey, I know you!</h3>
      <p>You're {name}, {age} years old, right?</p>
      <button type="button" onClick={onReject}>
        No, that's not me
      </button>
    </>
  );
}
