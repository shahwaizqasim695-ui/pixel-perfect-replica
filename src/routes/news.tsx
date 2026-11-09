import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-pages";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [
    { title: "News & Events | Nadine Khalaf Aldridge" },
    { name: "description", content: "Find future book news, events, and announcements from children's author Nadine Khalaf Aldridge." },
    { property: "og:title", content: "News & Events | Nadine Khalaf Aldridge" },
    { property: "og:description", content: "Notes, news, and upcoming adventures from Nadine Khalaf Aldridge." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SitePage page="news" />,
});