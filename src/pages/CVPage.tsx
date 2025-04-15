import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaBook, FaUsers } from 'react-icons/fa';

const CVPage = () => {
  const educationData = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2015 - 2019',
      description: 'Dissertation: "Advanced Machine Learning Techniques for Scientific Discovery"',
      advisor: 'Advisor: Prof. Jane Smith',
    },
    {
      degree: 'M.S. in Computer Science',
      institution: 'Massachusetts Institute of Technology',
      location: 'Cambridge, MA',
      period: '2013 - 2015',
      description: 'Specialization in Artificial Intelligence and Machine Learning',
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2009 - 2013',
      description: 'Minor in Mathematics. Graduated with Honors.',
    },
  ];

  const experienceData = [
    {
      position: 'Assistant Professor',
      institution: 'University of Research',
      location: 'Research City',
      period: '2019 - Present',
      description:
        'Leading research in machine learning and computational biology. Teaching graduate and undergraduate courses in artificial intelligence and data structures.',
    },
    {
      position: 'Research Intern',
      institution: 'Tech Research Lab',
      location: 'Innovation Valley',
      period: 'Summer 2018',
      description:
        'Developed novel algorithms for quantum computing applications, resulting in a publication in a top-tier conference.',
    },
    {
      position: 'Graduate Research Assistant',
      institution: 'Stanford AI Lab',
      location: 'Stanford, CA',
      period: '2015 - 2019',
      description:
        'Conducted research on deep learning approaches for scientific discovery, collaborated with interdisciplinary teams on multiple projects.',
    },
  ];

  const publicationsData = [
    'Scholar, A., Johnson, B., & Smith, C. (2023). "Machine Learning Approaches for Predicting Protein Structure." Journal of Computational Biology, 45(3), 234-248.',
    'Scholar, A., & Williams, D. (2022). "Quantum Computing Applications in Optimization Problems." International Conference on Quantum Computing.',
    'Brown, E., Scholar, A., & Lee, F. (2022). "Sustainable Urban Planning: A Data-Driven Approach." Journal of Sustainable Development, 12(2), 89-105.',
  ];

  const awardsData = [
    {
      title: 'Outstanding Young Researcher Award',
      organization: 'Association for Computing Machinery (ACM)',
      year: '2022',
    },
    {
      title: 'Best Paper Award',
      organization: 'International Conference on Machine Learning',
      year: '2020',
    },
    {
      title: 'Doctoral Fellowship',
      organization: 'National Science Foundation',
      year: '2015-2019',
    },
  ];

  const skillsData = [
    'Programming Languages: Python, R, MATLAB, C++, JavaScript',
    'Machine Learning: Deep Learning, Reinforcement Learning, Computer Vision, Natural Language Processing',
    'Data Analysis: Statistical Analysis, Data Visualization, Big Data Processing',
    'Tools & Frameworks: TensorFlow, PyTorch, Scikit-learn, CUDA',
    'Domain Expertise: Computational Biology, Quantum Computing, Sustainable Technology',
  ];

  // URL for CV download
  const cvDownloadUrl = 'https://example.com/cv.pdf';

  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Curriculum Vitae</h1>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={cvDownloadUrl}
            download="Scholar_CV.pdf"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <FaDownload className="mr-2" />
            Download Full CV
          </a>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="mb-2 text-center text-sm font-medium">Scan to download CV</p>
            <QRCodeSVG value={cvDownloadUrl} size={100} />
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-10"
        >
          {/* Education Section */}
          <section>
            <div className="mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-xl text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="space-y-6">
              {educationData.map((item) => (
                <div key={item.degree} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold">{item.degree}</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-2 text-muted-foreground">
                    {item.institution}, {item.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {item.advisor && <p className="mt-1 text-sm text-muted-foreground">{item.advisor}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="mb-6 flex items-center">
              <FaBriefcase className="mr-3 text-xl text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            </div>
            <div className="space-y-6">
              {experienceData.map((item) => (
                <div key={item.position} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold">{item.position}</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-2 text-muted-foreground">
                    {item.institution}, {item.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Publications */}
          <section>
            <div className="mb-6 flex items-center">
              <FaBook className="mr-3 text-xl text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">Selected Publications</h2>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <ul className="list-inside space-y-4 text-sm text-muted-foreground">
                {publicationsData.map((pub, index) => (
                  <li key={`publication-${index}`} className="list-disc pl-2">
                    {pub}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right">
                <a href="/publications" className="text-sm font-medium text-primary hover:underline">
                  View all publications →
                </a>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Awards and Honors */}
          <section>
            <div className="mb-4 flex items-center">
              <FaAward className="mr-3 text-lg text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Awards & Honors</h2>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <ul className="space-y-3">
                {awardsData.map((award) => (
                  <li key={award.title} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="text-sm font-medium">{award.title}</div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{award.organization}</span>
                      <span>{award.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="mb-4 flex items-center">
              <FaUsers className="mr-3 text-lg text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Skills</h2>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {skillsData.map((skill, index) => (
                  <li key={`skill-${index}`} className="list-disc pl-4">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Additional Info */}
          <section className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="mb-3 text-xl font-bold tracking-tight">Additional Information</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Languages:</span> English (Native), Spanish (Fluent), French (Intermediate)
              </p>
              <p>
                <span className="font-medium">Professional Memberships:</span> IEEE, ACM, AAAS
              </p>
              <p>
                <span className="font-medium">Reviewer:</span> ICML, NeurIPS, ICLR, Nature Machine Intelligence
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CVPage;
