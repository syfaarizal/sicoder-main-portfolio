import DayPostLayout, { CodeBlock, QuoteBox } from '../DayPostLayout';

export default function Css1Page() {
  return (
    <DayPostLayout
      badge="CSS Module"
      title="CSS Fundamentals: The Basics You Must Know"
      date="May 10, 2025"
      tags="CSS, Fundamentals, Web Design"
      readingTime="8 min read"
      intro="CSS turns plain HTML into something people want to look at. These fundamentals—syntax, the cascade, and common properties—are the base camp for everything that comes later."
      githubUrl="#"
      prev={{ path: '/blog/html-modul/html2', title: 'HTML Intermediate: Structure & Semantics' }}
      next={{ path: '/blog/css-modul/css2', title: 'CSS Selectors & Specificity: Target Like a Sniper' }}
      related={[
        {
          path: '/blog/html-modul/html2',
          date: 'May 16, 2025',
          title: 'HTML Intermediate: Structure & Semantics',
          excerpt: 'Iframes, div vs span, and why semantic structure matters for real projects.',
          tags: ['HTML', 'Semantics', 'Structure'],
        },
        {
          path: '/blog/css-modul/css2',
          date: 'May 17, 2025',
          title: 'CSS Selectors & Specificity: Target Like a Sniper',
          excerpt: 'Why some rules win and others quietly lose—and how to aim your styles with confidence.',
          tags: ['CSS', 'Selectors', 'Specificity'],
        },
      ]}
      conclusion={
        <>
          <h3>Key takeaways</h3>
          <p>
            You can now read a stylesheet with confidence: declarations inside rules, inheritance vs. the cascade,
            and the handful of properties that cover most day-to-day styling. From here, selectors and layout are
            the natural next steps.
          </p>
        </>
      }
    >
      <QuoteBox>
        HTML answers &quot;what is this?&quot; CSS answers &quot;how should it feel on screen?&quot;
      </QuoteBox>

      <section>
        <h2>What CSS actually does</h2>
        <p>
          Browsers ship with default styles for headings, links, and lists. CSS lets you override those defaults,
          reuse a design system across many pages, and keep presentation separate from structure.
        </p>
      </section>

      <section>
        <h2>Rule anatomy</h2>
        <p>A style rule pairs a <b>selector</b> (what you target) with a <b>declaration block</b> (what you change).</p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`h1 {
  color: #1a1a2e;
  font-weight: 700;
  letter-spacing: -0.02em;
}`}
        </CodeBlock>
        <p>
          Each declaration is a <code>property: value;</code> pair. The trailing semicolon matters when you stack
          multiple declarations in one block.
        </p>
      </section>

      <section>
        <h2>Where styles live</h2>
        <ul>
          <li>
            <b>External stylesheet</b> — a <code>.css</code> file linked from HTML; best for caching and sharing
            styles across pages.
          </li>
          <li>
            <b>Embedded</b> — a <code>&lt;style&gt;</code> block in the document head; handy for small demos.
          </li>
          <li>
            <b>Inline</b> — a <code>style</code> attribute on an element; powerful but easy to overuse; prefer classes
            for maintainability.
          </li>
        </ul>
      </section>

      <section>
        <h2>Colors, type, and spacing</h2>
        <p>
          Most interfaces are built from a short list of ideas: readable typography, comfortable spacing, and a
          limited palette. Start with <code>color</code>, <code>font-family</code>, <code>font-size</code>,{' '}
          <code>line-height</code>, <code>margin</code>, and <code>padding</code> before reaching for exotic
          properties.
        </p>
      </section>
    </DayPostLayout>
  );
}
