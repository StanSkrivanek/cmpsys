# Custom CSS Spacing System Generator

This app allow user to create custom spacing system for padding and margin. App is build with Svelte.

## SYSTEM

This option offer to choose from:

`Custom` - add your own sizes in `SIZE` input

`8pt system` - populate basic sizes in steps from `0` to `160`

`10pt system` - populate basic sizes in steps from `0` to `100`

Both predefined options are editable to be able add and/or remove sizes

## SEAPARATOR

You can set custom separator between prefix and number that identify size, predefined value is `-`

## UNITS

Choose from two units `px` or `rem`


`px` - when code will be generated, the sizes from `SIZE` input will be used as values in `px`

`rem` - when code will be generated, the sizes from `SIZE` input will be used as initial values to be recalcluated into `rem` units based on `root size`.

`root size` - set custom `root size` to calculate `rem`. Predefined value is `16`

## CODE PREVIEW

Visual feedback for **separator** and **units**.

---

## PREFIX

Input fields for custom prefixes.

`prepopulate` - prepopulate basic prefixes inspired by Tailwind. You can **edit** these values.

`Clear All` - will clear all prefixes fields

`show visual` - Visual feeback for prefixes

---

## GENERATE CODE

Button **generate to clipboard** will generate all data into clipborad.

**NOTE:** Generated code will include **negative** margins for `top`, `left`, `bottom` and `right`. These will have letter `n` before prefix.

```css
.nmt-24 {
  margin-top: -1.5rem;
 }
```
