// Import the Markdown-formatted guides at compile-time
import * as assistanceData from 'raw-loader!demo/capability_areas/assistance.md';
import * as gamificationData from 'raw-loader!demo/capability_areas/gamification.md';
import * as needManagementData from 'raw-loader!demo/capability_areas/need_management.md';
import * as taskManagementData from 'raw-loader!demo/capability_areas/task_management.md';


// A capability area for the Cyber UI project
export interface CyberUiCapabilityArea {
  // A unique string identifier for this capability area (used in URLs)
  id: string;
  // The human-readable label of this capability area
  label: string;
  // Markdown documentation associated with this capability area
  data?: typeof import("*.md");
}


export const CYBER_UI_CAPABILITY_AREAS: CyberUiCapabilityArea[] = [
  {
    label: 'Assistance',
    id: 'assistance',
    data: assistanceData,
  },
  {
    label: 'Gamification',
    id: 'gamification',
    data: gamificationData,
  },
  {
    label: 'Need management',
    id: 'need-management',
    data: needManagementData,
  },
  {
    label: 'Task management',
    id: 'task-management',
    data: taskManagementData,
  },
];