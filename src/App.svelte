<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreateHeaderForm from "./components/CreateHeaderForm.svelte";

  export let title;
</script>

<Header />
<main>
  <h1>{title}</h1>
  <p>Lorem ipsum...</p>

  <CreateHeaderForm />
</main>
<Footer />

<style>
  main {
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
