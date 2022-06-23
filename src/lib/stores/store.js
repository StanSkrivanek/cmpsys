import { writable } from "svelte/store";

const prefixObjArr = writable([]);
const selectedInputId = writable("");
const pointSys = writable("");
const sizesStore = writable([]);
const isVisualHidden = writable(true);
const previewerValues = writable({
  unit: "px",
  separator: "-",
  rootsize: 16,
});
const toastdata = writable({
  isHidden: true,
  message: "message",
  type: "info",
});
export {
  prefixObjArr,
  selectedInputId,
  pointSys,
  sizesStore,
  isVisualHidden,
  previewerValues,
  toastdata,
};
