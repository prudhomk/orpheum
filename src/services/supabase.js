export const fetchPerformers = async () => {
  // insert supabase interaction here
  const res = await fetch()
  const performers = await res.json();
  return performers;
}