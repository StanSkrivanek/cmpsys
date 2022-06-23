<script>
  import { previewerValues } from "$lib/stores/store.js";

  let prefix = "py";
  let pxVal = 24;

  $: remVal = Number((pxVal / $previewerValues.rootsize).toFixed(3));
  $: convertUnits = $previewerValues.unit === "rem" ? remVal : pxVal;

  $: preview = `.${prefix}${$previewerValues.separator}${pxVal} { \n\r padding-top: ${convertUnits}${$previewerValues.unit} \n  padding-bottom:${convertUnits}${$previewerValues.unit};\n }`;
</script>

<div class="container">
  <div class="preview-component">
    <div class="preview-title">code preview</div>
    <div class="preview__c">
      <pre>{preview}</pre>
    </div>
  </div>
</div>

<style>
  .container {
    flex: 1 1 40%;
    position: relative;
    min-height: 100%;
    min-width: 400px;
    /* border: 1px solid red; */
  }
  pre {
    font-size: 1.2rem;
    font-family: monospace, sans-serif;

    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .preview-component {
    position: relative;
    height: 100%;
    padding: 16px;
    border-radius: 6px;
    background-color: var(--col-white);
    font-family: Menlo, sans-serif;
    font-size: 1.2rem;
    background-color: var(--col-bg-gray);
  }
  .preview-title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 8px;
    position: absolute;
    padding: 6px 12px;
    color: var(--col-white);
    top: 0;
    left: 4px;
    background-color:var(--col-bg-gray);
  }
  .preview__c {
    padding: 24px;
    height: 100%;
    overflow: hidden;
    border: 1px solid var(--col-bg-sec);
    border-radius: 4px;
  }
</style>
