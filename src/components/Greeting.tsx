import React from "react";

/** @private */
interface Props {
  name: string;
  onReject(): void;
}

export default function Greeting({
  name,
  onReject,
}: Props): React.ReactElement {
  return (
    <>
      <h3>Hey, I know you!</h3>
      <p>You're {name}, right?</p>
      <button type="button" onClick={onReject}>
        No, that's not me
      </button>
    </>
  );
}
