// Interface for savable models as far as Cyber UI is concerned
export interface SavableModel {
  save(options?: any): Promise<void>;
}