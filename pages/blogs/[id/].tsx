import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
  const filenames = fs.readdirSync(blogsDirectory);

  const paths = filenames.map((filename) => ({
    params: { id: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
  const filePath = path.join(blogsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      blog: {
        id: params.id,
        ...data,
        contentHtml,
      },
    },
  };
}

export default function BlogPost({ blog }) {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>{blog.title} - RZ Digital Studio</title>
      </Head>
      <Link href="/blogs" className="text-indigo-600 hover:underline mb-4 inline-block">← Back to Blogs</Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-slate-500 mb-6">{blog.date}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
    </div>
  );
}