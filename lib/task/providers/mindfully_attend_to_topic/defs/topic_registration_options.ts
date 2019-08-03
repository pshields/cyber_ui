// A topic configuration record for use by the mindfully-attend-to-topic provider
// Used internally by the provider for recordkeeping, as well as externally
// by applications registering topics with the provider
export interface TopicRegistrationOptions {
  // The label for this topic
  label: string;
  // A version of the label appropriate for use in a sentence
  // If omitted, a lowercase version of the label will be used
  labelWhenUsedInASentence?: string;
  // The importance of this topic to the user, as a number in [0, 1]
  // The idea is that the higher the importance, the more frequently
  // the user will be shown a task corresponding to this topic
  importance: number;
}
