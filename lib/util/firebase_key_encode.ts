import {encode} from 'firebase-key';


// Extends the `encode` function from firebase-key to also encode '*' and '~',
// which Firestore prohibits in field paths
export function firebaseKeyEncode(key: string) {
  return encode(key)
    .replace(/[\*~]/g, m => `!${m.charCodeAt(0).toString(16).toUpperCase()}`);
}
