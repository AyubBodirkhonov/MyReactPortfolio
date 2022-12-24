import { createContext, useState } from "react";

export const OpenMenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const OpenMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const value = { isMenuOpen, setIsMenuOpen };
  return (
    <OpenMenuContext.Provider value={value}>
      {children}
    </OpenMenuContext.Provider>
  );
};
