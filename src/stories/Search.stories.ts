import BaseSearch from "../components/Form/FormSearch.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/Form/Search",
  component: BaseSearch
} as Meta<typeof BaseSearch>

const Template: StoryFn<typeof BaseSearch> = () => ({
  components: { BaseSearch },
  template: "<BaseSearch />"
})

export const Search = Template.bind({})
