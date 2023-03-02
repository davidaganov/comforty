import { shallowMount } from "@vue/test-utils"
import CardProduct from "@/components/Base/CardProduct.vue"

describe("Card Product component", () => {
  it("Renders props.data when passed", () => {
    const data = {
      id: 1,
      name: "Test",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "pic-1.jpg",
      slug: "test-1",
      category: "products",
      attr: {
        newest: true,
        trending: false,
        bestsellers: false,
        featured: true
      },
      price: {
        regular: 15,
        discount: 10
      }
    }

    const wrapper = shallowMount(CardProduct, {
      props: { product: data }
    })
    expect(wrapper.text()).toMatch(data.name)
  })
})
