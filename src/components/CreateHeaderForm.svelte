<script>
  import { encode, decode } from 'js-base64';
  import Button from "../shared/Button.svelte";

  const fields = { clientID: "", merchantID: "", authAssertionHeader: "" };
  const errors = { clientID: "", merchantID: "", authAssertionHeader: "" }; // todo
  let valid = false; // todo

  function encodeThirdPartyAuth(clientID, merchantID) {
    let authAssertionHeader = ''

    if (clientID && merchantID) {
      const auth1 = encode('{"alg":"none"}');
      const auth2 = encode(`{"iss":${clientID},"payer_id":${merchantID}}`)
      authAssertionHeader = `${auth1}.${auth2}.`
    }

    return authAssertionHeader
  }
  
  function decodeThirdPartyAuth(authAssertionHeader) {
    let clientID = ''
    let merchantID = ''

    if (authAssertionHeader) {
      const auth2 = authAssertionHeader.split('.')[1];
      const decodedAuth2 = decode(auth2);  
      const [iss, payer_id] = decodedAuth2.split(',');
      clientID = iss.replace('{"iss":', '');
      merchantID = payer_id.replace('"payer_id":', '').replace('}', '');
    }

    return [ clientID, merchantID ]
  }
  
  const submitEncodeHandler = () => {
    console.log('encode');
    valid = true; 
    
    // TODO form validation
    // TODO error handling
    
    const { clientID, merchantID } = fields; 
    
    fields.authAssertionHeader = encodeThirdPartyAuth(clientID.trim(), merchantID.trim());
  };
    
  const submitDecodeHandler = () => {
    console.log('decode');
    valid = true; 
    
    // TODO form validation
    // TODO error handling

    const { authAssertionHeader } = fields; 
    
    [ fields.clientID, fields.merchantID ] = decodeThirdPartyAuth(authAssertionHeader);    
  };
</script>

<form on:submit|preventDefault={submitEncodeHandler}>
  <div class="form-field">
    <label for="client-id">Client ID</label>
    <input type="text" id="client-id" bind:value={fields.clientID} />
    <div class="error">{errors.clientID}</div>
  </div>
  <div class="form-field">
    <label for="merchant-id">Merchant ID</label>
    <input type="text" id="merchant-id" bind:value={fields.merchantID} />
    <div class="error">{errors.merchantID}</div>
  </div>
  <Button>Encode</Button>
</form>

<form on:submit|preventDefault={submitDecodeHandler}>
  <div class="form-field">
    <label for="auth-assertion-header">PayPal Auth Assertion Header</label>
    <input type="text" id="auth-assertion-header" bind:value={fields.authAssertionHeader} />
    <div class="error">{errors.authAssertionHeader}</div>
  </div>
  <Button type="secondary">Decode</Button>
</form>

<style>
  form {
    width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
