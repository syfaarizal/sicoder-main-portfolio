import DayPostLayout, { CodeBlock, QuoteBox } from '../DayPostLayout';

export default function Css3Page() {
  return (
    <DayPostLayout
      badge="Layout"
      title="CSS Layout: Positioning and Modern Techniques"
      date="May 22, 2025"
      tags="CSS, Layout, Flexbox, Grid"
      readingTime="10 min read"
      intro="Layout is where CSS stops feeling like decoration and starts feeling like engineering. Normal flow, positioning, Flexbox, and Grid each solve different problems—knowing when to reach for which tool saves hours."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css2', title: 'CSS Selectors & Specificity: Target Like a Sniper' }}
      next={{ path: '/blog/css-modul/css4', title: 'CSS Advanced: Animations, Responsive Design & Best Practices' }}
      related={[
        {
          path: '/blog/css-modul/css2',
          date: 'May 17, 2025',
          title: 'CSS Selectors & Specificity: Target Like a Sniper',
          excerpt: 'How browsers score competing rules and how to keep selectors maintainable.',
          tags: ['CSS', 'Selectors', 'Specificity'],
        },
        {
          path: '/blog/css-modul/css4',
          date: 'May 27, 2025',
          title: 'CSS Advanced: Animations, Responsive Design & Best Practices',
          excerpt: 'Motion, responsive units, and habits that keep stylesheets healthy at scale.',
          tags: ['CSS', 'Animations', 'Responsive'],
        },
      ]}
      conclusion={
        <>
          <h3>Key takeaways</h3>
          <p>
            Stay in normal flow until you have a reason to leave it. Use Flexbox for one-dimensional distribution,
            Grid for two-dimensional structure, and absolute positioning sparingly for overlays—not for whole pages.
          </p>
        </>
      }
    >
      <QuoteBox>
        Flexbox lines things up along an axis; Grid draws the map. Most dashboards need both.
      </QuoteBox>

      <section>
        <h2>Normal flow and the box model</h2>
        <p>
          Block elements stack vertically; inline elements sit in the text line. <code>width</code>,{' '}
          <code>height</code>, <code>padding</code>, <code>border</code>, and <code>margin</code> describe the box
          model. <code>box-sizing: border-box</code> keeps padding inside the declared width—almost always what you
          want for layout math.
        </p>
      </section>

      <section>
        <h2>Flexbox snapshot</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}`}
        </CodeBlock>
        <p>
          <code>gap</code> replaces many brittle margin hacks between items. Pair <code>flex-wrap: wrap</code> with
          sensible min widths when building responsive toolbars.
        </p>
      </section>

      <section>
        <h2>Grid snapshot</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}`}
        </CodeBlock>
        <p>
          <code>auto-fit</code> with <code>minmax</code> gives you responsive columns without media queries for every
          breakpoint—still fine-tune with queries when design needs it.
        </p>
      </section>
    </DayPostLayout>
  );
}
