import DayPostLayout from '../DayPostLayout';

// TODO: Add full content for Day 2
export default function Day2Page() {
  return (
    <DayPostLayout
      badge="Challenge Day 2"
      title="Day 2 Challenge"
      date="Coming Soon"
      tags="JavaScript"
      readingTime="5 min read"
      intro="Day 2 of the JavaScript challenge."
      githubUrl="https://github.com/syfaarizal"
      prev={{ path: '/blog/days-challenge/day1', title: 'Day 1' }}
      conclusion={<><h3>Key Takeaways</h3><p>Content coming soon.</p></>}
    >
      <section>
        <p>Content for Day 2 is coming soon!</p>
      </section>
    </DayPostLayout>
  );
}
