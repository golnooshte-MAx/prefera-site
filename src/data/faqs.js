// Single source of truth for the FAQ accordion AND the FAQPage structured
// data in BaseLayout. Edit here; both update together.
export const faqs = [
  {
    q: "How do I get my clinic recommended by ChatGPT?",
    a: "AI assistants recommend clinics they keep meeting in sources they trust: review platforms, directories, local press, and community discussions. The work is building those branded mentions and reviews around your clinic, then structuring your own pages so assistants can read them. Citations correlate strongly with those off-site signals, so that is where we spend the effort.",
  },
  {
    q: "I rank well on Google. Doesn't AI already recommend me?",
    a: "Not necessarily. Ranking and citation overlap, but they are not the same thing. Assistants name only a handful of clinics per answer, far fewer than a results page, and they lean on reviews and mentions as much as rankings. Plenty of clinics rank on page one and are never named. That scarcity is exactly why a citation is worth having.",
  },
  {
    q: "How long until my clinic shows up in AI answers?",
    a: "First citations typically appear in 6 to 9 weeks. The sources assistants trust take time to accumulate: reviews, directory profiles, press mentions, community discussions. You see the exact prompts we track from day one, so progress is visible before the first citation lands.",
  },
  {
    q: "How do you measure AI visibility?",
    a: "We track a defined set of prompts your patients actually ask across ChatGPT, Perplexity, Gemini, and Google AI Overviews. Each month you get a visibility report: where your clinic was named, where it was not, and what changed. No black-box dashboards.",
  },
  {
    q: "Does schema markup get my clinic cited by AI?",
    a: "No. Schema is basic site hygiene and we set it up as part of good housekeeping, but there is no evidence it drives citations. Be wary of anyone selling it as the lever. What correlates with citations is off-site authority: being mentioned in the places assistants actually read.",
  },
  {
    q: "Do I need a new website?",
    a: "Almost never. We work with the site you have: clear treatment pages, readable structure, and content that answers the questions patients ask. A rebuild is the last resort, not the first move.",
  },
  {
    q: "Can you promise my clinic will be cited?",
    a: "No, and nobody honestly can. AI assistants change their answers and no one outside those companies controls them. What we commit to is the work: building the signals that correlate with citations, and reporting plainly on what moved. Month to month, so you can leave if we stop earning it.",
  },
  {
    q: "Which countries do you work with?",
    a: "Clinics across the UK, the EU, the US, and Canada. The work is remote by nature, and visibility in AI answers does not stop at borders. We work in English and Dutch.",
  },
  {
    q: "What does it cost?",
    a: "Three month-to-month tiers: Starter at EUR 490 per month, Growth at EUR 1,190, and Elite at EUR 2,500. Every engagement starts with a free AI Visibility Read, so you see where you stand before you spend anything. Cancel anytime with 30 days notice.",
  },
];

// Definitional Q&As rendered in the Answers section and mirrored into the
// FAQPage structured data. Written answer-first so AI assistants can lift
// them verbatim.
export const answerBlocks = [
  {
    q: "What is AEO (answer engine optimization)?",
    a: "AEO is the practice of making a business the answer AI assistants give. When someone asks ChatGPT, Perplexity, or Google AI Overviews for a recommendation, the assistant names a few businesses. AEO works on the sources those assistants draw from: reviews, directories, press, and content structured for direct answers.",
  },
  {
    q: "What is GEO (generative engine optimization)?",
    a: "GEO is a set of content tactics for appearing in AI-generated answers. In controlled testing by Princeton and Georgia Tech researchers, adding citations, quotations, and statistics to content increased its visibility in AI answers. In practice, GEO and AEO describe the same goal: being cited by the engines that generate answers.",
  },
  {
    q: "What is the difference between AI visibility and SEO?",
    a: "SEO earns a position in a list of search results. AI visibility earns a mention inside the answer itself. They overlap: AI assistants lean on sources that already rank and are widely cited, so strong SEO helps, but on its own it does not make an assistant recommend you by name.",
  },
  {
    q: "How long does it take to get cited by ChatGPT?",
    a: "First citations typically appear in 6 to 9 weeks. The timeline depends on how quickly trusted sources start mentioning the business: review platforms, directories, local press, and community discussions. No one can promise a specific result or date.",
  },
];
