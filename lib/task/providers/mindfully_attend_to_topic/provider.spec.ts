import {CyberUiMindfullyAttendToTopicTaskProvider} from './provider';


const EXAMPLE_TOPIC_1 = {
  label: 'Example topic 1'
};


const EXAMPLE_TOPIC_2 = {
  label: 'Example topic 2'
};


const EXAMPLE_TOPICS_LIST = [
  EXAMPLE_TOPIC_1,
  EXAMPLE_TOPIC_2
];


describe('CyberUiMindfullyAttendToTopicTaskProvider', () => {

  let provider: CyberUiMindfullyAttendToTopicTaskProvider;

  beforeEach(() => {
    provider = new CyberUiMindfullyAttendToTopicTaskProvider();
  });

  it('instantiates successfully', () => {
    expect(provider instanceof CyberUiMindfullyAttendToTopicTaskProvider).toBe(true);
  });

  describe('when registering topics', () => {
    it('adds the topics to the list of topic registrations', () => {
      provider.registerTopics({
        topics: EXAMPLE_TOPICS_LIST
      });
      expect(provider.getTopicRegistrationsCount()).toEqual(2);
    });
  });

});
// TODO Add a test that the topic's `labelWhenUsedInASentence` is used in the produced task statement