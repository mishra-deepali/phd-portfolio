import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const NewsPage = () => {
  const news = [
    {
      title: 'Research Grant Awarded',
      date: 'March 15, 2023',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=500&auto=format&fit=crop',
      content:
        'Excited to announce that our research team has been awarded a significant grant from the National Science Foundation to continue our work on machine learning applications in healthcare. This funding will support our efforts to develop novel algorithms for early disease detection.',
    },
    {
      title: 'New Publication in Nature',
      date: 'January 10, 2023',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop',
      content:
        'Our latest research paper on quantum computing applications has been accepted for publication in Nature. This work represents a major breakthrough in quantum algorithm development and has potential applications across multiple fields, from cryptography to drug discovery.',
    },
    {
      title: 'Invited Speaker at AI Conference',
      date: 'November 5, 2022',
      image: 'https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?q=80&w=500&auto=format&fit=crop',
      content:
        'I was honored to be an invited speaker at the International Conference on Artificial Intelligence last month. My talk focused on ethical considerations in AI development and received positive feedback from fellow researchers and industry professionals.',
    },
  ];

  const upcomingEvents = [
    {
      title: 'International Symposium on Quantum Computing',
      date: 'June 12-15, 2023',
      location: 'Zurich, Switzerland',
      description:
        'I will be presenting our latest findings on quantum algorithm optimization at this prestigious symposium. The event brings together leading researchers from around the world to discuss advances in quantum computing.',
    },
    {
      title: 'Workshop on Sustainable Technology',
      date: 'July 8, 2023',
      location: 'Virtual Event',
      description:
        'I will be hosting a workshop on sustainable technology development, focusing on energy-efficient computing methods and their applications in scientific research. Registration is open to all interested participants.',
    },
    {
      title: 'Guest Lecture Series: AI in Healthcare',
      date: 'August 3-4, 2023',
      location: 'University Medical Center',
      description:
        'As part of the summer lecture series, I will be giving two lectures on the applications of artificial intelligence in healthcare, covering both the technical aspects and ethical considerations.',
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">News & Events</h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          Stay updated with my latest research activities, publications, conferences, and upcoming events.
        </p>
      </motion.div>

      {/* Recent News Section */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold tracking-tight"
        >
          Recent News
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-medium text-muted-foreground">{item.date}</div>
                <h3 className="mb-4 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="flex-1 text-muted-foreground">{item.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold tracking-tight"
        >
          Upcoming Events
        </motion.h2>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold tracking-tight">{event.title}</h3>
              <div className="mb-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <FaCalendarAlt className="mr-2 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  {event.location}
                </div>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
