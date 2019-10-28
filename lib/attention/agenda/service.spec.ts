import {TestBed, async} from '@angular/core/testing';

import {CyberUiAttentionalAgendaSnapshot} from './attentional_agenda_snapshot';

import {CyberUiAttentionalAgendaService} from './service';


const EXAMPLE_ITEM_1_LABEL = 'Example item 1';


describe('CyberUiAttentionalAgendaService', () => {

  let service: CyberUiAttentionalAgendaService;
  let agenda: CyberUiAttentionalAgendaSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CyberUiAttentionalAgendaService
      ]
    }).compileComponents();
    service = TestBed.get(CyberUiAttentionalAgendaService);
    service.state.subscribe(snapshot => agenda = snapshot);
  });

  it('instantiates', () => {
    expect(service instanceof CyberUiAttentionalAgendaService).toBe(true);
  });

  describe('when adding the first agenda item', () => {
    beforeEach(async(() => {
      service.addItemToAttentionalAgenda({
        label: EXAMPLE_ITEM_1_LABEL
      });
    }));

    it('emits a new agenda containing the new item', () => {
      expect(agenda.getMostRecentlyAddedItem().label).toBe(EXAMPLE_ITEM_1_LABEL);
    });
  });

});
