<script>
  import AcmButton from "@/components/utils/acm-button.svelte";
</script>

<section>
  <div class="left-content">
    <div class="main-text headers">
      We are the largest tech community at
      <span class="brand-em brand-blue">CSUF</span>
    </div>

    <AcmButton
      text="Join us today!"
      link="https://tinyurl.com/acm-csuf-discord/"
    />
  </div>

  <img
    src="assets/new_assets/hero-illustration.png"
    alt="Frank the shark (ACM CSUF's mascot) is holding a flag that says 'I ♥ ACM'"
  />
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section .left-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  section .left-content .main-text {
    font-size: 48px;
    max-width: 570px;
  }

  section img {
    max-width: 468px;
    margin-left: 120px;
    filter: drop-shadow(0 10px 40px rgba(44, 145, 198, 0.5));
  }
</style>
