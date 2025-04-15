import { motion } from 'framer-motion';

const ResearchPage = () => {
  const researchAreas = [
    {
      title: 'Machine Learning for Scientific Discovery',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=500&auto=format&fit=crop',
      description:
        'Developing novel machine learning approaches to accelerate scientific discovery processes. This research focuses on creating interpretable models that can help scientists extract meaningful insights from complex datasets.',
    },
    {
      title: 'Computational Biology',
      image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=500&auto=format&fit=crop',
      description:
        'Applying computational methods to understand biological systems. My work in this area includes developing algorithms for protein structure prediction and analyzing genomic data to identify disease markers.',
    },
    {
      title: 'Sustainable Technology',
      image: 'https://images.unsplash.com/photo-1473893604213-3df9c15611c0?q=80&w=500&auto=format&fit=crop',
      description:
        'Researching technologies that promote environmental sustainability. This includes optimizing energy systems, developing materials with reduced environmental impact, and creating models for sustainable urban planning.',
    },
  ];

  const currentProjects = [
    {
      title: 'Deep Learning for Medical Imaging Analysis',
      status: 'Active',
      collaborators: 'University Medical Center, AI Research Institute',
      description:
        'Developing deep learning models to assist in the analysis of medical images for early disease detection. Our approach combines convolutional neural networks with attention mechanisms to improve diagnostic accuracy.',
    },
    {
      title: 'Quantum Computing Applications in Optimization',
      status: 'Active',
      collaborators: 'National Laboratory for Quantum Technology, Tech Industries',
      description:
        'Exploring how quantum computing can accelerate optimization problems relevant to scientific and industrial applications. Our research investigates quantum algorithms for complex scheduling and logistics challenges.',
    },
    {
      title: 'Climate Change Prediction Models',
      status: 'Planning Phase',
      collaborators: 'International Climate Research Center, Department of Environmental Science',
      description:
        'Developing improved climate models that incorporate recent advances in machine learning to provide more accurate predictions of climate change impacts at regional levels.',
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Research Areas</h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          My research spans multiple disciplines, combining theoretical foundations with practical applications
          to address complex challenges in science and technology.
        </p>
      </motion.div>

      {/* Research Areas Section */}
      <section className="mb-20">
        <div className="grid gap-12 md:gap-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid gap-8 ${
                index % 2 === 0 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr] md:flex-row-reverse'
              } items-center`}
            >
              <div className={index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}>
                <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">{area.title}</h2>
                <p className="text-lg text-muted-foreground">{area.description}</p>
              </div>
              <div className={`overflow-hidden rounded-lg ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}>
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Projects Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Current Projects</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of the active research projects I'm currently leading or participating in.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                <span className="font-medium">Collaborators:</span> {project.collaborators}
              </p>
              <p className="text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
