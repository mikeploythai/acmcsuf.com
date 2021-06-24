<script lang="ts">
  import CommonHero from "@/components/sections/common-hero.svelte";
  import OfficerProfileList from "@/components/sections/officer-profile-list.svelte";
  import Spacing from "@/components/sections/spacing.svelte";
  import CallToActionSection from "@/components/sections/call-to-action-section.svelte";
  import Header from "@/components/about/what-is-acm.svelte";
</script>

<Spacing amount="200px" />
<Header/>

<Spacing amount="64px" />
<CommonHero>
  <h2 slot="headline">
    Who are we?
  </h2>
  <p slot="text">
    <span class="headers">acm<span class="brand-em brand-blue">CSUF</span></span> is a student chapter of the Association for Computing Machinery, an 
    international organization based in New York that advocates for the advancement 
    of computer science as a science and profession.  Our chapter based in California 
    State University, Fullerton focuses on bringing passionate Titans together to be 
    involved in the tech community via workshops, info sessions, community 
    events, and more!
  </p>
</CommonHero>

<Spacing amount="200px" />
<OfficerProfileList />
 
<Spacing amount="120px" />
<!--
<CallToActionSection>
  <h2 slot="headline">How can I get involved?</h2>
  <p slot="text">
    We current don’t have openings for board positions, but follow us on social
    media to get notified when we do! Until then, we invite you to become a part
    of our chapter to start off your tech journey on the right foot.
  </p>
</CallToActionSection>

<Spacing amount="175px" /> -->
