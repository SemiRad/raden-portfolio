<template>
  <div class="w-full h-full p-20" id="main">
    <div class="w-full h-full flex justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <img src="/img/og.png" alt="Raden" class="w-60 rounded-full mb-5" />
        <div class="font-extrabold text-6xl font-outfit text-center max-sm:text-xl">
          RADEN ACOMPAÑADO
        </div>
        <div class="w-full flex flex-row gap-5 justify-center items-center mt-8 max-sm:flex-col">
          <div class="hover:scale-110 ease-in-out duration-300">
            <button class="border-2 rounded-lg p-2 flex justify-center items-center">
              <a
                class="pi pi-linkedin"
                style="font-size: 2.5rem"
                href="https://www.linkedin.com/in/raden-acompanado-9ba619287/"
                target="_blank"
              />
            </button>
          </div>
          <div class="hover:scale-110 ease-in-out duration-300">
            <button class="border-2 rounded-lg p-2 flex justify-center items-center">
              <a
                class="pi pi-discord"
                style="font-size: 2.5rem"
                href="https://discord.gg/ffd3kubdqp"
                target="_blank"
              />
            </button>
          </div>
          <div class="hover:scale-110 ease-in-out duration-300">
            <button class="border-2 rounded-lg p-2 flex justify-center items-center">
              <a
                class="pi pi-github"
                style="font-size: 2.5rem"
                href="https://github.com/SemiRad"
                target="_blank"
              />
            </button>
          </div>
          <div class="hover:scale-110 ease-in-out duration-300">
            <button class="border-2 rounded-lg p-2 flex justify-center items-center">
              <a
                class="pi pi-envelope"
                style="font-size: 2.5rem"
                href="mailto:radenacompanado@gmail.com"
                target="_blank"
              />
            </button>
          </div>
        </div>
      </div>
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
