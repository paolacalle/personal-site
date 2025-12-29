import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to combine class names with Tailwind CSS merging
// Allows you to pass a list of class names and merges them intelligently
export const cn = (...inputs) => {
    return twMerge(clsx(...inputs));
}