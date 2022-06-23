<script>
  export let btnLabel = "label";
  export let name = "name";
  export let group = "group";
  export let value = "value";

</script>

<label class="input__control">
  <input {btnLabel} type="radio" {name}  bind:group={group} value={value}/>
  <span class="outside">
    <span class="inside" />
  </span>
  {btnLabel}
</label>


<style>

input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    /* background-color: red; */
    /* Not removed via appearance */
    margin: 0;
  }
   .input__control {
    position: relative;
    font-family: "Montserrat", "sans-serif";
    font-size: 1rem;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.4em;
  }

  .outside {
    display: inline-block;
    position: absolute;
    left: -2px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border: 2px solid var(--col-bg-gray) ;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: none;
  }

  .inside {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: var(--col-active);
    left: 3px;
    top: 3px;
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
  } 

  input:checked + .outside {
    border-color: var(--col-active);
  }
   input:checked + .outside .inside {
    -webkit-animation: radio-select 0.1s linear;
    animation: radio-select 0.1s linear;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  .no-transforms input:checked + .outside .inside {
    width: 10px;
    height: 10px;
  } 
</style>
