// Interface for savable models as far as Cyber UI is concerned
export interface CyberUiSavableModel {
  save(options?: any): Promise<void>;
}