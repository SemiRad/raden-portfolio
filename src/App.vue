<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="bg-zinc-950 text-white font-outfit">
      <header>
        <nav class="flex justify-between p-5 text-xl font-normal">
          <RouterLink to="/">LOGO HERE</RouterLink>
          <ul class="flex gap-20 mr-10">
            <li><RouterLink to="/about">about</RouterLink></li>
            <li><RouterLink to="/portfolio">portfolio</RouterLink></li>
            <li><RouterLink to="#">contact</RouterLink></li>
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
