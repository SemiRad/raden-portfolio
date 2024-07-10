<template>
  <div class="w-full h-full p-20" id="main">
    <div class="w-full h-full flex justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <img src="/public/img/og.png" alt="Raden" class="w-60 rounded-full mb-5" />
        <div class="font-extrabold text-6xl font-outfit text-center max-sm:text-xl">
          RADEN ACOMPAÑADO
        </div>
        <div
          class="w-2/4 font-outfit font-thin mt-10 text-center text-2xl max-sm:text-lg max-sm:w-full"
        >
          An aspiring software developer fueled by a passion for learning new technologies and
          honing my skills.<br />
          I am dedicated to continuous growth by seeking opportunities to test my limits and expand
          my expertise.
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full py-5 px-10 flex flex-row justify-evenly gap-5 max-sm:flex-col bg-zinc-950"
    id="container"
  >
    <div class="w-1/3 max-sm:w-full flex-grow" id="content-1">
      <fieldset class="border px-5 py-20 h-full">
        <legend class="text-center px-5">
          <i class="pi pi-graduation-cap" style="font-size: 2.5rem" />
        </legend>
        <p class="text-2xl font-extralight text-center">
          studied Bachelor of Science in Information Technology at Silliman University
          <br />
        </p>
      </fieldset>
    </div>

    <div class="w-1/3 max-sm:w-full flex-grow" id="content-2">
      <fieldset class="border px-5 py-20 h-full">
        <legend class="text-center px-5">
          <i class="pi pi-cog" style="font-size: 2.5rem" />
        </legend>
        <p class="text-2xl font-extralight text-center">
          a web-developer backed with skills in Vue.js, Laravel, and PHP
        </p>
      </fieldset>
    </div>

    <div class="w-1/3 max-sm:w-full flex-grow" id="content-3">
      <fieldset class="border px-5 py-20 h-full">
        <legend class="text-center px-5">
          <i class="pi pi-list-check" style="font-size: 2.5rem" />
        </legend>
        <p class="text-2xl font-extralight text-center">
          aspires to be a full-stack developer and learn more in the wide variety of technology
        </p>
      </fieldset>
    </div>
  </div>
</template>

<script></script>

<style lang="css" scoped>
#main {
  animation: fadeIn ease 1s;
}
#content-1 {
  animation: fadeIn ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

#content-2 {
  animation: fadeIn ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

#content-3 {
  animation: fadeIn ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
