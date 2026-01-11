import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Scholarship() {
  // Pre-filled email details
  const recipientEmail = "rzdigitalstudio2027@gmail.com";
  const subject = encodeURIComponent("🎓 Student Equity Scholarship Application: [Your Name]");
  const body = encodeURIComponent(`Hi RZ Digital Studio Team,

I would like to apply for the Student Equity Scholarship Program.

---
I. STUDENT INFORMATION
Name: 
School: 
Grade: 

---
II. PROJECT DETAILS
(Please briefly describe what you are building or hoping to showcase)


---
III. STATEMENT OF FINANCIAL NEED
(Please briefly explain your situation)


----------------------------------------
Sent from website referral
`);

  const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Head>
        <title>Student Equity Scholarship | RZ Digital Studio</title>
        <meta name="description" content="Scholarship programs for students from low-income families to build professional digital portfolios." />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Empowering Every Student, <span className="text-indigo-500">Regardless of Budget.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              At RZ Digital Studio, we believe financial barriers should never stand in the way of a student's ambition. 
              Our Student Equity Scholarship is designed to provide high-quality digital services to high schoolers from low-income backgrounds.
            </p>
          </div>
        </section>
        {/* Eligibility & Info */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Who is eligible?</h2>
            <div className="space-y-4 text-slate-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>Current high school students.</li>
                <li>Families facing financial hardship or qualifying for school lunch programs.</li>
                <li>Students with a clear passion for digital projects but limited resources.</li>
              </ul>
            </div>
          </div>
          {/* Application Guide (No Form) */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">How to Apply</h2>
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Prepare Your Info</h3>
                  <p className="text-slate-600 text-sm">To protect your data privacy, we do not store your details online. Please prepare a brief email with:</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-500 list-disc pl-4">
                    <li>Your <strong>Name</strong>, <strong>School</strong>, and <strong>Grade Level</strong>.</li>
                    <li>A brief description of the <strong>Project</strong> you want to build.</li>
                    <li>A short <strong>Statement of Need</strong> (how this grant helps you).</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-10">
                <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Send Email Application</h3>
                  <p className="text-slate-600 text-sm">Click the button below to open your email client with a pre-filled template.</p>
                </div>
              </div>
              <div className="text-center">
                <a 
                  href={mailtoLink}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-700 transition transform active:scale-95 shadow-lg text-lg w-full md:w-auto"
                >
                  <i className="fas fa-envelope"></i>
                  Draft Application Email
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  Button not working? Email us directly at <strong className="text-slate-600">rzdigitalstudio2027@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
