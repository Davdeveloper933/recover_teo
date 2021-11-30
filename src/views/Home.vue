<template>
  <div>
    <main-settings-btn/>
    <SectionPage/>
  </div>
</template>

<script>
  import SectionPage from "../components/SectionPage";
  import MainSettingsBtn from "../components/Button/MainSettingsBtn";
  export default {
    name: 'Home',
    components: {MainSettingsBtn, SectionPage}
  }
</script>
