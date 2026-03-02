import { useState, FormEvent } from 'react';

interface ContactSectionProps {
  showToast: (msg: string, type?: 'success' | 'error' | 'warning' | 'info') => void;
}

export default function ContactSection({ showToast }: ContactSectionProps) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      showToast("Message sent successfully! I'll get back to you soon.", 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      showToast('Oops! Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="section-card section-reveal">
      <div className="section-header">
        <div className="section-title">
          <span className="title-number">05</span>
          <h2>Let's <span className="highlight">Connect</span></h2>
        </div>
        <p className="section-subtitle">Have a project, idea, or just want to say hi? Reach me here</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-container">
          <form action="https://formsubmit.co/syifairgi@gmail.com" method="POST" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name"><i className="fas fa-user"></i><span>Your Name</span></label>
                <input
                  type="text" id="name" name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
                <div className="form-line"></div>
              </div>
              <div className="form-group">
                <label htmlFor="email"><i className="fas fa-envelope"></i><span>Email Address</span></label>
                <input
                  type="email" id="email" name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
                <div className="form-line"></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject"><i className="fas fa-tag"></i><span>Subject</span></label>
              <input
                type="text" id="subject" name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={e => handleChange('subject', e.target.value)}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <div className="error-message">{errors.subject}</div>}
              <div className="form-line"></div>
            </div>

            <div className="form-group">
              <label htmlFor="message"><i className="fas fa-comment-dots"></i><span>Your Message</span></label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={e => handleChange('message', e.target.value)}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <div className="error-message">{errors.message}</div>}
              <div className="form-line"></div>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? (
                <><i className="fas fa-spinner fa-spin"></i> Sending...</>
              ) : (
                <><span>Send Message</span><i className="fas fa-paper-plane"></i></>
              )}
            </button>
          </form>
        </div>

        <div className="contact-info-container">
          <div className="contact-quote">
            <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
            <p className="quote-text">Great things in business are never done by one person. They're done by a team of people.</p>
            <p className="quote-author">- Steve Jobs</p>
          </div>

          <div className="contact-details">
            {[
              { icon: 'fas fa-envelope', label: 'Email', value: 'syifairgi@gmail.com' },
              { icon: 'fas fa-phone', label: 'Phone', value: '+62 858-6486-4931' },
              { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Indonesia' },
            ].map(item => (
              <div key={item.label} className="contact-card animate-on-scroll">
                <div className="contact-icon"><i className={item.icon}></i></div>
                <div className="contact-content">
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/syifaarizal/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/syfaarizal" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/syfaarizal/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
