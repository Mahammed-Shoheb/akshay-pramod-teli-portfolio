import { useState, useEffect } from "react";

const useIsActiveLink = (navLink: string) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash && navLink == "home") {
        setIsActive(true);
      } else {
        setIsActive(window.location.hash === `#${navLink}`);
      }
    };

    // Run on mount
    handleHashChange();

    // Add hash change listener
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [navLink]);

  return isActive;
};

export default useIsActiveLink;
