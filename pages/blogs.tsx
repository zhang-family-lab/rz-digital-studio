import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');

  if (!fs.existsSync(blogsDirectory)) {
    return {
      props: {
        blogs: [],
      },
    };
  }

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

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
}

export default function Blogs({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-white border-b border-slate-100 pt-16 pb-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Insights & Resources
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                   Expert advice on college admissions, digital branding, and how to build a portfolio that gets you noticed by Ivy League admissions officers.
                </p>
            </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <Head>
            <title>Blogs - RZ Digital Studio</title>
          </Head>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wider">
                    Strategy
                  </div>
                  <Link href={`/blogs/${blog.id}`} className="block">
                     <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {blog.title}
                     </h2>
                  </Link>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                            {blog.author ? blog.author.charAt(0) : 'R'}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-900">{blog.author || 'RZ Digital Studio'}</span>
                            <span className="text-xs text-slate-500">{blog.date}</span>
                        </div>
                    </div>
                    <Link href={`/blogs/${blog.id}`} className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center">
                        Read Article 
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}