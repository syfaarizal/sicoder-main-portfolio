import DayPostLayout from '../DayPostLayout';

// TODO: Add full content for Day 5
export default function Day5Page() {
  return (
    <DayPostLayout
      badge="Challenge Day 5"
      title="Day 5 Challenge"
      date="Coming Soon"
      tags="JavaScript"
      readingTime="5 min read"
      intro="Day 5 of the JavaScript challenge."
      githubUrl="https://github.com/syfaarizal"
      prev={{ path: '/blog/days-challenge/day4', title: 'Day 4' }}
      conclusion={<><h3>Key Takeaways</h3><p>Content coming soon.</p></>}
    >
      <section>
        <p>Content for Day 5 is coming soon!</p>
      </section>
    </DayPostLayout>
  );
}
