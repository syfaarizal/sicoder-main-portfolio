import DayPostLayout, { CodeBlock, HighlightBox } from '../DayPostLayout';

export default function Css4Page() {
  return (
    <DayPostLayout
      badge="Animations"
      title="CSS Advanced: Animations, Responsive Design & Best Practices"
      date="May 27, 2025"
      tags="CSS, Animations, Responsive Design"
      readingTime="9 min read"
      intro="Master advanced CSS techniques including animations, transitions, responsive units, and professional styling best practices."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css3', title: 'CSS Layout: Positioning and Modern Techniques' }}
      next={undefined}
      related={[
        {
          path: '/blog/css-modul/css3',
          date: 'May 22, 2025',
          title: 'CSS Layout: Positioning and Modern Techniques',
          excerpt: 'Master modern layout techniques with CSS Flexbox and Grid systems.',
          tags: ['CSS', 'Layout', 'Flexbox', 'Grid'],
        },
        {
          path: '/blog/days-challenge/day1',
          date: 'June 5, 2025',
          title: 'Day 1: Print Name and Status',
          excerpt: 'Learn how to print your name and status using JavaScript template literals.',
          tags: ['JavaScript', 'Template Literals'],
        },
      ]}
      conclusion={
        <>
          <h3>CSS Recap Card 4</h3>
          <ul>
            <li>Know pseudo-class and pseudo-element for interactions and effects</li>
            <li>Can create hover effects and simple animations without JavaScript</li>
            <li>Familiar with units like px, rem, %, vw, and vh</li>
            <li>Responsive layout works with media queries</li>
            <li>Ready to style like a pro with best practices</li>
          </ul>
        </>
      }
    >
      <section>
        <h2>Pseudo-Class &amp; Pseudo-Element</h2>
        <p>
          Pseudo-classes (<code>:</code>) style elements based on state like <code>:hover</code>, <code>:focus</code>,{' '}
          and <code>:nth-child(2)</code>. Pseudo-elements (<code>::</code>) style parts of elements like{' '}
          <code>::before</code> and <code>::after</code>.
        </p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`button:hover {
  background-color: hotpink;
  color: white;
}

h1::after {
  content: " 🚀";
  color: orange;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Transitions &amp; Light Animations</h2>
        <h3>transition</h3>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  transition: all 0.3s ease;
}
.box:hover {
  transform: scale(1.1);
  background-color: #00f;
}`}
        </CodeBlock>
        <h3>animation with keyframes</h3>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.title {
  animation: fadeIn 1s ease-in;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Responsive Units</h2>
        <p>
          Popular units include <code>px</code>, <code>%</code>, <code>em</code>, <code>rem</code>,{' '}
          <code>vw</code>, and <code>vh</code>.
        </p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.container {
  width: 80vw;
  font-size: 1.2rem;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Responsive Design + Media Query</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@media (max-width: 600px) {
  h1 {
    font-size: 24px;
    text-align: center;
  }
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Styling Best Practices</h2>
        <HighlightBox>
          <ul>
            <li>Use classes and clear naming</li>
            <li>Reuse classes to avoid copy-paste styles</li>
            <li>Use CSS reset/normalize for cross-browser consistency</li>
            <li>Prefer external CSS for cleaner and scalable code</li>
          </ul>
        </HighlightBox>
      </section>
    </DayPostLayout>
  );
}
