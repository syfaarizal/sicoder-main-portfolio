import DayPostLayout, { CodeBlock, HighlightBox } from '../DayPostLayout';

export default function Css2Page() {
  return (
    <DayPostLayout
      badge="CSS Module"
      title="CSS Selectors & Specificity: Target Like a Sniper"
      date="May 17, 2025"
      tags="CSS, Selectors, Specificity"
      readingTime="9 min read"
      intro="When styles collide, the browser does not guess randomly—it follows a predictable scoring system. Selectors are how you aim; specificity is how the browser decides who wins."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css1', title: 'CSS Fundamentals: The Basics You Must Know' }}
      next={{ path: '/blog/css-modul/css3', title: 'CSS Layout: Positioning and Modern Techniques' }}
      related={[
        {
          path: '/blog/css-modul/css1',
          date: 'May 10, 2025',
          title: 'CSS Fundamentals: The Basics You Must Know',
          excerpt: 'Syntax, the cascade, and the everyday properties that cover most UI work.',
          tags: ['CSS', 'Fundamentals', 'Basics'],
        },
        {
          path: '/blog/css-modul/css3',
          date: 'May 22, 2025',
          title: 'CSS Layout: Positioning and Modern Techniques',
          excerpt: 'Flow, positioning, Flexbox, and Grid—the toolkit for real layouts.',
          tags: ['CSS', 'Layout', 'Flexbox'],
        },
      ]}
      conclusion={
        <>
          <h3>Key takeaways</h3>
          <p>
            Prefer low-specificity selectors and reuse classes. When debugging, trace the cascade: which rule matched,
            which file it came from, and whether <code>!important</code> is masking a deeper issue.
          </p>
        </>
      }
    >
      <section>
        <h2>Selector families</h2>
        <p>
          You can target elements by type (<code>p</code>), by class (<code>.card</code>), by id (<code>#hero</code>),
          by state (<code>a:hover</code>), and by structure (<code>article h2</code>). Combinators such as{' '}
          <code>&gt;</code> (child), <code>+</code> (adjacent sibling), and <code>~</code> (general sibling) narrow the
          match without extra markup.
        </p>
      </section>

      <section>
        <h2>Specificity in one breath</h2>
        <p>
          The browser scores inline styles highest, then ids, then classes/attributes/pseudo-classes, then elements and
          pseudo-elements. When two declarations compete, the higher score wins; equal scores defer to source order
          (last one wins).
        </p>
        <HighlightBox>
          <p>
            If you find yourself chaining five classes to beat another rule, step back: flatten the structure or
            split components instead of fighting specificity wars.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2>Practical example</h2>
        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.btn { color: #222; }
.btn.primary { color: #fff; }
#checkout .btn { color: #0a7; }`}
        </CodeBlock>
        <p>
          The last selector includes an id, so it can override <code>.btn.primary</code> even if the class rule appears
          later—unless the class rule is marked <code>!important</code> or carries higher specificity in a more targeted
          way. Predictable beats clever.
        </p>
      </section>
    </DayPostLayout>
  );
}
