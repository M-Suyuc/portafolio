import React from "react";

function Container({ children }) {
  return (
    <div className="mx-auto h-auto w-full max-w-screen-lg px-6 sm:px-20 md:px-16 lg:px-4">
      {children}
    </div>
  );
}

export default Container;
