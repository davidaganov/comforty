import BaseCardReview from "../components/Base/BaseCardReview.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/Card/Review",
  component: BaseCardReview
} as Meta<typeof BaseCardReview>

const Template: StoryFn<typeof BaseCardReview> = (args, { argTypes }) => ({
  components: { BaseCardReview },
  props: Object.keys(argTypes),
  template: "<BaseCardReview v-bind='$props' />"
})

export const Review = Template.bind({})
Review.args = {
  id: 1,
  text: {
    en: "This sectional sofa is not only comfortable and spacious, but it's also the centerpiece of my living room that ties everything together with its beautiful design and quality craftsmanship.",
    ru: "Этот угловой диван не только удобный и просторный, но и является центральным элементом моей гостиной, который своим красивым дизайном и качественным исполнением связывает все вместе."
  },
  avatar: "avatar-1.jpg",
  userName: { en: "Kristin Watson", ru: "Кристина Ватсон" },
  job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
}
