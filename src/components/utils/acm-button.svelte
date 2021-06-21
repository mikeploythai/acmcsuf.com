<script lang="ts">
  export let link: string = "#";
  export let text: string = "Submit";
</script>

<a
  class="call-to-action headers"
  href="{link}"
  target="_blank"
  rel="noopener norefferer">{text}</a
>

<style>
  .call-to-action {
    display: block;
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    border-radius: 12px;
    padding: 12px 24px;
    margin-top: 64px;
    background-color: var(--acm-dark);
    color: var(--acm-light);
    font-size: 24px;
    transition: background-color 0.25s ease-in-out;
  }

  /* .call-to-action:hover {
    background-color: var(--acm-blue);
  } */

  /* .call-to-action {
    display: block;
    text-align: center;
    cursor: pointer;
    border-radius: 15px;
    user-select: none;
    background-color: none;
    padding: 8px 16px 8px 16px;
    margin-top: 24px;
    font-weight: bold;
    color: var(--acm-dark);
    text-decoration: none;
    border: 2px solid var(--acm-dark);
    font-size: var(--body-font-size);
    text-transform: lowercase;
    box-shadow: 0 0 0 rgba(23, 26, 28, 0.1);
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
      box-shadow 0.25s ease-in-out;
  } */

  /* .call-to-action:hover {
    color: var(--acm-light);
    background-color: var(--acm-dark);
    box-shadow: 0 2px 10px rgba(23, 26, 28, 0.5);
  } */
</style>
