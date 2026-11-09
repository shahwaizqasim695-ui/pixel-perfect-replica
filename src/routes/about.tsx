import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-pages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Nadine | Children's Author & Food Lover" },
    { name: "description", content: "Read about Nadine Khalaf Aldridge, her Lebanese American family traditions, love of storytelling, and the inspiration behind Little Chef Leila." },
    { property: "og:title", content: "About Nadine | Children's Author & Food Lover" },
    { property: "og:description", content: "Meet the author whose childhood kitchen traditions inspired Little Chef Leila." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SitePage page="about" />,
});