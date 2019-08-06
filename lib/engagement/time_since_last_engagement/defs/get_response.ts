export interface CyberUiGetTimeSinceLastEngagementResponse {
  // The timestamp of the last engagement, or undefined if not found
  timestamp?: number;
  // The duration (in millisecond) since the last engagement, or undefined
  // Note that this value immediately starts to become stale after the response
  // is returned, since the true duration continues to increase
  duration?: number;
}
