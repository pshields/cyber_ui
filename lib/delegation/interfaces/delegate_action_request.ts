// The relevant details captured by the UI when the user initates a delegate action
export interface CyberUiDelegateActionRequest {
  // The ID of the user initiating the request
  userId?: string;
  // The ID of the target of the delegation request (or 'auto' if no target specified)
  targetId?: string;
}
