import {CyberUiDemoThingSchema} from '../thing/schema';


// This is an early-stage exploration of storing demo data as a list of static records.
export const CYBER_UI_DEMO_THINGS: CyberUiDemoThingSchema[] = [
  {
    label: "Condition",
    description: "In Cyber UI, the concept of a condition is essentially synonymous with that of a metric. One minor difference is that conditions are sometimes assumed to take on one of two possible values: 'met', or 'unmet', while metrics do not have this connotation.",
    characterizations: [
      "concept"
    ]
  },
  {
    label: "Metric",
    characterizations: [
      "concept"
    ],
  }
];
