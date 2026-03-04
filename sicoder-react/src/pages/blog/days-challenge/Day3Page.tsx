import DayPostLayout from '../DayPostLayout';

// TODO: Add full content for Day 3
export default function Day3Page() {
  return (
    <DayPostLayout
      badge="Challenge Day 3"
      title="Day 3 Challenge"
      date="Coming Soon"
      tags="JavaScript"
      readingTime="5 min read"
      intro="Day 3 of the JavaScript challenge."
      githubUrl="https://github.com/syfaarizal"
      prev={{ path: '/blog/days-challenge/day2', title: 'Day 2' }}
      conclusion={<><h3>Key Takeaways</h3><p>Content coming soon.</p></>}
    >
      <section>
        <p>Content for Day 3 is coming soon!</p>
      </section>
    </DayPostLayout>
  );
}
