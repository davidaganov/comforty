<template>
  <div></div>
</template>

<script setup lang="ts">
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
