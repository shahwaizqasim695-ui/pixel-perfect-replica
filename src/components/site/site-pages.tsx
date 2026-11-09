import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChefHat, Heart, Leaf, Mail, Sparkles } from "lucide-react";
import cover from "@/assets/little_chef_leila_cover.jpg.asset.json";
import { Button } from "@/components/ui/button";

export type SitePageKey = "books" | "characters" | "recipes" | "news" | "about" | "contact";

const bookDescription = "Leila is planning a surprise dinner with help from her mom and her best friend, Ryan. After a fun trip to the farmers’ market, one dropped ingredient changes the plan. With a little help, creativity, and courage, Leila learns that mistakes can lead to wonderful, tasty adventures in the kitchen.";

const pageContent: Record<SitePageKey, { eyebrow: string; title: string; intro: string }> = {
  books: { eyebrow: "The delicious adventure series", title: "A story full of flavor", intro: "Meet Little Chef Leila in her very first delicious adventure, a story of friendship, family, and finding a fresh way forward." },
  characters: { eyebrow: "Friends make every story brighter", title: "Meet the kitchen crew", intro: "Get to know the friends at the heart of Leila’s farmers’ market adventure." },
  recipes: { eyebrow: "A dash of inspiration", title: "The recipe corner", intro: "A place for family-friendly kitchen inspiration. Recipes will be added when approved by Nadine." },
  news: { eyebrow: "Notes from our little kitchen", title: "Fresh from the storybook", intro: "Book news, events, and new adventures will find a home here." },
  about: { eyebrow: "The storyteller behind the apron", title: "Meet Nadine Khalaf Aldridge", intro: "Lebanese-American children’s author, lifelong food lover, and former little chef." },
  contact: { eyebrow: "Come say hello", title: "Let’s keep in touch", intro: "For questions, events, and book inquiries, send Nadine a note." },
};

const biography = [
  "Nadine Khalaf Aldridge is a Lebanese American children's author, lifelong food lover, and former 'little chef' who grew up in a family where cooking was about much more than putting dinner on the table. The kitchen was a place for sharing stories, preserving traditions, welcoming others, and creating the kinds of memories that stay with you long after the dishes are done.",
  "Her path to children's books took a few flavorful turns. Nadine earned a bachelor's degree in biology and a master's degree in Modern Languages, bringing together her curiosity about how the world works with her love of language, culture, and storytelling. She later shared her enthusiasm for food through a food blog and built a career in the corporate world.",
  "Eventually, she traded office life for the page and began writing the kinds of stories she wanted young readers—and their grown-ups—to enjoy together.",
  "Inspired by the flavors, traditions, and kitchen adventures of her childhood, Nadine created Little Chef Leila to encourage children to approach food and the wider world with curiosity.",
  "Through Leila's adventures, she hopes young readers will feel excited to try healthier foods, discover other cultures, form inclusive friendships, and spend meaningful time with their families in the kitchen.",
  "At the heart of her work is a simple belief: food can bring people together, and every shared recipe has the makings of a wonderful story.",
];

export function SitePage({ page }: { page: SitePageKey }) {
  const content = pageContent[page];
  return (
    <main className="storybook-page inner-page">
      <header className="inner-page-header section-wrap"><Link to="/" className="back-link">← Back to the kitchen</Link><span aria-hidden="true">✿</span></header>
      <section className="inner-page-intro"><div className="hero-bunting" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="eyebrow">{content.eyebrow}</div><h1>{content.title}</h1><p>{content.intro}</p><span className="inner-intro-flower" aria-hidden="true">✿</span></section>
      <section className="inner-page-content section-wrap">{page === "books" && <BooksContent />}{page === "characters" && <CharactersContent />}{page === "recipes" && <RecipesContent />}{page === "news" && <NewsContent />}{page === "about" && <AboutContent />}{page === "contact" && <ContactContent />}</section>
      <footer className="inner-page-footer"><Link to="/">Nadine Khalaf Aldridge <span>✿</span></Link><span>Stories with a little flavor</span></footer>
    </main>
  );
}

