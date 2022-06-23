<script>
  export let id = "";
  export let label = "";
  export let span = "";
  export let type = "text";
  export let value = "0";
</script>

<div class="input-component">
  <p class="input-heading">{label}</p>

  <div class="input__c">
    <div class="form-group">
      <span class="btn-select ">{span}</span>
      <input class="form-field" {id} {label} {type} {value} on:input/>
    </div>
  </div>
</div>

<style>
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

  .input-heading {
    font-family: "Montserrat", "sans-serif";
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
    line-height: 0;
  }

</style>
