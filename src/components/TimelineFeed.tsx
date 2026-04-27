import { TimelinePost } from '../types/game';

export const TimelineFeed = ({ posts }: { posts: TimelinePost[] }) => (
  <section className="panel timeline">
    <h3>Timeline Feed</h3>
    {posts.map((post) => (
      <article className="post" key={post.id}>
        <strong>{post.author}</strong>
        <p>{post.message}</p>
      </article>
    ))}
  </section>
);
