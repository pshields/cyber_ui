export interface CyberUiFirestoreBackedModelSaveOptions {
  // The collection to save this model in
  // If specified here, overrides the model's `collectionId` property
  collectionId?: string;
}


export interface CyberUiFirestoreBackedModelDeleteOptions {
  // Should the deletion be confirmed with the user? (default: true)
  confirm?: boolean;
}