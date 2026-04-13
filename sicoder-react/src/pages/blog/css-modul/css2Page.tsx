import DayPostLayout, { CodeBlock, HighlightBox } from '../DayPostLayout';

export default function Css2Page() {
  return (
    <DayPostLayout
      badge="CSS Module"
      title="CSS Styling: Beyond the Basics"
      date="May 19, 2025"
      tags="CSS, Web Design, Styling"
      readingTime="8 min read"
      intro="Take your CSS skills further by mastering text styling, the box model, backgrounds, and display properties to create visually appealing websites."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css1', title: 'CSS Basics: Styling the Web' }}
      next={{ path: '/blog/css-modul/css3', title: 'CSS Layout: Positioning and Modern Techniques' }}
      related={[
        {
          path: '/blog/css-modul/css1',
          date: 'May 17, 2025',
          title: 'CSS Basics: Styling the Web',
          excerpt: 'Learn the fundamentals of styling web pages with colors, fonts, and layouts.',
          tags: ['CSS', 'Web Design', 'Styling'],
        },
        {
          path: '/blog/css-modul/css3',
          date: 'May 22, 2025',
          title: 'CSS Layout: Positioning and Modern Techniques',
          excerpt: 'Master modern layout techniques with CSS Flexbox and Grid systems.',
          tags: ['CSS', 'Layout', 'Flexbox', 'Grid'],
        },
      ]}
      conclusion={
        <>
          <h3>Key Takeaways</h3>
          <ul>
            <li>Can style text so it&apos;s not stiff</li>
            <li>Understand box model and spacing management</li>
            <li>Play with background, border, and shadow for aesthetics</li>
            <li>Know block vs inline vs inline-block differences</li>
          </ul>
        </>
      }
    >
      <section>
        <h2>Text Styling (So It&apos;s Not Flat)</h2>
        <p>Text styling properties include:</p>
        <ul>
          <li><code>color</code>, <code>font-size</code>, <code>font-family</code></li>
          <li><code>font-weight</code>, <code>text-align</code>, <code>line-height</code></li>
          <li><code>letter-spacing</code>, <code>text-transform</code></li>
        </ul>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`p {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: #333;
  text-align: justify;
  line-height: 1.8;
  text-transform: capitalize;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Box Model: Understanding HTML&apos;s Box World</h2>
        <p>All HTML elements are boxes: content, padding, border, and margin.</p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  margin: 40px auto;
  border: 2px solid #ff4d4d;
  background-color: #fff0f5;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Width &amp; Height</h2>
        <ul>
          <li><code>width</code> for element width</li>
          <li><code>height</code> for element height</li>
          <li>Common units: <code>px</code>, <code>%</code>, <code>vw</code>, <code>vh</code></li>
        </ul>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.card {
  width: 80%;
  height: auto;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Background Styling</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`body {
  background-color: #f0f0f0;
  background-image: url('bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Border, Radius, and Shadow</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  border: 3px dashed #ff69b4;
  border-radius: 12px;
}

.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Block vs Inline vs Inline-block</h2>
        <p>
          <code>block</code> takes full width, <code>inline</code> only content width, and{' '}
          <code>inline-block</code> stays inline but accepts width/height.
        </p>
        <HighlightBox>
          <p>Use <code>display: inline-block</code> when you need an inline element with custom dimensions.</p>
        </HighlightBox>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`span {
  display: inline-block;
  width: 100px;
  height: 100px;
}`}
        </CodeBlock>
      </section>
    </DayPostLayout>
  );
}
