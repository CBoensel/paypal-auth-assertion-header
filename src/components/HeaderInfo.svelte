<p>
  As described in the <a
    href="https://developer.paypal.com/docs/multiparty/issue-refund/#link-generatepaypalauthassertionheader#eyJhbGciOiJub25lIn0.eyJpc3MiOiJjbGllbnRfaWQiLCJlbWFpbCI6Im15LWVtYWlsQGV4YW1wbGUuY29tIn0."
    >Multiparty Payments Developer Docs</a
  >
</p>

<p>The basic formatting and encoding of the PayPal-Auth-Assertion-Header is:</p>

<pre>
  <code>
    const part1 = base64Encode('{'{'}"alg":"none"{'}'}');
    // if you identify a merchant through the `payer_id`
    let part2 = base64Encode(`{'{'}"iss":"${'{'}clientID{'}"'},"payer_id":"${'{'}merchantID{'}"'}{'}'}`);
    // or alternatively, if you refer to a merchant through his account email
    // @Note the changed name of the attribute
    part2 = base64Encode(`{'{'}"iss":"${'{'}clientID{'}"'},"email":"${'{'}merchantEmail{'}"'}{'}'}`);
    console.log(`${'{'}part1{'}'}.${'{'}part2{'}'}.`)
  </code>
</pre>

<style>
  pre {
    text-align: left;
    margin-left: 160px;
  }
</style>
