import BaseCardCategory from "../components/Base/BaseCardCategory.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/Card/Category",
  component: BaseCardCategory
} as Meta<typeof BaseCardCategory>

const Template: StoryFn<typeof BaseCardCategory> = (args, { argTypes }) => ({
  components: { BaseCardCategory },
  props: Object.keys(argTypes),
  template: `
    <BaseCardCategory v-bind="$props" />
  `
})

export const Category = Template.bind({})
Category.args = {
  id: 1,
  title: { en: "Wing Chair", ru: "Кресла" },
  productsCount: 1204,
  cover: "cat-1.jpg",
  link: "wing"
}
