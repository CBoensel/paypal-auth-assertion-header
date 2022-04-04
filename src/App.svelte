<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreateHeaderForm from './components/CreateHeaderForm.svelte';
  import HeaderInfo from './components/HeaderInfo.svelte';

  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Header />
<main>
  <div>
    <h1>{title}</h1>

    <HeaderInfo />
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
</style>
