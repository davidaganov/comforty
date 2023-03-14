import BaseCart from "../components/Base/BaseCart.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Cart",
  component: BaseCart
} as Meta<typeof BaseCart>

const Template: StoryFn<typeof BaseCart> = () => ({
  components: { BaseCart },
  template: "<BaseCart />"
})

export const Cart = Template.bind({})
Cart.args = {}
