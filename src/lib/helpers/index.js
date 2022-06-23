// SIZES
const ps8 =
  " 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120, 144, 160";
const ps10 =
  "0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,100";
const ps0 = "";
const psRem = [
  0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5,
  2.75, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 24,
];
const pfxPredefined = [
  "p",
  "ph",
  "pv",
  "pt",
  "pr",
  "pb",
  "pl",
  "m",
  "mh",
  "mv",
  "mt",
  "mr",
  "mb",
  "ml",
];
// CONVERSION RAW
function toRem(pxValue, rootsize) {
  return pxValue / rootsize;
}

// VISUAL
function borders(id, mElm, pElm) {
  let pActive = "#9ffdbe";
  let mActive = "#fcaa7d";

  switch (id) {
    case "0":
      (pElm.style.borderColor = null), (mElm.style.borderColor = null);
      break;
    case "1":
      (mElm.style.borderColor = null), (pElm.style.borderColor = pActive);
      break;
    case "2":
      (mElm.style.borderColor = null),
        (pElm.style.borderColor = null),
        (pElm.style.borderLeftColor = pActive),
        (pElm.style.borderRightColor = pActive);

      break;
    case "3":
      (mElm.style.borderColor = null),
        (pElm.style.borderColor = null),
        (pElm.style.borderTopColor = pActive),
        (pElm.style.borderBottomColor = pActive);

      break;
    case "4":
      (mElm.style.borderColor = null),
        (pElm.style.borderColor = null),
        (pElm.style.borderTopColor = pActive);
      break;
    case "5":
      (mElm.style.borderColor = null),
        (pElm.style.borderColor = null),
        (pElm.style.borderRightColor = pActive);
      break;
    case "6":
      (mElm.style.borderColor = null),
        (pElm.style.borderColor = null),
        (pElm.style.borderBottomColor = pActive);
      break;
    case "7":
      (mElm.style.borderColor = null),
        (pElm.style.borderColor = null),
        (pElm.style.borderLeftColor = pActive);
      break;
    case "8":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderColor = mActive);
      break;
    case "9":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderLeftColor = mActive),
        (mElm.style.borderRightColor = mActive);

      break;
    case "10":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderTopColor = mActive),
        (mElm.style.borderBottomColor = mActive);

      break;
    case "11":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderTopColor = mActive);
      break;
    case "12":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderRightColor = mActive);
      break;
    case "13":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderBottomColor = mActive);
      break;
    case "14":
      (pElm.style.borderColor = null),
        (mElm.style.borderColor = null),
        (mElm.style.borderLeftColor = mActive);
      break;
  }
  // }
}

// GENERATOR
const sProps = {
  0: "padding",
  1: "padding-top",
  2: "padding-right",
  3: "padding-bottom",
  4: "padding-left",
  5: "margin",
  6: "margin-top",
  7: "margin-right",
  8: "margin-bottom",
  9: "margin-left",
};

function addCssProps(index) {
  switch (index) {
    case 0:
      return [sProps[1], sProps[2], sProps[3], sProps[4]];
      break;
    case 1:
      return [sProps[2], sProps[4]];
      break;
    case 2:
      return [sProps[1], sProps[3]];
      break;
    case 3:
      return [sProps[1]];
      break;
    case 4:
      return [sProps[2]];
      break;
    case 5:
      return [sProps[3]];
      break;
    case 6:
      return [sProps[4]];
      break;
    case 7:
      return [sProps[6], sProps[7], sProps[8], sProps[9]];
      break;
    case 8:
      return [sProps[7], sProps[9]];
      break;
    case 9:
      return [sProps[6], sProps[8]];
      break;
    case 10:
      return [sProps[6]];
      break;
    case 11:
      return [sProps[7]];
      break;
    case 12:
      return [sProps[8]];
      break;
    case 13:
      return [sProps[9]];
      break;
  }
}

export {
  borders,
  ps8,
  ps10,
  ps0,
  psRem,
  pfxPredefined,
  toRem,
  sProps,
  addCssProps,
};
