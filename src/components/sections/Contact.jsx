import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import SpeedLines from '../ui/SpeedLines';
import MangaPanel from '../ui/MangaPanel';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const contacts = [
    { icon: '📧', label: 'EMAIL', value: 'manvitha3626@gmail.com', href: 'mailto:manvitha3626@gmail.com' },
    { icon: '👔', label: 'LINKEDIN', value: '@manvitha-dungi', href: 'https://www.linkedin.com/in/manvitha-dungi-8a8040211/' },
    { icon: '🐙', label: 'GITHUB', value: '@ManvithaDungi', href: 'https://github.com/ManvithaDungi' },
    { icon: '📱', label: 'PHONE', value: '+91-7013702246', href: 'tel:+917013702246' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.03, transition: { duration: 1.2 } },
  };

  const onSubmit = (data) => {
    // Simulate form submission
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Section number bg text */}
      <motion.div
        className="contact-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        07
      </motion.div>

      {/* Rotated page-edge label */}
      <div className="contact-rotated-label" aria-hidden="true">
        SECTION_07 // ESTABLISH_CONNECTION
      </div>

      {/* Decorative accent panel — 連絡 top-right */}
      <MangaPanel variant="accent" className="contact-accent-badge">
        <div className="contact-badge-kanji">連絡</div>
        <div className="contact-badge-sub">ESTABLISH LINK</div>
      </MangaPanel>

      <div className="contact-container">
        <motion.div variants={itemVariants}>
          <SystemLabel text="SECTION_07 // ESTABLISH_CONNECTION" />
        </motion.div>

        {/* Heading with SpeedLines behind it */}
        <motion.div className="contact-heading-wrapper" variants={itemVariants}>
          <SpeedLines size={500} opacity={0.25} className="contact-speed-lines" />
          <h2 className="contact-heading">
            INITIATE CONTACT.
          </h2>
        </motion.div>

        <motion.p className="contact-subline" variants={itemVariants}>
          OPEN TO INTERNSHIPS, COLLABS, AND INTERESTING PROBLEMS.
        </motion.p>

        <motion.div className="contact-links" variants={containerVariants}>
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="contact-link"
              variants={itemVariants}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">{contact.label}</span>
              <span className="contact-value">{contact.value}</span>
              <span className="contact-arrow">→</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          variants={containerVariants}
        >
          <motion.div className="form-group" variants={itemVariants}>
            <label className="form-label">NAME</label>
            <input
              className="form-input"
              type="text"
              placeholder="YOUR NAME"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label className="form-label">EMAIL</label>
            <input
              className="form-input"
              type="email"
              placeholder="YOUR EMAIL"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
            />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label className="form-label">MESSAGE</label>
            <textarea
              className="form-textarea"
              placeholder="YOUR MESSAGE"
              rows="4"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className="form-error">{errors.message.message}</span>}
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            variants={itemVariants}
            whileHover={{ letterSpacing: '0.1em' }}
            whileTap={{ scale: 0.98 }}
          >
            TRANSMIT →
          </motion.button>

          {submitted && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              TRANSMISSION RECEIVED. // STANDING BY.
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
