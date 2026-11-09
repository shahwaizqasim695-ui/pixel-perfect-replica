import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Nadine Khalaf Aldridge" },
    { name: "description", content: "Contact children's author Nadine Khalaf Aldridge with questions, event inquiries, or notes about Little Chef Leila." },
    { property: "og:title", content: "Contact Nadine Khalaf Aldridge" },
    { property: "og:description", content: "Send Nadine a note about books, events, or Little Chef Leila." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SitePage page="contact" />,
});