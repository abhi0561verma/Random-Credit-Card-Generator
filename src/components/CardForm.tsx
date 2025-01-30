import React from 'react';
import { motion } from 'framer-motion';

import { Loader2 } from 'lucide-react';

interface CardFormProps {
  onSubmit: (data: { brand: string; country: string; format: string }) => void;
  isGenerating: boolean;
}

export const CardForm: React.FC<CardFormProps> = ({
  onSubmit,
  isGenerating,
}) => {
  const [brand, setBrand] = React.useState('visa');
  const [country, setCountry] = React.useState('us');
  const [format, setFormat] = React.useState('json');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ brand, country, format });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>ui components</div>

    </motion.form>
  );
};