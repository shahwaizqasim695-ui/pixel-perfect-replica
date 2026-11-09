import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-pages";

export const Route = createFileRoute("/recipes")({
  head: () => ({ meta: [
    { title: "Family Recipes | Nadine Khalaf Aldridge" },
    { name: "description", content: "Visit the Little Chef Leila recipe corner for family-friendly inspiration and updates on recipes to come." },
    { property: "og:title", content: "Family Recipes | Nadine Khalaf Aldridge" },
    { property: "og:description", content: "A place for family-friendly kitchen inspiration from the world of Little Chef Leila." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SitePage page="recipes" />,
});