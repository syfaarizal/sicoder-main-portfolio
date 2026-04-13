import DayPostLayout, { CodeBlock, QuoteBox } from '../DayPostLayout';

export default function Css3Page() {
  return (
    <DayPostLayout
      badge="Layout"
      title="CSS Layout: Positioning and Modern Techniques"
      date="May 22, 2025"
      tags="CSS, Layout, Flexbox, Grid"
      readingTime="9 min read"
      intro="Master modern CSS layout techniques including positioning, Flexbox, Grid systems, and responsive design to create professional web layouts."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css2', title: 'CSS Selectors & Specificity: Target Like a Sniper' }}
      next={{ path: '/blog/css-modul/css4', title: 'CSS Advanced: Animations, Responsive Design & Best Practices' }}
      related={[
        {
          path: '/blog/css-modul/css2',
          date: 'May 17, 2025',
          title: 'CSS Selectors & Specificity: Target Like a Sniper',
          excerpt: 'Master text styling, box model, backgrounds, and display properties.',
          tags: ['CSS', 'Selectors', 'Specificity'],
        },
        {
          path: '/blog/css-modul/css4',
          date: 'May 27, 2025',
          title: 'CSS Advanced: Animations, Responsive Design & Best Practices',
          excerpt: 'Bring your websites to life with smooth animations and interactive transitions.',
          tags: ['CSS', 'Animations', 'Responsive Design'],
        },
      ]}
      conclusion={
        <>
          <h3>Key Takeaways</h3>
          <ul>
            <li>Know all <code>position</code> types and how to use them</li>
            <li>Can control layers with <code>z-index</code></li>
            <li>Flexbox makes layouts and centering easier</li>
            <li>CSS Grid handles complex row-column layouts</li>
            <li>Media queries make layouts responsive</li>
          </ul>
        </>
      }
    >
      <QuoteBox>
        &quot;Now that the design looks good, let&apos;s arrange the placement so elements don&apos;t go wild and step on each other.&quot;
      </QuoteBox>

      <section>
        <h2>Positioning: Keeping Elements in Place</h2>
        <p>
          CSS <code>position</code> controls how elements are placed on the page: <code>static</code>,{' '}
          <code>relative</code>, <code>absolute</code>, <code>fixed</code>, and <code>sticky</code>.
        </p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  position: relative;
  top: 20px;
  left: 30px;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>z-index: Who&apos;s On Top?</h2>
        <p>
          <code>z-index</code> controls stacking order on the z-axis. Higher value appears on top.
        </p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.card {
  position: absolute;
  z-index: 10;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Flexbox: Stress-Free Layouts &amp; Centering</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}`}
        </CodeBlock>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.flexbox {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>CSS Grid: For More Complex Layouts</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Responsive Layout: Start Here</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}
        </CodeBlock>
      </section>
    </DayPostLayout>
  );
}
