<template>
  <div>
    <div>
      <Logo />
    </div>
    <div>
      <Button text="test" />
    </div>
    <div>
      <Product :product="productData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/components/Form/Logo.vue"
import Button from "@/components/Base/Button.vue"
import Product from "@/components/Base/CardProduct.vue"

const productData = {
  id: 1,
  name: "Product #1",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "/product-1",
  image: "pic-1.jpg",
  slug: "product-1",
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
</script>
