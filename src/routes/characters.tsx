import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-pages";

export const Route = createFileRoute("/characters")({
  head: () => ({ meta: [
    { title: "Meet Leila & Friends | Nadine Khalaf Aldridge" },
    { name: "description", content: "Meet Leila and Ryan, the friends at the heart of Little Chef Leila’s farmers’ market and kitchen adventure." },
    { property: "og:title", content: "Meet Leila & Friends | Nadine Khalaf Aldridge" },
    { property: "og:description", content: "Get to know the characters in Little Chef Leila: The Delicious Adventure Series." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SitePage page="characters" />,
});