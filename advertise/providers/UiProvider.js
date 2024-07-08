import { NextUIProvider } from "@nextui-org/react";

const UiProvider = ({ children }) => {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  );
};

export default UiProvider;
