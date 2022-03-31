<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreateHeaderForm from "./components/CreateHeaderForm.svelte";

  export let title;
</script>

<Header />
<main>  
  <div>
    <h1>{title}</h1>
    
    <p>The basic formatting and encoding of the PayPal-Auth-Assertion-Header is:</p>
    
    <pre>
      <code>    
        const part1 = base64Encode('{'{'}"alg":"none"{'}'}');
        const part2 = base64Encode(`{'{'}"iss":${'{'}clientID{'}'},"payer_id":${'{'}merchantID{'}'}{'}'}`);
        
        console.log(`${'{'}part1{'}'}.${'{'}part2{'}'}.`)
      </code>
    </pre>
  </div>
  
  <CreateHeaderForm />
</main>
<Footer />

<style>

  main {
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
  h1 {
    margin-bottom: 40px;
  }
  
  div {
    text-align: center;
  }
  
  pre {
    text-align: left;
    margin-left: 160px; 
  }
</style>
