import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-pages";

export const Route = createFileRoute("/books")({
  head: () => ({ meta: [
    { title: "Little Chef Leila Book | Nadine Khalaf Aldridge" },
    { name: "description", content: "Discover Little Chef Leila: The Delicious Adventure Series, a story about friendship, family, courage, and kitchen creativity." },
    { property: "og:title", content: "Little Chef Leila Book | Nadine Khalaf Aldridge" },
    { property: "og:description", content: "Meet Leila in her first delicious adventure, with child-friendly recipes included." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SitePage page="books" />,
});