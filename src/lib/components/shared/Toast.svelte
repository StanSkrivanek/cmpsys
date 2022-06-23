<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  export let toastMessage = "Message";
  export let toastType = "success";
</script>

<div transition:fly={{ delay:200, duration: 800, easing: quintOut, y: -60}}
  class="toast__c {toastType} "
>
  <div class="toast-icn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
      ><title>Warning</title><path
        d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      /><path
        d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      /><path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z" /></svg
    >
  </div>
  <div class="toast-msg">
    {toastMessage}
  </div>
</div>

<style>
  .toast__c {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 12px;
    right: 50%;
    transform: translateX(50%);
    padding: 16px 32px;
    border-radius: 6px;
    background-color: #c2c1c1;
    font-family: monospace;
    font-size: 1.2rem;
    z-index: 100;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  .toast-icn {
    min-width: 24px;
    min-height: 24px;
    margin-right: 16px;
  }
  .toast-msg {
    color: #000;
  }
  .success {
    background-color: #66ff99;
  }
  .warning {
    background-color: #ffc107;
  }
  .error {
    background-color: #ff5a5f;
  }
  .error .toast-msg {
    color: #fff;
  }
  .info {
    background-color: #00bcd4;
    color: #fff;
  }
  .info .toast-msg {
    color: #fff;
  }



</style>
