export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "Java" | "JavaScript" | "Network Programming";
  tags: string[];
  author: string;
  date: string;
  readTime: number;
  image?: string;
}

