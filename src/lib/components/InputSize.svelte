<script>
  import { ps8, ps10, ps0, psRem } from "$lib/helpers";
  import { pointSys } from "$lib/stores/store";
  import { sizesStore } from "$lib/stores/store";

  let showAlert = false;
  let charCodeNum = null;

  $: if ($pointSys.pointSystem === "1") {
    $sizesStore = ps8;
  } else if ($pointSys.pointSystem === "2") {
    $sizesStore = ps10;
  } else {
    $sizesStore = ps0;
  }

  function isNumber(evt) {
    charCodeNum = evt.key;
    if (
      charCodeNum == "," ||
      charCodeNum == "Backspace" ||
      charCodeNum == "ArrowUp" ||
      charCodeNum == "ArrowDown" ||
      charCodeNum == "ArrowRight" ||
      charCodeNum == "ArrowLeft" ||
      charCodeNum == "Enter" ||
      charCodeNum < 48 ||
      charCodeNum > 57 ||
      charCodeNum > 95 ||
      charCodeNum < 106
    ) {
      showAlert = false;
    } else {
      showAlert = true;
    }
  }
</script>

<div class="container">
  <div class="input-component">
    <p class="input-heading">Custom sizes</p>
    <div class="input__c">
      <div class="form-group">
        <span
          class="btn-select {$sizesStore.length == 0
            ? 'disabled'
            : 'selected'} {showAlert ? 'bg-alert' : ''}">sizes</span
        >
        <input
          class="form-field"
          type="text"
          name="paddingPfx"
          bind:value={$sizesStore}
          on:keyup={isNumber}
        />
      </div>
    </div>
    <div class="input-heading danger">
      <p>{showAlert ? `[ ${charCodeNum} ] is not a number` : ""}</p>
    </div>
  </div>
</div>

<style>
  .container {
    gap: 16px;
  }
  .input-component {
    position: relative;
  }
  .input__c {
    font-family: "Open Sans", sans-serif;
    display: flex;
  }
  .form-field {
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 15px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: var(--col-text-sec);
    border: 1px solid var(--col-bg-gray);
    background: var(--col-white);
    transition: border 0.3s ease;
  }
  .form-field::-moz-placeholder {
    color: var(--col-text-placeholder);
  }
  .form-field:-ms-input-placeholder {
    color: var(--col-text-placeholder);
  }
  .form-field::placeholder {
    color: var(--col-text-placeholder);
  }
  .form-field:focus {
    outline: none;
    border-color: var(--col-active);
  }
  .form-group {
    position: relative;
    display: flex;
    width: 100%;
  }
  .form-group > span,
  .form-group .form-field {
    white-space: nowrap;
    display: block;
  }
  .form-group > span:not(:first-child):not(:last-child),
  .form-group .form-field:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  .form-group > span:first-child,
  .form-group .form-field:first-child {
    border-radius: 6px 0 0 6px;
  }
  .form-group > span:last-child,
  .form-group .form-field:last-child {
    border-radius: 0 6px 6px 0;
  }
  .form-group > span:not(:first-child),
  .form-group .form-field:not(:first-child) {
    margin-left: -1px;
  }
  .form-group .form-field {
    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .form-group > span {
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: var(--col-text-sec);
    background: var(--col-bg-sec);
    border: 1px solid var(--col-bg-gray);
    transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  }
  .form-group:focus-within > span {
    border-color: var(--col-active);
  }

  .btn-select {
    text-transform: uppercase;
  }

  .form-group .selected {
    color: var(--col-white);
    background: var(--col-active);
  }
  .input-heading {
    font-family: "Montserrat", "sans-serif";
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
    line-height: 0;
  }

  .danger {
    position: absolute;
    bottom: -24px;
    left: 64px;
    color: var(--col-danger);
    font-size: 0.8rem;
  }
  .bg-alert {
    background: var(--col-danger) !important;
  }
</style>
