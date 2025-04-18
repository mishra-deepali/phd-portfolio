import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChartLine,
  FaBook,
  FaMicroscope,
  FaChalkboardTeacher,
} from "react-icons/fa";
import ProfileImage from "/images/profile-placeholder.jpg";
const HomePage = () => {
  const skills = [
    {
      title: "Data Analysis",
      icon: <FaChartLine className="h-8 w-8 text-primary" />,
      description:
        "Expertise in statistical analysis, data visualization, and research methodologies.",
    },
    {
      title: "Programming",
      icon: <FaLaptopCode className="h-8 w-8 text-primary" />,
      description: "Proficient in C++, core Java, Python.",
    },
    {
      title: "Academic Writing",
      icon: <FaBook className="h-8 w-8 text-primary" />,
      description:
        "Gaining experience in drafting research papers and grant proposals.",
    },

    {
      title: "Teaching",
      icon: <FaChalkboardTeacher className="h-8 w-8 text-primary" />,
      description:
        "Passionate about education with experience in course development and mentoring.",
    },
    {
      title: "Languages",
      icon: <FaChalkboardTeacher className="h-8 w-8 text-primary" />,
      description: "Hindi, English",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-foreground">Deepali Mishra</span>
              <span className="block text-primary">Research Scholar</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Moving Toward Advanced Medical Solutions Through AI, Vision, and
              Language Understanding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get in Touch
              </a>
              <a
                href="/cv"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-full border-4 border-primary shadow-xl">
              <img
                src={ProfileImage}
                alt="Deepali Mishra"
                className="h-64 w-64 object-cover sm:h-80 sm:w-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight">About Me</h2>
          <div className="space-y-4 text-lg">
            <p>
              Welcome to my academic portfolio! I am a passionate researcher
              currently pursuing a dual PhD in Data Science and Artificial
              Intelligence under the joint supervision of{" "}
              <a
                href="http://www.chaklam.com/"
                target="_blank"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                Dr. Chaklam Silpasuwanchai
              </a>{" "}
              at the{" "}
              <a
                href="https://ait.ac.th/"
                target="_blank"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                Asian Institute of Technology (AIT), Thailand,
              </a>{" "}
              and{" "}
              <a
                href="https://ashutosh-modi.github.io/"
                target="_blank"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                Dr. Ashutosh Modi
              </a>{" "}
              at the{" "}
              <a
                href="https://www.iitk.ac.in/"
                target="_blank"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                Indian Institute of Technology (IIT) Kanpur, India
              </a>{" "}
              .
            </p>
            <p>
              My research lies at the intersection of computer vision, natural
              language processing (NLP), multimodal learning, and medical
              imaging. I am passionate about developing AI systems that are not
              only technically sound but also usable, interpretable, and
              impactful in real clinical workflows.
            </p>
            <p>
              Currently, I am working on building AI-driven tools for medical
              imaging and trauma classification, integrating multimodal learning
              and expert medical knowledge. I collaborate closely with
              clinicians and radiologists to ensure that the models we develop
              are both relevant and practical for real-world use.
            </p>
            <p>
              Prior to starting my PhD, I served as a Guest Lecturer at{" "}
              <a
                href="https://ecc.ac.in/"
                target="_blank"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                Ewing Christian College, Allahabad, India
              </a>{" "}
              . During my tenure, I taught a range of multidisciplinary subjects
              including Image Processing, Statistics, Basic Electronics, and
              Computer Networking. This experience not only strengthened my
              foundational knowledge across various domains but also enhanced my
              ability to communicate complex technical concepts to diverse
              student groups.
            </p>
            <p>
              In addition to my research, I am committed to education and
              mentorship. I enjoy mentoring students, collaborating on
              interdisciplinary projects, and guiding learners on their academic
              journeys. Teaching has played a vital role in shaping my approach
              to research and fostering a deeper appreciation for human-centered
              technology.
            </p>
            <p>
              I am also deeply interested in science communication, academic
              writing, and bridging the gap between technology and society. My
              work is driven by a vision to create responsible AI that serves
              both clinicians and patients.
            </p>
            <p>
              I am always open to collaboration opportunities and discussions
              about potential research projects. Please feel free to reach out
              through my contact page.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  {skill.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
