<!-- template to render error dialogue. (Overlay) -->

<template>
  <dialog open>
    <slot name="errorContent"> </slot>
  </dialog>
</template>

<!-- for slotted elements, use .slotted() pseudo class -->

<script>
export default {};
</script>

<style scoped>
dialog {
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 80%;
  top: 20vh;
  margin: 0 auto;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

:slotted(h3) {
  font-size: 2rem;
  color: tomato;
}
</style>
