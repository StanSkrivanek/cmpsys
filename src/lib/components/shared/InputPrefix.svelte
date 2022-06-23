<script>
  // import '/static/global.css'
  import { prefixObjArr } from "$lib/stores/store.js";
  import { selectedInputId } from "$lib/stores/store.js";
  import { pfxPredefined, addCssProps } from "$lib/helpers";

  export let label = "label";
  export let sType = "spacing type";
  export let span = "span";
  export let showAlert = null;
  export let id = "";
  export let populate;
  export let clearData;
  export let negative;

  let pfxValue = "";
  let cssProps = null;
  let idx = 0;
  let x = null;

  $: allPfxArr = [];


  function getInputId() {
    $selectedInputId = id;
  }

  function createAndUpdateObj(e) {

    pfxValue = e.target.value;

    idx = id - 1;
    cssProps = addCssProps(idx);

    prefixObjArr[idx] = {
      id,
      sType,
      label,
      pfxValue,
      cssProps,
      clearData,
      negative,
    };
    // check object
    checkForPfxDuplicates($prefixObjArr);
    // update store
    $prefixObjArr = prefixObjArr;
  }

  function checkForPfxDuplicates(obj) {
    for (var objKey in obj) {
      let objPfxValue = obj[objKey]["pfxValue"];

      if (objPfxValue == "") {
        delete $prefixObjArr[objKey];
      }

      if (pfxValue == objPfxValue) {
        showAlert = true;
      }
      if (
        objPfxValue !== undefined &&
        allPfxArr.includes(objPfxValue) === false
      ) {
        allPfxArr.splice(objKey, 1, objPfxValue);
        showAlert = false;
      }
    }

  }

  $: if (populate === true) {
    idx = id - 1;
    pfxValue = pfxValue !== "" ? pfxValue : pfxPredefined[idx];
    showAlert = false;
    cssProps = addCssProps(idx);
    prefixObjArr[idx] = { id, sType, label, cssProps, pfxValue, negative };
    $prefixObjArr = prefixObjArr;
  }

  $: if (clearData === true) {
    idx = id - 1;
    pfxValue = "";
    showAlert = false;
    allPfxArr = [];
    delete prefixObjArr[idx];
    $prefixObjArr = prefixObjArr;
    clearData = false;
  }
</script>

<div class="input-component">
  <p class="input-heading">{label}</p>

  <div class="input__c">
    <div class="form-group">
      <span
        class="btn-select {pfxValue.length == 0
          ? 'disabled'
          : 'selected'} {showAlert ? 'bg-alert' : ''}">{span}</span
      >
      <input
        {id}
        {label}
        {populate}
        {clearData}
        {negative}
        type="text"
        name="paddingPfx"
        class="form-field"
        space-type={sType}
        bind:value={pfxValue}
        on:input={(e)=>createAndUpdateObj(e)}
        on:focus={() => getInputId()}
        on:blur={() => ($selectedInputId = "0")}
      />
    </div>
  </div>
  <div class="input-heading danger">
    <p>{showAlert ? "This prefix already exist" : ""}</p>
  </div>
</div>

<style>
  .input-component {
    position: relative;
    margin-bottom: 36px;
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
    left: 36px;
    color: var(--col-danger);
    font-size: 0.8rem;
  }

  .bg-alert {
    background: var(--col-danger) !important;
  }
</style>
