import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from "clsx";

export function CN(...inputs: ClassValue[]) {
  // Merge class names
  return twMerge(clsx(inputs));
}