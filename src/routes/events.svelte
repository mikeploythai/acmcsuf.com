<script lang="ts">
  import { onMount } from "svelte";
  import type { AcmEvent } from "../lib/parse-ical-data";
  import CommonHero from "@/components/sections/common-hero.svelte";
  import Spacing from "@/components/sections/spacing.svelte";
  import EventCarousel from "@/components/events/event-carousel.svelte";
  import CallToActionSection from "@/components/sections/call-to-action-section.svelte";
  import AcmEmpty from "@/components/utils/acm-empty.svelte";

  let events: AcmEvent[] = [];
  let isLoading = true;

  onMount(() => {
    // Lazily load the iCal data for the event carousel.
    fetch("../events.json")
      .then((response) => response.json())
      .then((icalData) => {
        events = icalData as AcmEvent[];
        isLoading = false;
      });
  });
</script>

<Spacing minAmount="100px" amount="175px" maxAmount="200px" />

<CommonHero>
  <h2 slot="headline">Curated events for growth and success</h2>
  <p slot="text">
    Our student chapter hosts a multitude of events throughout each school semester, 
    consisting of workshops, info sessions, community building events, and much more!
    <br><br>
    <span class="mid">Events are open to anyone interested, regardless of major or background experience.</span>
  </p>
</CommonHero>
<Spacing minAmount="100px" amount="175px" maxAmount="200px" />

<h2 class="headers">This week's events</h2>
<Spacing minAmount="32px" maxAmount="64px" />

{#if events.length > 0}
  <EventCarousel events="{events}" />
{:else}
  <AcmEmpty>
    <p slot="content">
      {#if isLoading}
        Loading…
      {:else}
        There are no events scheduled!
      {/if}
    </p>
  </AcmEmpty>
{/if}

<Spacing minAmount="40px" amount="95px" maxAmount="120px" />

<!-- <CallToActionSection>
  <h2 slot="headline">So what are you waiting for?</h2>
  <p slot="text">
    We invite you to become a part of our chapter consisting of
    <b>350<span class="brand-blue">+</span> members</b>, and rising! All of our
    coding workshops, info sessions, and community events were designed to start
    off your tech journey on the right foot.
  </p>
</CallToActionSection>

<Spacing amount="175px" /> -->

<style lang="scss">
  @import "static/theme.scss";

  h2 {
    display: flex;
    justify-content: center;
  }

  p {
    text-align: center;
  }
</style>