<script lang="ts">
    import { officers } from "../../lib/buddies";
    import OfficerProfile from "@/components/sections/buddies-profile.svelte";
    import AcmSelect from "@/components/utils/nodebuds-select.svelte";
    import Spacing from "@/components/sections/spacing.svelte";
  
    let currentSchoolYear = "2021-2022";
  </script>
  
  <section>
    <h2 class="headers">
      Buddies
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
        {#each officers[currentSchoolYear] as { name, picture } (name)}
          <OfficerProfile name="{name}" picture="{picture}" />
        {/each}
      </div>
    </div>
  </section>
  
  <style lang="scss">
    @import "static/theme.scss";

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    section h2 {
      text-align: center;
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
  