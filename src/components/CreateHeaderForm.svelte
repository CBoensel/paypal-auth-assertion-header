<script>
  import {
    encodeThirdPartyAuth,
    decodeThirdPartyAuth,
  } from '../shared/utils.js';
  import Button from '../shared/Button.svelte';

  const fields = {
    clientID: '',
    merchantID: '',
    email: '',
    authAssertionHeader: '',
  };

  const submitEncodeHandler = () => {
    console.log('encode');
    const { clientID, merchantID, email } = fields;

    fields.authAssertionHeader = encodeThirdPartyAuth(
      clientID.trim(),
      merchantID.trim(),
      email.trim(),
    );
  };

  const submitDecodeHandler = () => {
    console.log('decode');

    const { authAssertionHeader } = fields;

    [fields.clientID, fields.merchantID, fields.email] =
      decodeThirdPartyAuth(authAssertionHeader);
  };
</script>

<form on:submit|preventDefault={submitEncodeHandler}>
  <div class="form-field">
    <label for="client-id">Client ID</label>
    <input type="text" id="client-id" bind:value={fields.clientID} />
  </div>
  <div class="form-field">
    <label for="merchant-id">Merchant ID</label>
    <input type="text" id="merchant-id" bind:value={fields.merchantID} />
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <input type="text" id="email" bind:value={fields.email} />
  </div>
  <Button>Encode</Button>
</form>

<form on:submit|preventDefault={submitDecodeHandler}>
  <div class="form-field">
    <label for="auth-assertion-header">PayPal Auth Assertion Header</label>
    <input
      type="text"
      id="auth-assertion-header"
      bind:value={fields.authAssertionHeader}
    />
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
</style>
