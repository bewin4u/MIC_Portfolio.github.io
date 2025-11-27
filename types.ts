import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  id: string; // for scrolling anchor
  title: string;
  role?: string;
  description: string;
  tags: string[];
  metrics: string[];
}

export interface PhilosophyItem {
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface WritingItem {
  title: string;
  platform: string;
  description: string;
  link?: string;
}

export interface SkillItem {
  category: string;
  skills: string[];
}