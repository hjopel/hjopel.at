import { getBlogPosts } from './content/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://hjopel.at/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt
  }));
  // ['', '/blog', '/guestbook', '/uses', '/work']

  let routes = ['', '/blog'].map((route) => ({
    url: `https://hjopel.at${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogs];
}
