import { NextUIProvider } from "@nextui-org/react";

const NextuiProvider = ({ children }) => {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  );
};

export default NextuiProvider;
