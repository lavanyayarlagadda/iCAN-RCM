
import { ReactNode } from 'react';

export interface MenuChildItem {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface MenuItem {
  title: string;
  icon: ReactNode;
  children: MenuChildItem[];
}


import {
  WorkOutline as WorkOutlineIcon,
  Assignment as AssignmentIcon,
  ViewList as ViewListIcon,
  MonetizationOn as MonetizationOnIcon,
  Payment as PaymentIcon,
  Receipt as ReceiptIcon,
  BarChart as BarChartIcon,
  Dashboard as DashboardIcon,
  TrendingUp as TrendingUpIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  ReportProblem as ReportProblemIcon,
  Reviews as ReviewsIcon,
  FactCheck as FactCheckIcon,
  Search as SearchIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  ManageSearch as ManageSearchIcon,
} from '@mui/icons-material';



export const menuItems: MenuItem[] = [
  {
    title: 'Workflow & Execution',
    icon: <WorkOutlineIcon color="action" />,
    children: [
      { title: 'Tasks', path: '/tasks', icon: <AssignmentIcon fontSize="small" /> },
      { title: 'Workflows', path: '/workflows', icon: <ViewListIcon fontSize="small" /> },
    ],
  },
  {
    title: 'Financial Reconciliation',
    icon: <MonetizationOnIcon color="action" />,
    children: [
      { title: 'Payments', path: '/payments', icon: <PaymentIcon fontSize="small" /> },
      { title: 'Adjustments', path: '/adjustments', icon: <ReceiptIcon fontSize="small" /> },
    ],
  },
  {
    title: 'Analytics & Monitoring',
    icon: <BarChartIcon color="action" />,
    children: [
      { title: 'Dashboard', path: '/dashboard', icon: <DashboardIcon fontSize="small" /> },
      { title: 'Predictive KPI', path: '/predictive-kpi', icon: <TrendingUpIcon fontSize="small" /> },
      { title: 'AI Performance', path: '/ai-performance', icon: <PrecisionManufacturingIcon fontSize="small" /> },
    ],
  },
  {
    title: 'Discrepancy Mgmt',
    icon: <ReportProblemIcon color="action" />,
    children: [
      { title: 'Review', path: '/review', icon: <ReviewsIcon fontSize="small" /> },
      { title: 'Audit', path: '/audit', icon: <FactCheckIcon fontSize="small" /> },
    ],
  },
  {
    title: 'Eligibility & Discovery',
    icon: <SearchIcon color="action" />,
    children: [
      { title: 'Eligibility Check', path: '/eligibility-check', icon: <HealthAndSafetyIcon fontSize="small" /> },
      { title: 'Discovery Reports', path: '/discovery-reports', icon: <ManageSearchIcon fontSize="small" /> },
    ],
  },
];

