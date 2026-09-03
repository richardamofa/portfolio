export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  date: string | null;
  status: "published" | "planned";
  readTime?: string;
  url?: string;
}
