<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n"
import { useRouter } from "vue-router"
import Translation from "@/i18n/translation"
</script>

<script setup lang="ts">
const { t, locale } = useI18n()
const supportedLocales = Translation.supportedLocales
const router = useRouter()

const switchLanguage = async (event: any) => {
  const newLocale = event.target.value

  await Translation.switchLanguage(newLocale)

  try {
    await router.replace({
      params: { locale: newLocale }
    })
  } catch (e) {
    console.error(e)
    router.push("/")
  }
}
</script>
