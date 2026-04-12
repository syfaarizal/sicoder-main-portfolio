import DayPostLayout, { CodeBlock, HighlightBox } from '../DayPostLayout';

export default function Css4Page() {
  return (
    <DayPostLayout
      badge="Animations"
      title="CSS Advanced: Animations, Responsive Design & Best Practices"
      date="May 27, 2025"
      tags="CSS, Animations, Responsive, Best Practices"
      readingTime="10 min read"
      intro="Motion and responsiveness are where polish shows up: subtle transitions, thoughtful breakpoints, and units that scale with the user—not just the viewport."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css3', title: 'CSS Layout: Positioning and Modern Techniques' }}
      next={undefined}
      related={[
        {
          path: '/blog/css-modul/css3',
          date: 'May 22, 2025',
          title: 'CSS Layout: Positioning and Modern Techniques',
          excerpt: 'Flow, Flexbox, Grid, and when to avoid absolute positioning for whole layouts.',
          tags: ['CSS', 'Layout', 'Grid'],
        },
        {
          path: '/blog/css-modul/css1',
          date: 'May 10, 2025',
          title: 'CSS Fundamentals: The Basics You Must Know',
          excerpt: 'Refresh the fundamentals whenever specificity or cascade confusion creeps back in.',
          tags: ['CSS', 'Fundamentals', 'Basics'],
        },
      ]}
      conclusion={
        <>
          <h3>Key takeaways</h3>
          <p>
            Prefer transform and opacity for animation (they stay off the main layout thread). Pair motion with reduced
            motion preferences. For responsive type, combine fluid clamp ranges with max line lengths for readable
            paragraphs.
          </p>
        </>
      }
    >
      <section>
        <h2>Transitions vs. keyframes</h2>
        <p>
          <b>Transitions</b> interpolate between two states when a property changes—great for hovers and simple UI
          feedback. <b>Keyframes</b> describe a full timeline—better for loaders, staged reveals, or looping accents.
        </p>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.card {
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}`}
        </CodeBlock>
      </section>

      <section>
        <h2>Responsive units</h2>
        <p>
          Mix <code>rem</code> for component scale, <code>%</code> and <code>fr</code> for layout tracks, and{' '}
          <code>clamp()</code> when you want typography to breathe between minimum and maximum sizes without dozens of
          breakpoints.
        </p>
      </section>

      <section>
        <h2>Accessibility-aware motion</h2>
        <HighlightBox>
          <p>
            Respect <code>prefers-reduced-motion: reduce</code> by shortening or disabling nonessential animations.
            Critical feedback (like focus rings) should remain visible even when motion is reduced.
          </p>
        </HighlightBox>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
        </CodeBlock>
      </section>
    </DayPostLayout>
  );
}
