import React, { ReactNode } from "react";

function PagesContainer({ children }: { children: ReactNode }) {
  return <div className="pages-container">{children}</div>;
}

export default PagesContainer;
