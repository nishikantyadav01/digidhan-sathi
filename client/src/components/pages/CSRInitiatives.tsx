import React, { useState } from 'react';
import CSRCard from './CSRCard';
import './csrPage.css';

interface CSREvent {
  id: number;
  title: string;
  organizer: string;
  location: string;
  description: string;
}

const CSRInitiatives: React.FC = () => {
  const [csrEvents, setCsrEvents] = useState<CSREvent[]>([
    {
      id: 1,
      title: 'CSR initiative by FMCG Company',
      organizer: 'Gram Vikas Trust',
      location: 'Solapur, Maharashtra',
      description: 'Training 100+ women in traditional weaving to help them earn sustainable incomes.',
    },
    {
      id: 2,
      title: 'Agropreneurship Bootcamp',
      organizer: 'AgriSakhi Foundation',
      location: 'Wardha, Maharashtra',
      description: 'Empowering women-led farms with financial literacy and sustainable techniques.',
    },
    {
      id: 3,
      title: 'Mobile Health Van CSR Drive',
      organizer: 'Heal Rural India',
      location: 'Amravati, Maharashtra',
      description: 'Providing basic medical checkups to 10+ villages through mobile health vans.',
    },
    {
      id: 4,
      title: 'Solar Skills for Women',
      organizer: 'SunUrja CSR',
      location: 'Latur, Maharashtra',
      description: 'Upskilling rural women in solar panel installation and maintenance.',
    },
    {
      id: 5,
      title: 'Eco-Friendly Packaging Unit',
      organizer: 'GreenRoots Foundation',
      location: 'Kolhapur, Maharashtra',
      description: 'Training women to produce biodegradable packaging for local markets.',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    organizer: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: CSREvent = {
      id: Date.now(),
      ...formData,
    };
    setCsrEvents((prev) => [newEvent, ...prev]);
    setFormData({ title: '', organizer: '', location: '', description: '' });
    setShowForm(false);
  };

  return (
    <div className="csr-bg py-5">
      <div className="csr-container">
        <div className="csr-header">
          <h2>CSR Initiatives</h2>
          <button className="create-btn" onClick={() => setShowForm(true)}>Create CSR Event</button>
        </div>

        <div className="csr-grid">
          {csrEvents.length > 0 ? (
            csrEvents.map((event) => <CSRCard key={event.id} {...event} />)
          ) : (
            <p>No CSR events found. Please create one.</p>
          )}
        </div>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Create CSR Event</h3>
              <form onSubmit={handleFormSubmit} className="csr-form">
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

                <label>Organizer</label>
                <input type="text" name="organizer" value={formData.organizer} onChange={handleInputChange} required />

                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleInputChange} required />

                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} required />

                <div className="form-buttons">
                  <button type="submit" className="create-btn">Submit</button>
                  <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CSRInitiatives;
