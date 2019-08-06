export interface CyberUiTaskProviderRegistryGetTasksOptions {
  // The maximum duration in ms to return a result by
  // When the deadline is reached, the registry will return the tasks received so far
  // even if not all task providers have provided an initial response
  // The provided tasks will not change after the deadline has been reached, since
  // the task provider response observables are all canceled at that point
  deadline?: number;
  // The maximum number of tasks to return from each provider (default: no limit)
  limit?: number;
  // If `oneshot` set, the registry will only emit a single, final response,
  // either once the deadline is reached (if a deadline was specified) or once all provider
  // response observables have completed (if no deadline was specified or if this occurs
  // before the deadline is reached)
  oneshot?: boolean;
  // The IDs of the providers to get tasks from (default: all registered providers)
  taskProviders?: string[];
}
