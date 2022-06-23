<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import PointSystem from "$lib/components/PointSystem.svelte";
  import Form from "$lib/components/Form.svelte";
  import InputSize from "$lib/components/InputSize.svelte";
  import Visual from "$lib/components/Visual.svelte";
  import Toast from "$lib/components/shared/Toast.svelte";
  import { toastdata } from "$lib/stores/store.js";
 
  $: toastMessage = $toastdata.message;
  $: toastType = $toastdata.type;
  $: toastIsHidden = $toastdata.isHidden;

</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Open+Sans:wght@300;400&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="/global.css" />
</svelte:head>

<div class="app container">
  {#if !toastIsHidden}
    <Toast {toastMessage} {toastType} />
  {/if}
  <Header />

  <main>
    <div class="f-wrapper">
      <PointSystem />
      <InputSize />
      <Visual />
    </div>
    <Form />
  </main>
  <Footer/>
</div>

<style>
  main {
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 24px;
  }
  .f-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
    flex-direction: column;
    justify-items: stretch;
  }
</style>
