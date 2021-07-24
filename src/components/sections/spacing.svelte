<script lang="ts">
  import { styleProps } from "../../actions/use-style-props";
  export let amount: string = "100px";
  export let minAmount: string = amount;
  export let maxAmount: string = amount;
</script>

<div
  use:styleProps="{{
    'min-spacing-height': minAmount,
    'med-spacing-height': amount,
    'max-spacing-height': maxAmount,
  }}"
></div>

<style>
  div {
    height: var(--max-spacing-height);
  }

  @media screen and (max-width: 839px) {
    div {
      height: var(--med-spacing-height);
    }
  }

  @media screen and (max-width: 359px) {
    div {
      height: var(--min-spacing-height);
    }
  }
</style>
