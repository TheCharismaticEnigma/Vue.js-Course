// Wrapps another component to make it a card.

<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <slot name="content"></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 2rem 0;
  color: #3a3a3a;
  text-align: center;
}

ul.badge-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin-right: 1rem;
}
</style>
