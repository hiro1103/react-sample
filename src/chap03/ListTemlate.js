import React, { Children } from "react";

export default function ({ src, children }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{children(elem)}</React.Fragment>
      ))}
    </dl>
  );
}
