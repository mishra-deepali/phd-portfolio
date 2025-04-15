import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const TeachingPage = () => {
  const courses = [
    {
      code: 'CS 404',
      title: 'Advanced Machine Learning',
      level: 'Graduate',
      term: 'Spring 2023',
      description:
        'This course covers advanced topics in machine learning, including deep learning architectures, reinforcement learning, and Bayesian methods. Students implement and evaluate state-of-the-art algorithms on real-world datasets.',
    },
    {
      code: 'CS 301',
      title: 'Data Structures and Algorithms',
      level: 'Undergraduate',
      term: 'Fall 2022',
      description:
        'A comprehensive introduction to fundamental data structures and algorithms. Topics include sorting algorithms, hash tables, trees, graphs, and algorithm analysis. Students apply these concepts through programming assignments and projects.',
    },
    {
      code: 'CS 210',
      title: 'Introduction to Artificial Intelligence',
      level: 'Undergraduate',
      term: 'Spring 2022',
      description:
        'This course introduces the basic principles and techniques of artificial intelligence. Topics include search algorithms, knowledge representation, reasoning under uncertainty, and machine learning fundamentals.',
    },
  ];

  const teachingPhilosophy = [
    {
      title: 'Student-Centered Learning',
      icon: <FaUsers />,
      description:
        'I believe in placing students at the center of the learning process. My teaching approach focuses on understanding individual learning styles and adapting methods to help each student succeed.',
    },
    {
      title: 'Practical Application',
      icon: <FaChalkboardTeacher />,
      description:
        'Connecting theoretical concepts to real-world applications is essential. I incorporate hands-on projects and case studies that challenge students to apply their knowledge to solve authentic problems.',
    },
    {
      title: 'Research Integration',
      icon: <FaBook />,
      description:
        'I integrate current research findings into my teaching to ensure students are exposed to cutting-edge developments in the field. This approach helps students understand the evolving nature of knowledge.',
    },
    {
      title: 'Mentorship',
      icon: <FaGraduationCap />,
      description:
        'Beyond classroom teaching, I am committed to mentoring students in their academic and professional development. I encourage students to pursue independent research and provide guidance on graduate school and career paths.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Teaching</h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          My approach to education combines theoretical foundations with practical applications, preparing students for
          both academic and industry challenges.
        </p>
      </motion.div>

      {/* Teaching Philosophy Section */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl font-bold tracking-tight"
        >
          Teaching Philosophy
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {teachingPhilosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mr-4 rounded-full bg-primary/10 p-3 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-3xl font-bold tracking-tight"
        >
          Courses Taught
        </motion.h2>

        <div className="space-y-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-lg border bg-card shadow-sm"
            >
              <div className="border-b p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">
                    {course.code}: {course.title}
                  </h3>
                  <div className="flex gap-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {course.level}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {course.term}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{course.description}</p>
                <div className="mt-4 flex gap-4">
                  <button className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Syllabus
                  </button>
                  <button className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Course Materials
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Mentoring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 rounded-lg border bg-card p-8 shadow-sm"
        >
          <h3 className="mb-4 text-2xl font-semibold">Student Mentoring</h3>
          <p className="mb-6 text-lg text-muted-foreground">
            In addition to formal classroom teaching, I am actively involved in mentoring students at various levels:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>PhD dissertation committees</li>
            <li>Master's thesis supervision</li>
            <li>Undergraduate research projects</li>
            <li>Career guidance and professional development</li>
          </ul>
          <p className="mt-6 text-lg text-muted-foreground">
            I am currently accepting new graduate students interested in [research areas]. Please contact me directly to discuss potential opportunities.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default TeachingPage;
