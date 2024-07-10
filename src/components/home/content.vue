<template>
  <div class="h-screen" id="main">
    <div class="flex w-full mt-20">
      <div
        class="flex flex-col justify-center items-center text-center w-full uppercase font-outfit font-bold text-8xl"
        id="text"
      >
        Raden Develops<br />
        <span class="text-zinc-950" id="dreamText">Realizing Dreams</span>
        <div class="text-2xl mt-20 gap-8 flex flex-row">
          <div>front-end</div>
          <div class="text-4xl">&#8226;</div>
          <div>back-end</div>
          <div class="text-4xl">&#8226;</div>
          <div>ui/ux</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
#text {
  line-height: 75%;
}

#dreamText {
  text-shadow:
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white,
    1px 1px 0 white;
}

#main {
  animation: fadeIn ease 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
