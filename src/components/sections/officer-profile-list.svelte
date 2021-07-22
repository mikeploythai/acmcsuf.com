<script lang="ts">
  import { officers } from "../../lib/officers";
  import OfficerProfile from "@/components/sections/officer-profile.svelte";
  import AcmSelect from "@/components/utils/acm-select.svelte";
  import Spacing from "@/components/sections/spacing.svelte";

  let currentSchoolYear = "2021-2022";
</script>

<section>
  <h2 class="headers">
    Board members
  </h2>

  <Spacing amount="16px" />

  <div class="school-year-input-container">
    <AcmSelect
      bind:defaultValue="{currentSchoolYear}"
      options="{Object.keys(officers)}"
    />
  </div>

  <!-- <Spacing amount="64px" /> -->

  <div class="container">
    <div class="officer-profile-list">
      {#each officers[currentSchoolYear] as { name, title, picture } (name)}
        <OfficerProfile name="{name}" title="{title}" picture="{picture}" />
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section h2 {
    text-align: center;
    font-size: 36px;
  }

  .school-year-input-container {
    text-align: center;
  }

  .officer-profile-list {
    display: flex;
    flex-flow: row wrap;
    max-width: 1250px;
    justify-content: space-around;
  }
</style>
