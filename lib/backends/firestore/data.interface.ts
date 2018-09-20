export interface CyberUiFirestoreBackedModelData {
  // The ID of this document in Firestore, if it exists
  id?: string;
  // The data objects saved to Firestore have string keys and arbitrary values
  [k: string]: any;
}
