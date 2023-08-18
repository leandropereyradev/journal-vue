<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mb-3 pointer p-2 entry-container" @click="$router.push({ name: 'entry', params: { id: 10 } })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2023, jueves</span>
    </div>
    <div class="entry-description">
      Ea nulla do enim fugiat. Irure duis ad esse anim cillum pariatur tempor minim ad amet nisi laborum qui. Magna
      consectetur nulla ad cillum cillum ad exercitation consectetur esse exercitation do. Laborum ut ea magna excepteur
      tempor aute id cupidatat incididunt non incididunt id sunt pariatur.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>