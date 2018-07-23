import {EvaluateDuePredictionsTaskProvider} from './evaluate_due_predictions';


const TEST_PREDICTION_LABEL = `Which SP500 company's market capitalization will exceed $2T first?`;


describe('EvaluateDuePredictionTaskProvider', () => {
  describe('getTaskNameFromPredictionLabel', () => {
    it('describes it as an evaluation task', () => {
      const taskLabel = EvaluateDuePredictionsTaskProvider.getTaskNameFromPredictionLabel(TEST_PREDICTION_LABEL);
      expect(taskLabel.startsWith('Evaluate due prediction')).toBe(true);
    });
    it('includes the prediction\'s label', () => {
      const taskLabel = EvaluateDuePredictionsTaskProvider.getTaskNameFromPredictionLabel(TEST_PREDICTION_LABEL);
      expect(taskLabel.indexOf(TEST_PREDICTION_LABEL)).toBeGreaterThan(-1);
    });
  });
});
