import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On navigation: scrolls to top for a plain route change, or smooth-scrolls
 * to the matching element when the URL includes a #hash (e.g. /#systems).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
