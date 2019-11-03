import {CyberUiDemoThingSchema} from '../thing/schema';


// This is an early-stage exploration of storing demo data as a list of static records
//
// For consistency and ease of locating items within the list, it is currently sorted
// lexicographically by each thing's 'label' property.
//
// TODO Allow for the formatting of monospaced terms within a thing's `description` property
// For example, the terms 'met' or 'unmet' should be monospaced when referenced as symbols
// rather than colloquially.
export const CYBER_UI_DEMO_THINGS: CyberUiDemoThingSchema[] = [
  {
    label: "Condition",
    description: "In Cyber UI, the concept of a condition is essentially synonymous with that of a metric. One minor difference is that conditions are sometimes assumed to take on one of two possible values: 'met', or 'unmet', while metrics do not have this connotation.",
    characterizations: [
      "concept"
    ],
  },
  {
    label: "Goal",
    description: "A goal is a specification of a desired state of the world, defined in such a way that it can eventually be judged as 'met' or 'unmet'. One commonly practiced goal-setting convention entails specifying goals in such a way that their outcomes are immutable once reached. However, since this convention is not universally adhered to, Cyber UI does not currently enforce it.",
    characterizations: [
      "concept"
    ],
  },
  {
    label: "Metric",
    description: `A metric is a description of a data series of defined meaning and shape. For example, “Number of things in the CYBER_UI_DEMO_THINGS list” could be considered a metric, with shape being a 1-dimensional vector, and data series consisting of the value of the metric at various points in time.`,
    characterizations: [
      "concept"
    ],
  },
  {
    label: "Objective",
    description: `An objective is a specification of something to be optimized for. It is similar in some ways to a goal, but an objective's outcome need not be binary. An objective can be thought of as describing a direction or gradient upon which progress is desired. For example, “Maximize the user's free time” might better be considered an objective rather than a goal, since it describes a dimension on which progress is desired, rather than a concrete outcome.`,
    characterizations: [
      "concept"
    ],
    tags: [
      "optimization"
    ],
  }
];
