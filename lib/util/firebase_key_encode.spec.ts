import {firebaseKeyEncode} from './firebase_key_encode';


describe('firebaseKeyEncode', () => {
  it("encodes everything it's supposed to", () => {
    expect(firebaseKeyEncode("/.$[]#!*~")).toEqual("!2F!2E!24!5B!5D!23!21!2A!7E");
  });
});
