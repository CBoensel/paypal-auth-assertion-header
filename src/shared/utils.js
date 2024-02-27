import { encode, decode } from 'js-base64';

function encodeThirdPartyAuth(clientID, merchantID, email) {
  let authAssertionHeader = '';

  if (clientID && (merchantID || email)) {
    const auth1 = encode('{"alg":"none"}');
    const auth2 = merchantID
      ? encode(`{"iss":"${clientID}","payer_id":"${merchantID}"}`)
      : encode(`{"iss":"${clientID}","email":"${email}"}`);
    authAssertionHeader = `${auth1}.${auth2}.`;
  }

  return authAssertionHeader;
}

function decodeThirdPartyAuth(authAssertionHeader) {
  let clientID = '';
  let merchantID = '';
  let email = '';

  if (authAssertionHeader) {
    const auth2 = authAssertionHeader.split('.')[1];
    const decodedAuth2 = decode(auth2);
    // const [iss, payer_id] = decodedAuth2.split(',');
    // clientID = iss.replace('{"iss":', '').replaceAll('"', '');
    // merchantID = payer_id.replace('"payer_id":', '').replace('}', '').replaceAll('"', '');

    // support object where keys are inverted: example > "eyJhbGciOiJub25lIn0=.eyJwYXllcl9pZCI6IlVUSlRVS0JXQTlVUFkiLCJpc3MiOiJBWEJCWHN6SjFfRTFERGlvMHhsM3dkTFNqblA4RHVQQmdKNllWbzJKa09lVGZhSE4wYTdJQ0xUeEExaDR6eG43WkI3R216UFBfY3BGYjFUaCJ9."
    const parsedAuth2 = JSON.parse(decodedAuth2); // todo try catch
    clientID = parsedAuth2?.iss;
    merchantID = parsedAuth2?.payer_id;
    email = parsedAuth2?.email;
  }

  return [clientID, merchantID, email];
}

export { encodeThirdPartyAuth, decodeThirdPartyAuth };
