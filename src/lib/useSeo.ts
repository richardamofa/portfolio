import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description?: string;
}

const SITE_NAME = "Richard Amofa";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Sets the document title and description per page/route for basic SEO + social sharing. */
export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    if (description) {
      setMeta("description", description);
      setMeta("og:title", fullTitle, "property");
      setMeta("og:description", description, "property");
      setMeta("twitter:title", fullTitle);
      setMeta("twitter:description", description);
    }
  }, [title, description]);
}
