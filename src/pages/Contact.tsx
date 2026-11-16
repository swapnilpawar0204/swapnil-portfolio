
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Copy,
  Check,
} from 'lucide-react';

import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { ResumeButton } from '../components/ResumeButton';
import { CONTACT } from '../data/portfolio';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent(formData.subject.trim());

    const body = encodeURIComponent(
      `${formData.message.trim()}\n\n` +
      `From: ${formData.name.trim()}\n` +
      `Email: ${formData.email.trim()}`
    );

    const mailtoLink =
      `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);

    // Opens the visitor's default email application.
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.address,
      color: 'text-purple-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ping contact.server"
        description="Establishing connection to communication endpoint"
      />

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6 md:p-8 shadow-card">

                <div className="mb-8">
                  <h2 className="font-mono text-2xl font-bold text-primary-500 mb-4">
                    Send a Message
                  </h2>

                  <div className="font-mono text-sm text-accent-500">
                    <span>$</span>
                    <span className="text-primary-500 ml-2">
                      cat message_template.txt
                    </span>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle
                      size={64}
                      className="text-primary-500 mx-auto mb-5"
                    />

                    <h3 className="font-mono text-xl font-semibold text-primary-500 mb-3">
                      Email Application Requested
                    </h3>

                    <Typewriter
                      text="Your email application should open with your message prepared. Please review and send it there."
                      delay={35}
                      className="text-neutral-400 text-sm"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="mt-6 text-sm font-mono text-primary-500 hover:text-primary-400 underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-sm text-accent-500 mb-2"
                      >
                        <span className="text-primary-500 mr-2">&gt;</span>
                        name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-bg-elevated border ${
                          errors.name ? 'border-red-500' : 'border-neutral-700'
                        } rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                        placeholder="Your full name"
                      />

                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-sm text-accent-500 mb-2"
                      >
                        <span className="text-primary-500 mr-2">&gt;</span>
                        email
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-bg-elevated border ${
                          errors.email ? 'border-red-500' : 'border-neutral-700'
                        } rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                        placeholder="your.email@example.com"
                      />

                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-mono text-sm text-accent-500 mb-2"
                      >
                        <span className="text-primary-500 mr-2">&gt;</span>
                        subject
                      </label>

                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full bg-bg-elevated border ${
                          errors.subject ? 'border-red-500' : 'border-neutral-700'
                        } rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                        placeholder="What's this about?"
                      />

                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-sm text-accent-500 mb-2"
                      >
                        <span className="text-primary-500 mr-2">&gt;</span>
                        message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full bg-bg-elevated border ${
                          errors.message ? 'border-red-500' : 'border-neutral-700'
                        } rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none`}
                        placeholder="Tell me about the role or opportunity..."
                      />

                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-lg font-mono font-bold text-lg transition-all duration-200 bg-primary-500 text-bg-surface hover:bg-primary-700 shadow-glow hover:shadow-card-hover"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        [ SEND VIA EMAIL ]
                      </span>
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      This form opens your email application. It does not send
                      messages directly from this website.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >

              {/* Contact Methods */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Contact Methods
                </h3>

                <div className="space-y-5">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;

                    return (
                      <div
                        key={method.label}
                        className="flex items-center gap-4"
                      >
                        <div className={`p-3 bg-bg-surface rounded-lg ${method.color}`}>
                          <IconComponent size={20} />
                        </div>

                        <div className="min-w-0">
                          <div className="font-medium text-neutral-200">
                            {method.label}
                          </div>

                          <div className="text-sm text-neutral-400 break-words">
                            {method.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Copy email */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-primary-500 hover:text-primary-400 transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Email copied!' : 'Copy email address'}
                </button>
              </div>

              {/* Availability */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Availability Status
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse mt-1 shrink-0" />

                    <span className="font-mono text-sm text-neutral-200">
                      Open to entry-level Cloud / DevOps / SRE roles
                    </span>
                  </div>

                  <div className="text-sm text-neutral-400 space-y-2">
                    <p>Based in Pune, Maharashtra — open to relocation.</p>
                    <p>Time zone: IST (UTC+5:30)</p>
                  </div>
                </div>
              </div>

              {/* Resume */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Resume
                </h3>

                <ResumeButton
                  variant="primary"
                  className="w-full"
                />
              </div>

              {/* Social Links */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Connect With Me
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;

                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-4 bg-bg-surface rounded-lg text-neutral-400 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card`}
                      >
                        <IconComponent size={24} className="mb-2" />
                        <span className="text-xs font-mono">
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer message */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="text-accent-500 mb-4">
              $ echo "Thank you for visiting!"
            </div>

            <div className="space-y-2 text-neutral-200">
              <p>
                I'm always happy to talk about entry-level cloud and DevOps opportunities.
              </p>

              <p className="text-primary-500">
                Looking forward to hearing from you.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-700 text-sm text-neutral-400">
              <div className="flex items-center justify-center gap-2">
                <ExternalLink size={16} />
                <span>Connection established. Awaiting your message...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
