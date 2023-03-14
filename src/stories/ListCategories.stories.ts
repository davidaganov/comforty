import BaseListCategories from "../components/Base/BaseListCategories.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/ListCategories",
  component: BaseListCategories
} as Meta<typeof BaseListCategories>

const Template: StoryFn<typeof BaseListCategories> = () => ({
  components: { BaseListCategories },
  template: "<BaseListCategories />"
})

export const ListCategories = Template.bind({})
ListCategories.args = {}
