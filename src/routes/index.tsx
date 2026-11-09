import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, ChefHat, Heart, Leaf, Mail, Menu, Sparkles, X } from "lucide-react";
import cover from "@/assets/little_chef_leila_cover.jpg.asset.json";
import { Button } from "@/components/ui/button";

const pages = [
  { label: "Books", to: "/books" as const },
  { label: "Characters", to: "/characters" as const },
  { label: "Recipes", to: "/recipes" as const },
  { label: "News", to: "/news" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nadine Khalaf Aldridge | Little Chef Leila" },
      { name: "description", content: "Step into Little Chef Leila's world of food, friendship, family, and delicious adventures, created by children's author Nadine Khalaf Aldridge." },
      { property: "og:title", content: "Nadine Khalaf Aldridge | Little Chef Leila" },
      { property: "og:description", content: "Meet Little Chef Leila and discover a delicious adventure in stories, friendship, and family." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(!valid);
    if (valid) setSubscribed(true);
  }

  return (
    <main className="storybook-page">
      <div className="announcement"><Sparkles size={13} aria-hidden="true" /><span>A little story, a lot of heart</span><Sparkles size={13} aria-hidden="true" /></div>
      <header className="site-header">
        <Link to="/" className="brand-lockup" aria-label="Nadine Khalaf Aldridge home">
          <span className="brand-icon"><BookOpen size={29} strokeWidth={1.5} /><span className="brand-flower">✿</span></span>
          <span className="brand-name">Nadine Khalaf Aldridge<small>STORIES WITH A LITTLE FLAVOR</small></span>
        </Link>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {pages.map((page) => <Link key={page.to} to={page.to} onClick={() => setMenuOpen(false)}>{page.label}</Link>)}
        </nav>
        <Button asChild className="header-signup"><a href="#newsletter">Sign up <ArrowRight size={15} /></a></Button>
      </header>

      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="hero-bunting" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-flower">✿</span> Come on in, little foodies <span className="eyebrow-flower">✿</span></div>
          <h1 id="hero-heading">Big adventures begin in <span>little kitchens!</span></h1>
          <p>Discover a delicious world of stories, friendship, family, and culinary adventures with Little Chef Leila.</p>
          <div className="hero-actions">
            <Button asChild className="button-berry"><Link to="/books">Explore the books <ArrowRight size={17} /></Link></Button>
            <Button asChild variant="outline" className="button-outline"><Link to="/characters">Meet little chef Leila</Link></Button>
          </div>
          <div className="hero-note"><span className="note-scribble">✳</span><span>One missing ingredient.<br />A recipe for adventure.</span></div>
        </div>
        <div className="hero-art" aria-label="The original illustrated cover of Little Chef Leila">
          <div className="hero-sunburst" aria-hidden="true" />
          <span className="hero-doodle doodle-top" aria-hidden="true">✳</span>
          <span className="hero-doodle doodle-side" aria-hidden="true">✿</span>
          <span className="hero-doodle doodle-bottom" aria-hidden="true">✦</span>
          <div className="book-frame"><img src={cover.url} alt="Little Chef Leila: The Delicious Adventure Series, Book 1, by Nadine Khalaf Aldridge" fetchPriority="high" /></div>
          <div className="book-caption"><span className="caption-stamp">BOOK<br />NO. 01</span><span>Leila’s very first<br />delicious adventure</span><span className="caption-star">✿</span></div>
        </div>
        <div className="hero-bottom" aria-hidden="true"><span>STORIES TO SHARE</span><span>✳</span><span>FLAVORS TO DISCOVER</span><span>✳</span><span>MEMORIES TO MAKE</span></div>
      </section>

      <section className="meet-section section-wrap" aria-labelledby="meet-heading">
        <div className="meet-art">
          <div className="meet-disc" aria-hidden="true"><span>✿</span></div>
          <img src={cover.url} alt="Leila and Ryan bring home fresh ingredients from the farmers’ market" loading="lazy" />
          <div className="market-tag"><Leaf size={15} /> MARKET DAY MAGIC</div>
        </div>
        <div className="meet-copy"><div className="eyebrow">A new friend in the kitchen</div><h2 id="meet-heading">Meet Leila,<br />your new little chef!</h2><p>Curious, kind, and always ready to try something new, Leila knows the best recipes are made with a sprinkle of creativity and a whole lot of heart.</p><p>Come along for a trip to the farmers’ market, a surprise dinner, and one very unexpected kitchen adventure.</p><Button asChild variant="link" className="text-link"><Link to="/characters">Get to know the characters <ArrowRight size={17} /></Link></Button></div>
      </section>

      <section className="book-section" aria-labelledby="book-heading">
        <div className="section-wrap book-content">
          <div className="book-copy"><div className="eyebrow">The delicious adventure series · Book one</div><h2 id="book-heading">A story full<br />of <span>flavor!</span></h2><p>Leila is planning a surprise dinner with help from her mom and her best friend, Ryan. But after a fun trip to the farmers’ market, one dropped ingredient changes the plan.</p><p>With a little help, creativity, and courage, Leila learns that mistakes can lead to wonderful, tasty adventures in the kitchen.</p><div className="book-badges"><span><ChefHat size={16} /> Child-friendly recipes included</span><span><Heart size={16} /> A tale of friendship & family</span></div><div className="book-actions"><Button asChild className="button-berry"><Link to="/books">Discover the book <ArrowRight size={17} /></Link></Button><span className="retailer-note">Purchase details coming soon</span></div></div>
          <div className="book-display"><span className="book-display-flower flower-one" aria-hidden="true">✿</span><span className="book-display-flower flower-two" aria-hidden="true">✽</span><img src={cover.url} alt="Little Chef Leila book cover" loading="lazy" /><div className="book-display-label">A feel-good read for little cooks & their grown-ups</div></div>
        </div>
      </section>

      <section className="values-section section-wrap" aria-labelledby="values-heading">
        <div className="section-heading"><div className="eyebrow">Good things are always growing</div><h2 id="values-heading">A world of flavor,<br className="desktop-break" /> friendship & fun</h2></div>
        <div className="values-row">
          <article className="value-item value-tomato"><span className="value-icon" aria-hidden="true">✿</span><h3>Explore new flavors</h3><p>A little curiosity can make trying something new a delicious adventure.</p><span className="value-number">01</span></article>
          <article className="value-item value-sage"><span className="value-icon" aria-hidden="true">♡</span><h3>Celebrate friendship</h3><p>Good friends make every kitchen surprise a little easier to handle.</p><span className="value-number">02</span></article>
          <article className="value-item value-blue"><span className="value-icon" aria-hidden="true">✳</span><h3>Make family memories</h3><p>Stories and shared traditions bring generations closer together.</p><span className="value-number">03</span></article>
        </div>
      </section>

      <section className="recipe-section" aria-labelledby="recipe-heading">
        <div className="recipe-inner section-wrap"><div className="recipe-copy"><div className="eyebrow">A dash of inspiration</div><h2 id="recipe-heading">Let’s get<br /><span>cooking!</span></h2><p>Discover fun, family-friendly recipes that bring the joy of cooking into your kitchen.</p><Button asChild variant="link" className="text-link"><Link to="/recipes">Visit the recipe corner <ArrowRight size={17} /></Link></Button></div><div className="recipe-illustration"><div className="recipe-doodle-ring" aria-hidden="true"><span>✳</span><span>✿</span><span>✦</span></div><div className="recipe-pot"><span className="pot-steam">〰</span><ChefHat size={63} strokeWidth={1.15} /><span>made with<br />a little love</span></div><p>Good things are<br />stirring...</p></div></div>
      </section>

      <section className="author-section section-wrap" aria-labelledby="author-heading">
        <div className="author-stamp" aria-label="Stories bring us together"><span>Stories</span><span className="stamp-heart">♡</span><span>bring us<br />together</span></div>
        <div className="author-copy"><div className="eyebrow">The storyteller behind the apron</div><h2 id="author-heading">Meet Nadine<br /><span>Khalaf Aldridge</span></h2><p>Nadine is a Lebanese-American children’s author who believes that food, stories, and shared traditions have the power to bring families and cultures together.</p><Button asChild variant="link" className="text-link"><Link to="/about">Read Nadine’s story <ArrowRight size={17} /></Link></Button></div>
        <div className="author-art"><div className="author-placeholder"><BookOpen size={43} strokeWidth={1.2} /><span>A place for<br />Nadine’s portrait</span></div><span className="author-art-flower" aria-hidden="true">✿</span></div>
      </section>

      <section className="news-section" aria-labelledby="news-heading"><div className="news-inner section-wrap"><div><div className="eyebrow">Notes from our little kitchen</div><h2 id="news-heading">Fresh from<br />the storybook</h2></div><div className="news-empty"><span className="news-sprig" aria-hidden="true">✳</span><p>There’s more to come.<br />Stay tuned for author news, events & new adventures.</p><Button asChild variant="link" className="text-link"><Link to="/news">Visit the news page <ArrowRight size={17} /></Link></Button></div></div></section>

      <section className="newsletter-section" id="newsletter" aria-labelledby="newsletter-heading"><div className="newsletter-bunting" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div><div className="newsletter-inner"><span className="newsletter-flower" aria-hidden="true">✿</span><div className="eyebrow">A little note from our kitchen to yours</div><h2 id="newsletter-heading">A pinch of fun<br />in your inbox!</h2><p>Join our little kitchen community for book updates, delicious inspiration, and stories worth sharing.</p>{subscribed ? <div className="signup-success" role="status"><Heart size={18} /> You’re on the list. Thanks for stopping by!</div> : <form className="newsletter-form" onSubmit={handleSubscribe} noValidate><label className="sr-only" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" type="email" autoComplete="email" placeholder="Your email address" value={email} onChange={(event) => { setEmail(event.target.value); setEmailError(false); }} aria-invalid={emailError} aria-describedby={emailError ? "newsletter-error" : undefined} /><Button type="submit" className="button-berry">Sign me up! <ArrowRight size={16} /></Button>{emailError && <span className="form-error" id="newsletter-error" role="alert">Please enter a valid email address.</span>}</form>}<span className="newsletter-footnote">Just the good stuff. No spam, ever.</span></div></section>

      <footer className="site-footer"><div className="footer-main section-wrap"><Link to="/" className="brand-lockup footer-brand"><span className="brand-icon"><BookOpen size={27} strokeWidth={1.5} /><span className="brand-flower">✿</span></span><span className="brand-name">Nadine Khalaf Aldridge<small>STORIES WITH A LITTLE FLAVOR</small></span></Link><p className="footer-note">May your stories be sweet<br />and your kitchen full of love.</p><nav className="footer-nav" aria-label="Footer navigation">{pages.map((page) => <Link key={page.to} to={page.to}>{page.label}</Link>)}</nav></div><div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Nadine Khalaf Aldridge</span><span>Made with a little love <Heart size={13} /></span><a href="mailto:nadinekhalafaldridge@gmail.com"><Mail size={14} /> Say hello</a></div></footer>
      <a className="back-to-top" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Back to top"><ArrowDown size={17} /></a>
    </main>
  );
}