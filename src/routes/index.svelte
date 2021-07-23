<script>
  import Hero from "@/components/index/hero.svelte";
  import WhyJoin from "@/components/index/why-join.svelte";
  import AcmPaths from "@/components/index/acm-paths.svelte";
  import Spacing from "@/components/sections/spacing.svelte";
  import CallToActionSection from "@/components/sections/call-to-action-section.svelte";
</script>

<Spacing minAmount="128px" maxAmount="200px" />
<Hero />

<Spacing minAmount="128px" maxAmount="200px" />
<WhyJoin />

<Spacing minAmount="128px" maxAmount="200px" />
<AcmPaths />

<Spacing minAmount="128px" maxAmount="200px" />
<CallToActionSection>
  <h2 slot="headline" class="headers">Ready to get started?</h2>
  <p slot="text">
    We invite all to join our student chapter consisting of <span
      style="font-weight: 500">350+</span
    > passionate tech enthusiasts. Each of our workshops, info sessions, and community
    events were designed to kickstart your tech journey on the right foot.
  </p>
</CallToActionSection>

<Spacing minAmount="72px" maxAmount="120px" />
