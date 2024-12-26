import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const navigate = useNavigate();
  const Icon = subject.icon;
  
  return (
    <button
      onClick={() => navigate(`/subjects/${subject.id}`)}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center w-full"
    >
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{subject.name}</h3>
      <p className="text-gray-600 text-sm">{subject.description}</p>
    </button>
  );
}