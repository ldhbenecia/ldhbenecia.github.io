import React, { ReactNode } from "react";
import Header from "./Header/header"
import Footer from "./Footer/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary">
      <div>{children}</div>
      <Footer />
    </div>
  );
}
