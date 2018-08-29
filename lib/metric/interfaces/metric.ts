import {DataPoint} from './data_point';


export interface Metric<
    VALUE_T = {}
> {

  // User-visible label describing this metric
  // e.g. 'Inbox count', 'Tasks completed today', 'Random name'
  label: string;

  // List of data points associated with this metric
  // Whether `data` is present or not depends on the context
  // If present, `data` will contain one or more data points corresponding to this metric
  // It won't necessarily be an exhaustive list of all known data points for this metric
  // The content of `data` depends on the context in which this object was created
  // e.g. for display on a dashboard, only the latest data point might be provided
  data?: DataPoint<VALUE_T>[];

}
