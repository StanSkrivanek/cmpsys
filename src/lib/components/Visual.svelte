<script>
  import { borders } from "$lib/helpers";
  import { selectedInputId } from "$lib/stores/store.js";
  import { isVisualHidden } from "$lib/stores/store.js";

  let mElm = null;
  let pElm = null;

  $: borders($selectedInputId, mElm, pElm);

</script>

  <div class="container {$isVisualHidden ? "hidden" : ""}">
    <div class="graphic">
      <div class="margin__w" id="mFrame" bind:this={mElm}>
        <div class="m-wrap top">
          <span class="s-top">mt</span>
        </div>
        <div class="m-wrap right">
          <span class="s-right">mr</span>
        </div>
        <div class="m-wrap bottom ">
          <span class="s-bottom">mb</span>
        </div>
        <div class="m-wrap left">
          <span class="s-left">ml</span>
        </div>
        <div class="separator">
          <div class="padding__w" id="pFrame" bind:this={pElm}>
            <div class="p-wrap top">
              <span class="s-top">pt</span>
            </div>
            <div class="p-wrap right">
              <span class="s-right">pr</span>
            </div>
            <div class="p-wrap bottom">
              <span class="s-bottom">pb</span>
            </div>
            <div class="p-wrap left">
              <span class="s-left">pl</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


<style>
  :root {
    --border-size: 40px;
    --border-inactive: var(--col-bg-sec);
    --visual-width: 500px;
  }
  .container {
    flex: 1 1 50%;
    min-height: 100%;
    min-width: 300px;
  }
  .graphic {
    position: relative;
    border-radius: 6px;
    margin-bottom: 24px 16px;
    overflow: hidden;
  }
  .margin__w {
    position: relative;
    max-width: 100%;
    height: calc(var(--visual-width) / 2);
    background-color: #fff;
    border: var(--border-size) solid var(--border-inactive);
    font-family: monospace, sans-serif;
    color: var(--col-text-main);
  }
  .separator {
    height: 100%;
  }
  .padding__w {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: var(--border-size) solid var(--border-inactive);
    font-family: monospace, sans-serif;
  }
  .m-wrap,
  .p-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top {
    left: 0;
    top: calc(var(--border-size) - var(--border-size) * 2);
    height: var(--border-size);
  }
  .bottom {
    bottom: calc(0px - var(--border-size));
    height: var(--border-size);
  }
  .left {
    left: calc(0px - var(--border-size));
    width: var(--border-size);
  }
  .right {
    top: 0;
    right: calc(0px - var(--border-size));
    width: var(--border-size);
  }
  .hidden{
   display: none;
  }
</style>
