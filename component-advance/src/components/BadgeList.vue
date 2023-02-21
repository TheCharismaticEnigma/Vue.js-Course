<template>
  <section>
    <base-card>
      <template v-slot:content>
        <ul class="badge-list">
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>
