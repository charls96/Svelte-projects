
<Select bind:value={selectedLanguage} options={options} />

<script lang="ts">
  import { LANGUAGE_CODES } from "@/utils/constants/i18n";
  import type { LanguageCodes } from "@/utils/types/i18n";
  import Select from "./base/Select.svelte";
  import { i18nStore } from "@/stores/i18n";

  const { locale } = i18nStore;

  const options = LANGUAGE_CODES.map((code) => ({ value: code, label: code }));
  let selectedLanguage = $state<LanguageCodes>($locale);

  $effect(() => {
    if (!selectedLanguage || selectedLanguage === $locale) return;
    i18nStore.setLocale(selectedLanguage);
  });
</script>