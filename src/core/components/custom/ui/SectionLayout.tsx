import React, { ReactNode } from "react";
import PagesContainer from "./PagesContainer";

function SectionLayout({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <section className={`section-layout ${classname ? classname : ""}`}>
      <PagesContainer>{children}</PagesContainer>
    </section>
  );
}

export default SectionLayout;
