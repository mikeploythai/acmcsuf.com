<script lang="ts">
  import AcmButton from "@/components/utils/acm-button.svelte";
</script>

<section>
  <div class="main-text">
    <slot name="headline" tag="h2" />
    <slot name="text" tag="p" />
  </div>
  <AcmButton
    text="join us today!"
    link="https://tinyurl.com/acm-csuf-discord/"
  />
</section>

<style lang="scss">
  @import "static/theme.scss";

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 24px;
  }

  section .main-text {
    max-width: 950px;
  }

  section :global(p) {
    margin-top: 16px;
  }

  /* section {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  section :global(h2) {
    text-transform: lowercase;
    font-size: var(--subheading-font-size);
    padding-bottom: 20px;
  }

  section :global(p) {
    font-size: var(--body-font-size);
  }

  @media (min-width: 768px) {
    section {
      padding: 0 180px;
    }
  } */
</style>