function BooksContent() {
  const [expanded, setExpanded] = useState(false);
  return <div className="inner-book-layout"><div className="inner-book-cover"><img src={cover.url} alt="Little Chef Leila: The Delicious Adventure Series, Book 1" /></div><div className="inner-book-copy"><div className="eyebrow">Book one · Child-friendly recipes included</div><h2>Little Chef Leila</h2><p className="inner-book-series">The Delicious Adventure Series</p><p>{bookDescription}</p>{expanded && <div className="book-extra"><p>A warm story about curiosity, courage, and the joy of making something together when plans change.</p><p><ChefHat size={17} /> Child-friendly recipes are included in the book.</p><p>Author: Nadine Khalaf Aldridge</p></div>}<Button variant="link" className="text-link" onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "More about the book"} <ArrowRight size={16} /></Button><div className="book-actions"><span className="retailer-note">Purchase details coming soon</span></div></div></div>;
}

function CharactersContent() {
  return <div className="character-list"><article className="character-item"><div className="character-art"><img src={cover.url} alt="Leila, the little chef, on the book cover" /></div><div><span className="eyebrow">Our curious little chef</span><h2>Leila</h2><p>Leila loves to cook. With a surprise dinner to plan, a trip to the farmers’ market, and an ingredient gone missing, she discovers that a changed plan can lead to a wonderful adventure.</p></div></article><article className="character-item character-reverse"><div className="character-art character-art-ryan"><img src={cover.url} alt="Ryan, Leila’s best friend, on the book cover" /></div><div><span className="eyebrow">Best friends make good helpers</span><h2>Ryan</h2><p>Leila’s best friend joins in on the surprise dinner adventure. More about Ryan’s story is coming soon.</p></div></article><p className="editor-note"><Sparkles size={16} /> Character art and details are shown only as they appear on the original cover.</p></div>;
}

function RecipesContent() {
  return <div className="coming-soon-block"><div className="coming-soon-icon"><ChefHat size={44} /></div><span className="eyebrow">Something delicious is in the works</span><h2>Recipes are simmering</h2><p>Family-friendly recipes will appear here when they’re ready to share. In the meantime, Little Chef Leila’s book includes child-friendly recipes to enjoy together.</p><Button asChild className="button-berry"><Link to="/books">Discover the book <ArrowRight size={17} /></Link></Button></div>;
}

function NewsContent() {
  return <div className="coming-soon-block"><div className="coming-soon-icon"><Mail size={42} /></div><span className="eyebrow">Notes from our little kitchen</span><h2>More stories soon</h2><p>There are no news or event announcements to share just yet. Check back for future updates from Nadine.</p><Button asChild variant="link" className="text-link"><Link to="/contact">Get in touch <ArrowRight size={17} /></Link></Button></div>;
}

function AboutContent() {
  return <article className="biography"><div className="author-photo-placeholder"><BookOpen size={43} /><span>Author portrait<br />coming soon</span></div><div className="biography-text">{biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<span className="bio-signoff">With a little love, Nadine <Heart size={17} /></span></div></article>;
}

function ContactContent() {
  const [sent, setSent] = useState(false);
  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject")));
    const body = encodeURIComponent(`From: ${String(data.get("name"))} (${String(data.get("email"))})\n\n${String(data.get("message"))}`);
    window.location.href = `mailto:nadinekhalafaldridge@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <div className="contact-layout"><div className="contact-note"><Mail size={29} /><h2>We’d love to hear from you</h2><p>For questions, events, and book inquiries, email Nadine directly.</p><a href="mailto:nadinekhalafaldridge@gmail.com">nadinekhalafaldridge@gmail.com</a></div><form className="contact-form" onSubmit={handleContact}><label>Your name<input required name="name" autoComplete="name" /></label><label>Email address<input required name="email" type="email" autoComplete="email" /></label><label>Subject<input required name="subject" /></label><label>Your message<textarea required name="message" rows={5} /></label><Button type="submit" className="button-berry">Write to Nadine <ArrowRight size={17} /></Button>{sent && <p role="status">Your email app should open with your message ready to send.</p>}</form></div>;
}