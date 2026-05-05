import { ElementType } from "react";
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  BarChart3, 
  Search, 
  FileText, 
  TrendingUp 
} from "lucide-react";

export type GemId = 
  | "university-regulations"
  | "phd-regulations"
  | "academics"
  | "phd-academics"
  | "lesson-plan"
  | "placements"
  | "reports"
  | "plagiarism"
  | "docs"
  | "forecast";

export interface Gem {
  id: GemId;
  title: string;
  description: string;
  icon: ElementType;
  color: string;
  gradient: string;
  prompt: string;
  externalUrl?: string;
}

export const GEMS: Gem[] = [
  {
    id: "university-regulations",
    title: "University Regulations",
    description: "Get instant answers about university rules, exam policies, and academic regulations.",
    icon: BookOpen,
    color: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600",
    prompt: "You are the Aditya University Regulations Expert. You provide precise, authoritative information about university rules, exam policies, academic regulations, and student conduct guidelines. Always cite potential official documents.",
  },
  {
    id: "phd-regulations",
    title: "PhD Regulations",
    description: "Specific guidelines for doctoral candidates, including admission, coursework, and thesis submission.",
    icon: GraduationCap,
    color: "text-purple-600",
    gradient: "from-purple-500 to-indigo-700",
    prompt: "You are the PhD Regulations Expert. You provide guidance on doctoral program requirements, including course work, comprehensive exams, research proposal submissions, and final thesis defense protocols.",
    externalUrl: "https://notebooklm.google.com/notebook/967261da-b442-434b-844a-87716e2724c6",
  },
  {
    id: "academics",
    title: "Academic Calendars",
    description: "Provides information about academic schedules, including semester timelines, exam schedules, holidays, and important academic events.",
    icon: GraduationCap,
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-purple-600",
    prompt: "You are the Ultimate Student Mentor. You help generate study notes, practice question banks, and exam preparation strategies. Your tone is supportive and instructional, breaking down complex topics into digestible points.",
    externalUrl: "https://notebooklm.google.com/notebook/9fafe78c-ce0b-4fc7-a72f-addf66c8cd0b",
  },
  {
    id: "phd-academics",
    title: "PhD Academic Calendars",
    description: "Important dates and timelines specifically for PhD scholars and research related activities.",
    icon: Calendar,
    color: "text-rose-600",
    gradient: "from-rose-500 to-red-700",
    prompt: "You are the PhD Academic Coordinator. You provide specific dates for PhD milestones: colloquium schedules, progress report deadlines, and thesis submission windows.",
    externalUrl: "https://notebooklm.google.com/notebook/1e54a02f-f201-4530-b3df-3232b0dc88d4",
  },
  {
    id: "lesson-plan",
    title: "Lesson Plan",
    description: "Generate structured weekly lesson plans based on your subject, syllabus, and timeframe.",
    icon: Calendar,
    color: "text-orange-600",
    gradient: "from-orange-400 to-red-500",
    prompt: "You are the Academic Curriculum Architect. Your specialty is creating detailed, pedagogically sound weekly lesson plans. You structure content by weeks, defining learning objectives, materials needed, and assessment methods for each session.",
  },
  {
    id: "placements",
    title: "Placements",
    description: "Build your resume, practice interview questions, and prepare for aptitude tests.",
    icon: Briefcase,
    color: "text-yellow-600",
    gradient: "from-yellow-400 to-orange-500",
    prompt: "You are the Career & Placement Coach. You help students build professional resumes, simulate technical and HR interview questions, and provide guidance for competitive aptitude tests. Focus on career readiness.",
  },
  {
    id: "reports",
    title: "Reports",
    description: "Analyze student performance, attendance data, and generate downloadable summaries.",
    icon: BarChart3,
    color: "text-blue-500",
    gradient: "from-blue-400 to-cyan-500",
    prompt: "You are the Data Insights Analyst. You help faculty analyze student performance metrics, attendance patterns, and generate professional summaries. Use a professional, data-driven tone.",
  },
  {
    id: "plagiarism",
    title: "Project Plagiarism",
    description: "Analyze project documents for similarity and ensure original content for submissions.",
    icon: Search,
    color: "text-amber-600",
    gradient: "from-amber-400 to-orange-600",
    prompt: "You are the Academic Integrity Specialist. You help students understand and avoid plagiarism. You provide advice on proper citation styles, original writing techniques, and academic honesty standards.",
  },
  {
    id: "docs",
    title: "Documents Generation",
    description: "Quickly generate certificates, letters, memos and other official university documents.",
    icon: FileText,
    color: "text-blue-700",
    gradient: "from-blue-600 to-blue-800",
    prompt: "You are the Administrative Document Specialist. You help draft official university communication including certificates, formal letters, memos, and notifications, ensuring they follow standard university formatting.",
  },
  {
    id: "forecast",
    title: "Semester Outcome Forecast",
    description: "Predict semester outcomes and get insights into academic performance trends.",
    icon: TrendingUp,
    color: "text-rose-600",
    gradient: "from-rose-400 to-pink-600",
    prompt: "You are the Performance Prediction Engine. Using historical performance trends, you help students project their semester outcomes and identify areas for academic improvement to reach their goals.",
  },
];
