<script>
  import InputPfx from "./shared/InputPrefix.svelte";
  import Button from "./shared/Button.svelte";
  import {
    prefixObjArr,
    sizesStore,
    previewerValues,
    isVisualHidden,
    toastdata,
  } from "$lib/stores/store.js";

  let populate = false;
  let clearData = false;
  let elms = []; // array of elements for clipboard
  $: isReady = false;

  $: if (sizes.length > 0 && Object.keys(data).length > 3) {
    isReady = true;
  } else {
    isReady = false;
  }
 

  $: data = $prefixObjArr;
  $: sizes = $sizesStore;
  $: pfxCss = getObjKeysValue(data);

  function toggleVisibility() {
    $isVisualHidden = !$isVisualHidden;
  }

  function sizeNumbersArray(a) {
    let sizesArr = a
      .replace(/ /g, "")
      .split(",")
      .map((str) => Number(str));
    return sizesArr; // array of Numbers
  }

  function getObjKeysValue(obj) {
    let fullObj = {};
    for (var objKey in obj) {
      if (
        obj[objKey]["pfxValue"] === "" ||
        obj[objKey]["pfxValue"] === undefined
      ) {
      } else {
        fullObj[objKey] = {
          pfx: obj[objKey]["pfxValue"],
          props: obj[objKey]["cssProps"],
          neg: obj[objKey]["negative"],
        };
      }
    }
    return fullObj;
  }

  function genCode(a) {
    let separator = $previewerValues.separator;
    let unit = $previewerValues.unit;
    let root = $previewerValues.rootsize;
    let sNumArr = sizeNumbersArray(a);
    let basic = null;
    let negative;
    elms = []; // clear array for clipboard

    return sNumArr.forEach((size) => {
      for (let key in pfxCss) {
        let pfx = pfxCss[key]["pfx"];
        let props = pfxCss[key]["props"];
        let neg = pfxCss[key]["neg"];
        let creatCode = () => {
          return `.${pfx}${separator}${size} {\n${props
            .map((prop) => {
              if (unit == "rem") {
                return `\t${prop}: ${Number((size / root).toFixed(3))}${unit};`;
              } else {
                return `\t${prop}: ${size}${unit};`;
              }
            })
            .join("\r\n")}\n}`;
        };

        let createNegativeMargings = () => {
          if (neg && neg === "true") {
            return `.${`n`}${pfx}${separator}${size} {\n${props
              .map((prop) => {
                if (unit == "rem") {
                  return `\t${prop}: -${Number(
                    (size / root).toFixed(3)
                  )}${unit};`;
                } else {
                  return `\t${prop}: -${size}${unit};`;
                }
              })
              .join("\r\n")}\n}`;
          } else {
            return "";
          }
        };

        negative = createNegativeMargings();
        basic = creatCode();
        let wholeCode = `${basic}\n${negative}\n`;
        elms.push(wholeCode.trim());
      }
    });
  }
  function clearToast() {
    setTimeout(() => {
      $toastdata.isHidden = true;
      $toastdata.message = "message";
      $toastdata.type = "info";
    }, 2400);
  }
  // COPY TO CLIPBOARD
  let isCopied = false;
  const copyToClipboard = async () => {
    if (sizes === "") {
      console.error("There has to be at least one size defined");
      $toastdata.message = "add at least one size";
      $toastdata.isHidden = false;
      $toastdata.type = "warning";
      clearToast();
      return;
    }
    if (Object.keys(data).length < 4) {
      console.error("There has to be at least one prefix (class name) defined");
      $toastdata.message = "add at least one prefix";
      $toastdata.isHidden = false;
      $toastdata.type = "warning";
      clearToast();
      return;
    } else {
      genCode(sizes);
    }
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(elms.join("\n"));
        $toastdata.message = "Copied to clipboard";
        $toastdata.isHidden = false;
        $toastdata.type = "success";
        console.log("code was successfully copied into clipboard");
        clearToast();
      }
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 2400);
    } catch {
      console.error("Clipboard API not available");
    }
  };
</script>

<form class="form">
  <div class="container">
    <div class="form-group">
      <div class="form-group--header">
        <h2>Padding</h2>
      </div>
      <div class="form-group--body">
        <InputPfx
          id="1"
          sType="padding"
          label="all sides"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="2"
          sType="padding"
          label="horizontal [X]"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="3"
          sType="padding"
          label="vertical [Y]"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="4"
          sType="padding"
          label="top"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="5"
          sType="padding"
          label="right"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="6"
          sType="padding"
          label="bottom"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="7"
          sType="padding"
          label="left"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-group--header">
        <h2>Margin</h2>
      </div>
      <div class="form-group--body">
        <InputPfx
          id="8"
          sType="margin"
          label="all sides"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="9"
          sType="margin"
          label="horizontal [X]"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="10"
          sType="margin"
          label="vertical [Y]"
          span="&#46;"
          negative="false"
          {populate}
          {clearData}
        />
        <InputPfx
          id="11"
          sType="margin"
          label="top"
          span="&#46;"
          negative="true"
          {populate}
          {clearData}
        />
        <InputPfx
          id="12"
          sType="margin"
          label="right"
          span="&#46;"
          negative="true"
          {populate}
          {clearData}
        />
        <InputPfx
          id="13"
          sType="margin"
          label="bottom"
          span="&#46;"
          negative="true"
          {populate}
          {clearData}
        />
        <InputPfx
          id="14"
          sType="margin"
          label="left"
          span="&#46;"
          negative="true"
          {populate}
          {clearData}
        />
      </div>
    </div>
  </div>

  <div class="form-group--footer">
    <div class="btns__c">
      <Button
        type="submit"
        btColor="primary"
        caption="prepopulate"
        on:click={() => {
          populate = true;
          clearData = false;
        }}
      />
      <Button
        type="submit"
        btColor="error"
        caption="Clear All"
        on:click={() => {
          populate = false;
          clearData = true;
          isReady = false;
          setTimeout(() => {
            clearData = false;
          }, 100);
        }}
      />
      <Button
        type="submit"
        btColor=""
        caption="{$isVisualHidden ? 'show' : 'hide'} visual"
        on:click={toggleVisibility}
      />
    </div>
    <Button
      type="submit"
      btColor={isReady ? "success" : "disabled"}
      caption="generate to clipboard"
      on:click={() => copyToClipboard(elms.join("\n"))}
    />
  </div>
</form>

<style>
  .form {
    padding: 0 16px;
    margin-bottom: 24px;
    gap: 16px;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
  .form-group {
    display: flex;
    flex: 1 0 300px;
    flex-direction: column;
  }
  .form-group--header h2 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .form-group--footer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
    gap: 16px;
  }
  .btns__c {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 50%;
    gap: 8px;
  }
</style>
