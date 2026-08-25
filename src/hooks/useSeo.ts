import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

export function useSeo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [title, description]);
}
