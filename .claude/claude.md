# Prefera.dev — Project Context

## What this is
prefera.dev is the marketing site for Prefera, a productized AEO/GEO service
helping UK and EU independent aesthetic clinics gain visibility in AI-generated
answers (ChatGPT, Perplexity, Gemini, Claude). Sole operator: Golnoosh Teymoori,
based in Utrecht, NL.

## Stack
- Static site on Cloudflare Pages
- GitHub CI/CD (push to main = deploy)
- Cal.com booking at /book
- Email: golnoosh@prefera.dev via Google Workspace
- Brand: dark slate background, warm prism spectrum, Fraunces display type,
  "prefera." wordmark

## Current state (critical)
- Site is NOT indexed by Google. Zero search results for "prefera.dev" queries.
- No structured data / schema markup on the site.
- Mobile performance unknown, likely poor.
- No sitemap.xml or robots.txt confirmed live.
- No meta descriptions, no OpenGraph tags confirmed.
- The site sells AI visibility to clinics. It must practice what it preaches.

## Business context for content
- ICP: owner-led, single-location, cash-pay UK aesthetic clinics
- Lead magnet: free AI Visibility Read (audit PDF)
- Pricing: EUR 490/mo Starter, EUR 1,190/mo Growth, EUR 2,500/mo Elite
- Key differentiator: off-site authority building (not schema snake oil)
- Booking CTA always links to: https://prefera.dev/book/
- UTM structure: ?utm_source=website&utm_medium=cta&utm_campaign=[section-slug]

## Hard rules for site content
- No em dashes. Use commas, periods, parentheses, or colons.
- No fabricated statistics. Every number must have a named source.
- No claims that schema markup drives AI citations (it does not).
- No llms.txt references (evidence-null, Google confirms unused).
- No result guarantees. Say "first citations typically 6-9 weeks."
- No HIPAA references. Prefera operates in UK/EU context only.
- Correlational language for correlational findings. Causal phrasing only for
  the Princeton/Georgia Tech GEO paper content tactics, qualified with
  "in controlled testing."
- The "+42.8% from expert quotes" figure is fabricated. Never use it.

## Design principles
- Fraunces for display headings. System or Inter for body.
- Dark slate (#1a1a2e or similar) as primary background.
- Warm prism spectrum accent (the refracted light motif).
- Mobile-first. Every section must work at 375px viewport.
- Performance budget: <2s LCP, <100ms FID, <0.1 CLS.
- Accessibility: WCAG 2.1 AA minimum. Visible focus states, alt text,
  semantic HTML.
- No JavaScript required for core content. Progressive enhancement only.

## SEO requirements
- Every page: unique title tag (<60 chars), meta description (<155 chars),
  canonical URL, OpenGraph image + title + description.
- Semantic HTML: one H1 per page, logical heading hierarchy.
- sitemap.xml at root, referenced in robots.txt.
- robots.txt must NOT block: Googlebot, GPTBot, OAI-SearchBot,
  PerplexityBot, ClaudeBot, Google-Extended, Bingbot.
- LocalBusiness JSON-LD on homepage (search hygiene, not sold as AI lever).
- Internal linking between all service/content pages.

## AI visibility requirements (practice what we preach)
- Direct answer in the first 100 words of every money page.
- FAQ sections with real prospect questions on service pages.
- Named founder (Golnoosh, first name only, never the last name on the site)
  with credentials on about/team page.
- Treatment-specific pages that mirror what clinics ask AI:
  "What is AEO for aesthetic clinics?"
  "How do clinics get recommended by ChatGPT?"
  "AI visibility vs SEO for clinics"
- Content structured for extraction: clear paragraphs, no wall-of-text.

## File structure expectation
src/
  index.html          # homepage
  about.html          # founder, credentials, trust
  services.html       # the three tiers
  book.html           # redirect or embed Cal.com
  blog/               # future content hub
  assets/
    css/style.css
    js/main.js        # minimal, progressive enhancement only
    images/           # optimized WebP, <100KB each
public/
  robots.txt
  sitemap.xml
  favicon.ico
  _headers            # Cloudflare Pages headers
  _redirects           # Cloudflare Pages redirects