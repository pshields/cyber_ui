import {ActiveTimeboxesSnapshot} from './defs/active_timeboxes_snapshot';
import {StartTimeboxResponse} from './defs/start_timebox_response';

import {CyberUiTimeboxService} from './service';


describe('CyberUiTimeboxService', () => {
  let service: CyberUiTimeboxService;

  beforeEach(() => {
    service = new CyberUiTimeboxService();
  });

  describe('#startTimebox', () => {
    it('returns the id of the newly-created time box', () => {
      let resp = service.startTimebox({duration: 5000});
      expect(typeof resp.timeboxId).toEqual('number');
    });
  });

  describe('#getActiveTimeboxes', () => {
    describe('when a time box starts', () => {
      let response: StartTimeboxResponse;
      let snapshots: ActiveTimeboxesSnapshot[] = [];
      beforeEach(() => {
        snapshots = [];
        response = service.startTimebox({duration: 5000});
        service.getActiveTimeboxes().subscribe(snapshot => snapshots.push(snapshot));
      });
      it('emits a new snapshot containing the box', () => {
        expect(snapshots.length).toEqual(1);
        expect(snapshots[0].boxes.length).toEqual(1);
        expect(snapshots[0].boxes[0].id).toEqual(response.timeboxId);
      })
    });
    // TODO When a timebox ends, it emits a new snapshot with the box removed
  })

  describe('when there are multiple timeboxes active', () => {
    // TODO
  });
});

