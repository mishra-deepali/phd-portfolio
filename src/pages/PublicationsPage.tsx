import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaLink, FaSearch } from 'react-icons/fa';

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const publications = [
    {
      title: 'Machine Learning Approaches for Predicting Protein Structure',
      authors: 'Scholar, A., Johnson, B., & Smith, C.',
      journal: 'Journal of Computational Biology',
      year: 2023,
      category: 'Journal Article',
      doi: 'https://doi.org/10.1000/journal.example.2023',
      abstract:
        'In this paper, we present a novel deep learning approach for predicting protein structures from amino acid sequences. Our method achieves state-of-the-art performance on benchmark datasets and provides insights into the relationship between protein sequence and structure.',
    },
    {
      title: 'Quantum Computing Applications in Optimization Problems',
      authors: 'Scholar, A., & Williams, D.',
      journal: 'International Conference on Quantum Computing',
      year: 2022,
      category: 'Conference Paper',
      doi: 'https://doi.org/10.1000/conf.example.2022',
      abstract:
        'We explore the application of quantum computing algorithms to solve complex optimization problems. Our results show significant speedup compared to classical algorithms for specific problem classes, suggesting potential benefits in industrial applications.',
    },
    {
      title: 'Sustainable Urban Planning: A Data-Driven Approach',
      authors: 'Brown, E., Scholar, A., & Lee, F.',
      journal: 'Journal of Sustainable Development',
      year: 2022,
      category: 'Journal Article',
      doi: 'https://doi.org/10.1000/journal.example.2022',
      abstract:
        'This paper presents a data-driven framework for sustainable urban planning. By analyzing various environmental, social, and economic factors, we develop models that can help city planners make more informed decisions toward sustainability goals.',
    },
    {
      title: 'Advances in Medical Image Analysis Using Deep Learning',
      authors: 'Scholar, A., Garcia, H., & Taylor, I.',
      journal: 'IEEE Transactions on Medical Imaging',
      year: 2021,
      category: 'Journal Article',
      doi: 'https://doi.org/10.1000/journal.example.2021',
      abstract:
        'We review recent advances in medical image analysis using deep learning techniques. The paper covers applications in radiology, pathology, and cardiology, highlighting both the technical innovations and clinical impacts of these approaches.',
    },
    {
      title: 'Book Chapter: Ethical Considerations in AI Research',
      authors: 'Scholar, A.',
      journal: 'Handbook of Artificial Intelligence Ethics',
      year: 2021,
      category: 'Book Chapter',
      doi: 'https://doi.org/10.1000/book.example.2021',
      abstract:
        'This book chapter examines the ethical considerations that arise in AI research. Topics include data privacy, algorithmic bias, transparency, and responsible innovation practices that researchers should consider when developing AI systems.',
    },
    {
      title: 'Energy-Efficient Computing for Scientific Applications',
      authors: 'Johnson, B., Scholar, A., & Rodriguez, J.',
      journal: 'Sustainable Computing Conference',
      year: 2020,
      category: 'Conference Paper',
      doi: 'https://doi.org/10.1000/conf.example.2020',
      abstract:
        'We present techniques for reducing energy consumption in high-performance computing environments used for scientific applications. Our approach combines hardware optimizations with algorithm improvements, resulting in significant energy savings without compromising computational performance.',
    },
  ];

  const categories = ['All', 'Journal Article', 'Conference Paper', 'Book Chapter'];

  const filteredPublications = publications.filter((publication) => {
    const matchesSearch = publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         publication.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         publication.authors.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || publication.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Publications</h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          A collection of my research publications, including journal articles, conference papers, and book chapters.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex flex-col gap-6 rounded-lg border bg-card p-6 shadow-sm sm:flex-row">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-muted-foreground" />
            </div>
            <input
              type="text"
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Search by title, author, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-col space-y-2 sm:w-64">
            <label htmlFor="category-filter" className="text-sm font-medium">
              Filter by Category
            </label>
            <select
              id="category-filter"
              className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Publications List */}
      <div className="space-y-8">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication, index) => (
            <motion.div
              key={`${publication.title}-${publication.year}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-xl font-semibold">{publication.title}</h2>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {publication.year}
                </span>
              </div>
              <p className="mb-3 text-muted-foreground">{publication.authors}</p>
              <p className="mb-4 font-medium">{publication.journal}</p>
              <p className="mb-4 text-sm text-muted-foreground">{publication.abstract}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <FaLink className="mr-2" />
                  DOI
                </a>
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <FaFilePdf className="mr-2" />
                  PDF
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="rounded-lg border bg-card p-8 text-center">
            <p className="text-lg font-medium">No publications found matching your criteria.</p>
            <p className="text-muted-foreground">Try adjusting your search terms or filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationsPage;
