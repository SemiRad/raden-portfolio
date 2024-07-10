<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="bg-zinc-950 text-white font-outfit">
      <header>
        <nav
          class="flex justify-between p-5 text-xl font-normal items-center max-sm:justify-center"
        >
          <RouterLink to="/"><img src="/logo.png" class="w-14 max-sm:hidden" /></RouterLink>
          <ul class="flex gap-20 max-sm:hidden">
            <li><RouterLink to="/about">about</RouterLink></li>
            <li><RouterLink to="/portfolio">portfolio</RouterLink></li>
            <li><RouterLink to="/contact">contact</RouterLink></li>
          </ul>
          <ul class="gap-10 hidden max-sm:flex">
            <li>
              <RouterLink to="/about"><a class="pi pi-user" /></RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio"><a class="pi pi-book" /></RouterLink>
            </li>
            <li>
              <RouterLink to="/contact"><a class="pi pi-phone" /></RouterLink>
            </li>
          </ul>
        </nav>
      </header>

      <div class="bg-zinc-950 h-screen">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="css">
* {
  background: ##09090b;
}
</style>
