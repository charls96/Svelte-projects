<main>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex mb-8">
      <SelectLanguage />
    </div>
    <h1 class="text-3xl text-indigo-600">{$t("app_heading")}</h1>
    <p>{$t("app_description")}</p>
  </div>
</main>

<script lang="ts">
  import SelectLanguage from "@/components/SelectLanguage.svelte";
  import { i18nStore } from "@/stores/i18n";

  const { t } = i18nStore;
</script>