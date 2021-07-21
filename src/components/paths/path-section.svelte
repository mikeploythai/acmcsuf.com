<script lang="ts">
  import type { AcmPath } from "../../lib/acm-paths";
  import { styleProps } from "../../actions/use-style-props";

  enum TextAlignment {
    Left = "left",
    Right = "right",
  }

  export let textAlign: TextAlignment = TextAlignment.Right;
  export let info: AcmPath | undefined;
</script>

<div class="container">
  {#if info !== undefined}
  <section id="{info.slug}" class:👈="{textAlign === TextAlignment.Left}">
    <img src="{info.picture}" alt="{`acm${info.title} Logo`}" />
    <div>
      <h2>
        <span class="headers">
          acm<span use:styleProps="{{ 'font-color': info.color }}">
            <span class="brand-em">{info.title}</span>
          </span>
        </span>
      </h2>
      <slot name="content" tag="p" />
    </div>
  </section>
{/if}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1064px;
  }

  section img {
    margin-left: -32px;
    min-width: 350px;
  }

  section div {
    text-align: right;
    max-width: 650px;
  }

  section div h2 {
    font-size: 36px;
    padding-bottom: 16px;
  }

  section div h2 span span {
    color: var(--font-color);
  }

  section div :global(p) {
    font-size: 16px;
  }

  /* Left */
  .👈 {
    flex-direction: row-reverse;
  }
  
  .👈 div {
    text-align: left;
  }

  .👈 img {
    margin-right: -32px;
  }
  

  /* section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    /* The next two lines leave space above the anchored element. */
  /*   padding-top: calc(1.5 * var(--navbar-height));
    margin-top: calc(-1.5 * var(--navbar-height));
  }

  section img {
    margin-bottom: 32px;
    width: 200px;
    height: 200px;
  }

  section div {
    display: flex;
    flex-direction: column;
    margin: 0 32px;
  }

  section div h2 {
    font-size: var(--heading-font-size);
    text-align: right;
  } */

  /* Class `.👈` represents `<PathSection textAlign="left" />` */
  /* .👈 div h2 {
    text-align: left;
  }

  section div h2 span span {
    color: var(--font-color);
  }

  section div :global(p) {
    font-size: var(--body-font-size);
    text-indent: 32px;
    text-align: right;
  }

  .👈 div :global(p) {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    section {
      flex-direction: row;
      margin: 0 32px;
    }

    .👈 {
      flex-direction: row-reverse;
    }

    section img {
      width: 316px;
      height: 316px;
    }

    section div {
      max-width: 720px;
    }
  } */
</style>
