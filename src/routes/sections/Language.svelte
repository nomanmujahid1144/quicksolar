<script lang="ts">
  export let languages = ['English', 'Spanish', 'French', 'German'];
  export let selectedLanguage = languages[0];

  function handleLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedLanguage = target.value;
    // Dispatch a custom event to notify parent components of the language change
    const changeEvent = new CustomEvent('languagechange', {
      detail: { language: selectedLanguage },
    });
    dispatchEvent(changeEvent);
  }
</script>

<div>
  <label for="language-select">Select Language:</label>
  <select id="language-select" bind:value={selectedLanguage} on:change={handleLanguageChange}>
    {#each languages as language}
      <option value={language}>{language}</option>
    {/each}
  </select>
</div>

<style>
  select {
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
