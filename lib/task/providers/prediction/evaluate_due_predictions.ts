import {Prediction} from '../../../prediction/interfaces/prediction';
import {Task} from '../../interfaces/task';


// A task provider which provides tasks for evaluating predictions which have come due
// IN PROGRESS
export class EvaluateDuePredictionsTaskProvider {

  static getDuePredictions(predictions: Prediction[]): Prediction[] {
    const now = Date.now();  // gets the current time in ms
    return predictions.filter(prediction => prediction.due < now);
  }

  static getEvaluationTasksFromDuePredictions(duePredictions: Prediction[], limit?: number) {
    const result: Task[] = [];
    limit = limit || duePredictions.length;
    for (let i = 0; i < limit; i++) {
      const prediction = duePredictions[i];
      result.push({
        label: EvaluateDuePredictionsTaskProvider.getTaskNameFromPredictionLabel(prediction.label)
      });
    }
    return result;
  }

  // Utility method for getting the evaluation task's name from the prediction's label
  static getTaskNameFromPredictionLabel(predictionLabel: string) {
    return `Evaluate due prediction: ${predictionLabel}`;
  }

}
