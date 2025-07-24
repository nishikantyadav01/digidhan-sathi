import React, { useState } from 'react';

interface CSRModalProps {
  onClose: () => void;
  onSubmit: (event: { title: string; organizer: string; location: string; description: string }) => void;
}

const CSRModal: React.FC<CSRModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && organizer && location && description) {
      onSubmit({ title, organizer, location, description });
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create CSR Event</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <input className="w-full border p-2 rounded" placeholder="Organizer" value={organizer} onChange={e => setOrganizer(e.target.value)} />
          <input className="w-full border p-2 rounded" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
          <textarea className="w-full border p-2 rounded" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
          <div className="flex justify-end gap-2">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CSRModal;
