import DayPostLayout, { CodeBlock, QuoteBox } from '../DayPostLayout';

export default function Css1Page() {
  return (
    <DayPostLayout
      badge="CSS Module"
      title="CSS Basics: Styling the Web"
      date="May 17, 2025"
      tags="CSS, Web Design, Styling"
      readingTime="7 min read"
      intro="CSS is what transforms plain HTML into beautiful, visually appealing websites. Learn the fundamentals of styling web pages with colors, fonts, and layouts."
      githubUrl="#"
      prev={{ path: '/blog/html-modul/html2', title: 'HTML Intermediate: Structure & Semantics' }}
      next={{ path: '/blog/css-modul/css2', title: 'CSS Styling: Beyond the Basics' }}
      related={[
        {
          path: '/blog/html-modul/html2',
          date: 'May 16, 2025',
          title: 'HTML Intermediate: Structure & Semantics',
          excerpt: 'Learning about iframes, div vs span, and the importance of semantic HTML structure.',
          tags: ['HTML', 'Web Development', 'Semantics'],
        },
        {
          path: '/blog/css-modul/css2',
          date: 'May 19, 2025',
          title: 'CSS Styling: Beyond the Basics',
          excerpt: 'Master text styling, box model, backgrounds, and display properties.',
          tags: ['CSS', 'Web Design', 'Styling'],
        },
      ]}
      conclusion={
        <>
          <h3>Key Takeaways</h3>
          <ul>
            <li>CSS = Outfit for HTML</li>
            <li>Can be written: inline, internal, external</li>
            <li>Selectors: tag, class <code>.</code>, id <code>#</code></li>
            <li>Properties: control colors, fonts, sizes, positions</li>
            <li>External CSS = Most recommended way!</li>
          </ul>
        </>
      }
    >
      <QuoteBox>
        &quot;HTML alone is like plain rice. CSS is what makes it tasty, aesthetic, and worthy of display.&quot;
      </QuoteBox>

      <section>
        <h2>What is CSS?</h2>
        <p>
          CSS (Cascading Style Sheets) is a styling language used to control the appearance of HTML elements. If
          HTML is the skeleton, CSS is the outfit.
        </p>
        <h3>What can CSS do?</h3>
        <ul>
          <li>Colors, font sizes and types</li>
          <li>Spacing between elements</li>
          <li>Layout positioning</li>
          <li>Hover effects, animations, and more</li>
        </ul>
      </section>

      <section>
        <h2>How to Use CSS in HTML</h2>
        <h3>1) Inline CSS</h3>
        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<p style="color: blue; font-size: 20px;">Hello CSS!</p>`}
        </CodeBlock>
        <h3>2) Internal CSS</h3>
        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<head>
  <style>
    p { color: green; }
  </style>
</head>`}
        </CodeBlock>
        <h3>3) External CSS (Best Practice)</h3>
        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<!-- HTML -->
<link rel="stylesheet" href="style.css">`}
        </CodeBlock>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`/* style.css */
p {
  color: purple;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>CSS Selectors</h2>
        <p>Selectors are how you tell CSS what part should be styled.</p>
        <ul>
          <li>Tag selector: <code>p {'{}'}</code></li>
          <li>Class selector: <code>.title {'{}'}</code></li>
          <li>ID selector: <code>#hero {'{}'}</code></li>
        </ul>
      </section>

      <section>
        <h2>Properties &amp; Values</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`selector {
  property: value;
}`}
        </CodeBlock>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`h1 {
  color: red;
  font-size: 36px;
  text-align: center;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>CSS Comments</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`/* This is a comment */
h1 {
  color: pink;
}`}
        </CodeBlock>
      </section>
    </DayPostLayout>
  );
}
