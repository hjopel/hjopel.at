import { BlogPosts } from "app/components/posts";
import { MousePositionProvider } from "app/components/mouse";

export default function Page() {
  return (
    <MousePositionProvider>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-fade-in-down">
          Hi, I'm Jan
        </h1>
        <p className="mb-4">
          {`I'm a software engineer with a passion for building products and experimenting with 
          new technologies`}
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </MousePositionProvider>
  );
}
