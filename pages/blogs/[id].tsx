import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
  const filePath = path.join(blogsDirectory, `${params?.id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      blog: {
        id: params?.id,
        ...data,
        contentHtml,
      },
    },
  };
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
  [key: string]: any;
}

export default function BlogPost({ blog }: { blog: BlogPost }) {

  return (
    <div>
      <SeoHead 
        title={`${blog.title} | RZ Digital Studio`}
        description={blog.excerpt || `Read ${blog.title} by ${blog.author || 'RZ Digital Studio'} - Insights on building an elite student portfolio.`}
        ogType="article"
      />
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/blogs" className="text-indigo-600 hover:underline mb-8 inline-block font-medium">← Back to Blogs</Link>
        <article>
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">{blog.title}</h1>
          <div className="flex items-center text-slate-500 mb-8 pb-8 border-b border-slate-100">
             <span className="font-medium mr-4">By {blog.author || 'RZ Digital Studio'}</span>
             <span>•</span>
             <span className="ml-4">{blog.date}</span>
          </div>
          <div className="prose prose-lg prose-indigo max-w-none" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
        </article>
      </div>
      <Footer />
    </div>
  );
}