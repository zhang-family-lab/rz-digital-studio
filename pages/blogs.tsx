import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
  const filenames = fs.readdirSync(blogsDirectory);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: filename.replace('.md', ''),
      ...data,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

export default function Blogs({ blogs }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Head>
        <title>Blogs - RZ Digital Studio</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-slate-500 mb-4">{blog.excerpt}</p>
            <p className="text-sm text-slate-400 mb-4">{blog.date}</p>
            <Link href={`/blogs/${blog.id}`} className="text-indigo-600 hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}