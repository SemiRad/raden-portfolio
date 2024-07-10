<template>
  <div class="w-full h-full flex flex-col items-center justify-center mt-10 bg-zinc-950">
    <div class="w-3/4 max-sm:w-full">
      <Carousel
        :value="vrImg"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="5000"
        :pt="{
          indicatorButton: {
            class: 'bg-white'
          }
        }"
      >
        <template #item="slotProps">
          <div class="mb-4">
            <div class="relative mx-auto container">
              <img
                :src="slotProps.data.imageUrl"
                :alt="slotProps.data.name"
                class="w-full rounded-md"
              />
            </div>
          </div>
        </template>
      </Carousel>
      <div
        class="font-bold flex flex-col items-center justify-center text-4xl text-center p-10 gap-5"
      >
        <div class="uppercase">VerticalRise</div>
        <div class="font-light text-xl w-5/12 max-sm:w-full">
          <div>
            an e-commerce website for the local Dumaguete clothing brand named Vertical Rise.
          </div>
          <div class="mt-5">
            This was the first fully functional project I made with the Laravel framework, where I
            focused on working at the back-end development for the whole system and developed
            front-end design for the system administrator.
          </div>
          <Divider />
          <div class="mt-5 font-semibold">Collaborators:</div>
          <div class="mt-5 text-2xl">Gerome Jan Dolorfino</div>
          <div class="font-thin text-lg">
            Front-end Developer <br />
            UI/UX Designer
          </div>
          <Divider />
          <div class="mt-5 font-semibold">Project Link:</div>
          <a
            href="https://drive.google.com/file/d/1FaN_od_UWlFu9vHVFosRLXOZYzU0YfPl/view?usp=drive_link"
            target="_blank"
            ><i class="pi pi-google text-black bg-white mt-5 border rounded-full p-3"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="w-3/4 max-sm:w-full">
      <Carousel
        :value="ttImg"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="5000"
        :pt="{
          indicatorButton: {
            class: 'bg-white'
          }
        }"
      >
        <template #item="slotProps">
          <div class="mb-4">
            <div class="relative mx-auto container">
              <img
                :src="slotProps.data.imageUrl"
                :alt="slotProps.data.name"
                class="w-full rounded-md"
              />
            </div>
          </div>
        </template>
      </Carousel>
      <div
        class="font-bold flex flex-col items-center justify-center text-4xl text-center p-10 gap-5"
      >
        <div class="uppercase">TaskTackles</div>
        <div class="font-light text-xl w-5/12 max-sm:w-full">
          <div>a web-application for service providers.</div>
          <div class="mt-5">
            Living in a small town with evidential decline of job opportunities, I was part of a
            community where a lot of people where lacking in terms of financial sources. Initially,
            it was an idea to create an application to cater to service providers (household chores
            and short-term tasks) by giving them opportunities to earn an income.
          </div>
          <div class="mt-5">
            This was presented as a Capstone project in line with the requirements in attaining a
            degree. I developed majority of the front-end development, design, and mobile devlopment
            of the web-application. system.
          </div>
          <Divider />
          <div class="mt-5 font-semibold">Collaborators:</div>
          <div class="mt-5 text-2xl">Elaine Mae Banogon</div>
          <div class="font-thin text-lg">Documentation <br /></div>
          <div class="mt-5 text-2xl">Cherry Anne Dagunan</div>
          <div class="font-thin text-lg">
            Back-end Developer <br />
            Front-end Developer
          </div>
          <Divider />
          <div class="mt-5 font-semibold">Project Link:</div>
          <a href="https://github.com/SemiRad/tasktackles_capstone" target="_blank"
            ><i class="pi pi-github text-black bg-white mt-5 border rounded-full p-3"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Divider from 'primevue/divider'
import { ref } from 'vue'

const vrImg = ref([
  {
    imageUrl: '/img/vr/login.png'
  },
  {
    imageUrl: '/img/vr/home.png'
  },
  {
    imageUrl: '/img/vr/shirts.png'
  }
])

const ttImg = ref([
  {
    imageUrl: '/img/tt/landing.png'
  },
  {
    imageUrl: '/img/tt/login.png'
  },
  {
    imageUrl: '/img/tt/task.png'
  }
])

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>

<style>
.container {
  height: 100%;
  overflow: hidden;
}

.container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
