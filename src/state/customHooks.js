import { useEffect, useState } from 'react';
import { fetchPerformers } from '../services/supabase.js';

export const usePerformers = () => {
  const [performers, setPerformers] = useState([]);
  useEffect(async () => {

    const res = await fetchPerformers();

    setPerformers(res);
  }, []);

  return { performers };
};