import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" />,
      label: 'Email',
      value: 'scholar@example.edu',
      link: 'mailto:scholar@example.edu',
    },
    {
      icon: <FaUniversity className="text-primary" />,
      label: 'Office',
      value: 'Science Building, Room 305',
      link: undefined,
    },
    {
      icon: <FaMapMarkerAlt className="text-primary" />,
      label: 'Address',
      value: 'University of Research, Research City, RC 12345',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      link: 'https://github.com',
    },
    {
      icon: <FaTwitter size={24} />,
      label: 'Twitter',
      link: 'https://twitter.com',
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Me</h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          I'm always open to discussing research collaborations, speaking opportunities, or answering questions about my work.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-5 lg:gap-16">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 md:col-span-2"
        >
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start">
                  <div className="mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="font-medium">{info.label}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Connect With Me</h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-muted/50 px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Office Hours</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday & Wednesday</span>
                <span>10:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>2:00 PM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>By appointment</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Please email me in advance to confirm availability or to schedule an appointment outside of regular office hours.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-3"
        >
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Send Me a Message</h2>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg bg-primary/10 p-6 text-center"
              >
                <h3 className="mb-2 text-xl font-semibold text-primary">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for your message. I'll get back to you as soon as possible.</p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a subject</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Student Inquiry">Student Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your message"
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
