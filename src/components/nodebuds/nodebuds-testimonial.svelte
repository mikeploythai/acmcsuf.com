<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<section>
  <div class="info-container">
    <h2 class="headers">Testimonials</h2>
    <span>
      <slot name="content1" tag="p" />
      <slot name="content2" tag="p" />
      <slot name="content3" tag="p" />
    </span>
  </div>
  <!-- <div class="image-container">
    <img src="{src}" alt="{alt}" />
  </div> -->
</section>

<style lang="scss">
  @import "static/theme.scss";

  section {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 24px;
  }

  .info-container {
    width: 1064px;
  }

  .info-container span {
    display: flex;
    justify-content: space-between;
  }

  .info-container :global(h2) {
    padding-bottom: 16px;
  }

  .info-container :global(p) {
    max-width: 250px;
  }

  @media (max-width: 839px) {
    .info-container span {
      flex-direction: column;
      align-items: center;
    }

    .info-container :global(p) {
      max-width: 450px;
      margin-bottom: 32px;
    }
  }
/*   section {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
  }

  .info-container {
    max-width: 55vw;
    font-size: var(--fluid-font-size);
    text-align: center;
  }

  .info-container :global(h2) {
    text-transform: lowercase;
    font-size: var(--heading-font-size);
    margin-bottom: 20px;
    hyphens: auto;
  }

  .info-container :global(p) {
    font-size: var(--body-font-size);
  }

  .image-container img {
    width: max(55vw, 550px);
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    section {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 0 20px;
    }

    .info-container {
      text-align: start;
    }
  } */
</style>
