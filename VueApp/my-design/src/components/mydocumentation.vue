<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Support</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a :href="link.href" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="flex">
  <div class="flex flex-wrap w-1/2 p-5 m-5">
 <h2>Vite</h2>
  <p class="text-1xl">Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.<br /> It consists of two major parts: <ul class="list-disc ml-5"><li>A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR.) </li><li> A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.</li></ul></p>
    <span class="mt-8 w-full text-center"><a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a></span>
  </div>
  <div class="flex flex-wrap w-1/2 p-5 m-5"><h2>Vue3</h2> 
  <p class="text-1xl">Vue3 builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation. Truly reactive, compiler-optimized rendering system that rarely requires manual optimization. A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
     <span class="mt-8 w-full text-center"><a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a></span>
  </div>
</div>
</template>

<script>
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]

export default {
  setup() {
    return {
      supportLinks,
    }
  },
}
</script>