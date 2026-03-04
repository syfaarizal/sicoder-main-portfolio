import DayPostLayout from '../DayPostLayout';

// TODO: Add full content for Day 6
export default function Day6Page() {
  return (
    <DayPostLayout
      badge="Challenge Day 6"
      title="Day 6 Challenge"
      date="Coming Soon"
      tags="JavaScript"
      readingTime="5 min read"
      intro="Day 6 of the JavaScript challenge."
      githubUrl="https://github.com/syfaarizal"
      prev={{ path: '/blog/days-challenge/day5', title: 'Day 5' }}
      conclusion={<><h3>Key Takeaways</h3><p>Content coming soon.</p></>}
    >
      <section>
        <p>Content for Day 6 is coming soon!</p>
      </section>
    </DayPostLayout>
  );
}
