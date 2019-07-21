import {CyberUiMindfullyAttendToTopicTaskProvider} from './provider';


describe('CyberUiMindfullyAttendToTopicTaskProvider', () => {

  let provider: CyberUiMindfullyAttendToTopicTaskProvider;

  beforeEach(() => {
    provider = new CyberUiMindfullyAttendToTopicTaskProvider();
  });

  it('instantiates successfully', () => {
    expect(provider instanceof CyberUiMindfullyAttendToTopicTaskProvider).toBe(true);
  });

  describe('when registering topics', () => {
    // TODO
  });

});
