import DayPostLayout from '../DayPostLayout';

// TODO: Add full content for Day 4
export default function Day4Page() {
  return (
    <DayPostLayout
      badge="Challenge Day 4"
      title="Day 4 Challenge"
      date="Coming Soon"
      tags="JavaScript"
      readingTime="5 min read"
      intro="Day 4 of the JavaScript challenge."
      githubUrl="https://github.com/syfaarizal"
      prev={{ path: '/blog/days-challenge/day3', title: 'Day 3' }}
      conclusion={<><h3>Key Takeaways</h3><p>Content coming soon.</p></>}
    >
      <section>
        <p>Content for Day 4 is coming soon!</p>
      </section>
    </DayPostLayout>
  );
}
