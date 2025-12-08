<select
  class="px-1 py-1 border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand shadow-xs"
  bind:value={value}
  aria-label="select"
>
  {#each displayOptions as option (option.value)}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>

<script lang="ts">
  import type { SelectOption } from "@/utils/types/select";
  import { i18nStore } from "@/stores/i18n";

  let {
    ignoreTranslation = false,
    options = [],
    value = $bindable<string>(),
  } = $props<{
    ignoreTranslation?: boolean;
    options: SelectOption[];
    value?: string;
  }>();

  const { t } = i18nStore;

  const displayOptions = $derived.by(() => {
    if (ignoreTranslation) return options;
    const translate = $t;
    return options.map((option: SelectOption) => ({ value: option.value, label: translate(option.label) }));
  });
</script>