import BaseCardProduct from "../components/Base/BaseCardProduct.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/Card/Product",
  component: BaseCardProduct
} as Meta<typeof BaseCardProduct>

const Template: StoryFn<typeof BaseCardProduct> = (args, { argTypes }) => ({
  components: { BaseCardProduct },
  props: Object.keys(argTypes),
  template: `
    <BaseCardProduct v-bind="$props" />
  `
})

export const ProductDefault = Template.bind({})
ProductDefault.args = {
  id: 1,
  title: { en: "Product #1", ru: "Продукт #1" },
  cover: "pic-1.jpg",
  slug: "product-1",
  category: "products",
  attr: { newest: false, trending: false, bestsellers: false, featured: false },
  price: { regular: 15, discount: null }
}

export const ProductDiscounted = Template.bind({})
ProductDiscounted.args = {
  ...ProductDefault.args,
  price: { regular: 15, discount: 10 }
}

export const ProductNewest = Template.bind({})
ProductNewest.args = {
  ...ProductDefault.args,
  attr: { newest: true }
}
