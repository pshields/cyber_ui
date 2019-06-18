import {ActiveTimeBoxesSnapshot} from './defs/active_time_boxes_snapshot';
import {StartTimeBoxResponse} from './defs/start_time_box_response';

import {CyberUiTimeBoxService} from './service';


describe('CyberUiTimeBoxService', () => {
  let service: CyberUiTimeBoxService;

  beforeEach(() => {
    service = new CyberUiTimeBoxService();
  });

  describe('#startTimeBox', () => {
    it('returns the id of the newly-created time box', () => {
      let resp = service.startTimeBox({duration: 5000});
      expect(typeof resp.timeBoxId).toEqual('number');
    });
  });

  describe('#getActiveTimeBoxes', () => {
    describe('when a time box starts', () => {
      let response: StartTimeBoxResponse;
      let snapshots: ActiveTimeBoxesSnapshot[] = [];
      beforeEach(() => {
        snapshots = [];
        response = service.startTimeBox({duration: 5000});
        service.getActiveTimeBoxes().subscribe(snapshot => snapshots.push(snapshot));
      });
      it('emits a new snapshot containing the box', () => {
        expect(snapshots.length).toEqual(1);
        expect(snapshots[0].boxes.length).toEqual(1);
        expect(snapshots[0].boxes[0].id).toEqual(response.timeBoxId);
      })
    });
    // TODO When a timebox ends, it emits a new snapshot with the box removed
  })

  describe('when there are multiple timeboxes active', () => {
    // TODO
  });
});

