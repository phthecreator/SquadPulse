
export enum AppTab {
  HOME = 'HOME',
  REPORTS = 'REPORTS',
  TEAMS = 'TEAMS',
  ANALYTICS = 'ANALYTICS'
}

export interface WeeklyReport {
  id: string;
  date: string;
  revenue: number;
  profit: number;
  roi: number;
  tasksCompleted: number;
  highlights: string;
}

export interface BusinessMetrics {
  currentRevenue: number;
  currentProfit: number;
  currentROI: number;
  growthRate: number; // Percentual de crescimento esperado (ex: 0.1 para 10%)
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  trend: number[];
}

export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  prs: number;
  status: 'online' | 'busy' | 'offline';
}
