<template>
  <div class="inner">
    <div>
      <Logo />
    </div>
    <div>
      <LanguageSwitcher />
    </div>
    <div>
      <p>{{ $t("nav.top.info") }}</p>
      <p>{{ $t("cart.test", 0) }}</p>
      <p>{{ $t("cart.test", 1) }}</p>
      <p>{{ $t("cart.test", 5) }}</p>
    </div>
    <div>
      <Button
        link="#"
        :arrow="true"
      >
        Test
      </Button>
    </div>
    <div class="products">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/components/Form/Logo.vue"
import Button from "@/components/Base/Button.vue"
import CardProduct from "@/components/Base/CardProduct.vue"
import LanguageSwitcher from "@/components/Base/LanguageSwitcher.vue"

const products = [
  {
    id: 1,
    name: "Product #1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  },
  {
    id: 2,
    name: "Product #2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "pic-1.jpg",
    slug: "product-2",
    category: "products",
    attr: {
      newest: true,
      trending: false,
      bestsellers: false,
      featured: true
    },
    price: {
      regular: 15
    }
  },
  {
    id: 3,
    name: "Product #3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "pic-1.jpg",
    slug: "product-3",
    category: "products",
    attr: {
      newest: false,
      trending: false,
      bestsellers: false,
      featured: true
    },
    price: {
      regular: 15,
      discount: 17
    }
  },
  {
    id: 4,
    name: "Product #4",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "pic-1.jpg",
    slug: "product-4",
    category: "products",
    attr: {
      newest: false,
      trending: false,
      bestsellers: false,
      featured: true
    },
    price: {
      regular: 15
    }
  }
]
</script>

<style>
.products {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
