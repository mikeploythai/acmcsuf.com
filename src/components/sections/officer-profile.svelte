<script lang="ts">
  const placeholderPicture = "placeholder.png";

  export let name: string = "";
  export let title: string = "";
  export let picture: string = placeholderPicture;

  title = title
    .replace(/Create/, `<span class="brand-em brand-pink">Create</span>`)
    .replace(/Algo/, `<span class="brand-em brand-purple">Algo</span>`)
    .replace(/Dev/, `<span class="brand-em brand-bluer">Dev</span>`)
    .replace(
      /NodeBuds/,
      `<span class="headers">node<span class="brand-em brand-red">Buds</span></span>`
    );
</script>

<div class="officer-container">
  <img
    class="officer-image"
    src="{`../assets/authors/${picture}`}"
    alt="{`Image of ${name}.`}"
  />
  <h3 class="headers">
    {name}
  </h3>
  <p>
    {@html title}
  </p>
</div>

<style>
  .officer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px 64px 0;
  }

  .officer-image {
    width: 150px;
    height: 150px;
  }

  h3 {
    font-size: 18px;
    color: var(--acm-dark);
    margin-top: 8px;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    max-width: 100px;
    color: var(--acm-dark);
  }

  /* .officer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px;
  }

  .officer-image {
    width: 200px;
    height: 200px;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--acm-dark);
  } */
</style>
