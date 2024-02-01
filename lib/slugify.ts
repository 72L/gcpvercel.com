import { ReactNode } from 'react';

export function slugify(str: ReactNode): string {
  return `${str}`
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove all non-word characters (excluding hyphens and spaces)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace consecutive hyphens with a single hyphen
    .trim(); // Remove leading/trailing spaces if any
}
