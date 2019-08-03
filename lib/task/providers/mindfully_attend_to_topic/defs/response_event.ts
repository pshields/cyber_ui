// Representation of a user selecting a response for a task provided by this provider
// TODO Generalize this across multiple providers
export interface ResponseEvent {
  // The action label selected by the user
  label: string;
}
