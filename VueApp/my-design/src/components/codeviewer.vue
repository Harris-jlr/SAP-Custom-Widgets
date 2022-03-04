<template>
  <div class="flex items-center mb-3 whitespace-nowrap">
    <h2 id="heading-230be426f17b26e949896d17c505e0d3" class="font-medium text-gray-900 truncate">
      <a href="#component-230be426f17b26e949896d17c505e0d3" class="mr-1">Simple</a>
    </h2>
            <div class="flex-none flex items-center ml-auto pl-4 sm:pl-6">
      <div class="group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200">
        <button x-ref="preview" type="button" class="flex focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-md focus:outline-none focus-visible:ring-offset-gray-100" @click="activeTab = 'preview'" :tabindex="activeTab === 'preview' ? '0' : '-1'" @keydown.arrow-left="activeTab = 'code'" @keydown.arrow-right="activeTab = 'code'" tabindex1="0">
          <span x-show="false" class="p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium bg-white shadow-sm ring-1 ring-black ring-opacity-5" style="display: none;">
            <svg aria-hidden="true" width="20" height="20" fill="none" class="lg:mr-2 text-teal-500">
              <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle cx="10" cy="10" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
            </svg>
            <span class="text-gray-900 sr-only lg:not-sr-only">Preview</span>
          </span>
          <span x-show="true" class="p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium bg-white shadow-sm ring-1 ring-black ring-opacity-5" :class="activeTab === 'preview' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''">
            <svg aria-hidden="true" width="20" height="20" fill="none" class="lg:mr-2 text-teal-500" :class="activeTab === 'preview' ? 'text-teal-500' : 'text-gray-500 group-hover:text-gray-900'">
              <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle cx="10" cy="10" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
            </svg>
            <span class="sr-only lg:not-sr-only text-gray-900" :class="activeTab === 'preview' ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">Preview</span>
          </span>
        </button>
        <button x-ref="code" type="button" class="ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100" :class="activeTab === 'code' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''" @click="activeTab = 'code'" tabindex="-1" :tabindex2="activeTab === 'code' ? '0' : '-1'" @keydown.arrow-left="activeTab = 'preview'" @keydown.arrow-right="activeTab = 'preview'">
          <svg aria-hidden="true" width="20" height="20" fill="none" class="lg:mr-2 text-gray-500 group-hover:text-gray-900" :class="activeTab === 'code' ? 'text-teal-500' : 'text-gray-500 group-hover:text-gray-900'">
            <path d="M13.75 6.75l3.5 3.25-3.5 3.25M6.25 13.25L2.75 10l3.5-3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span class="sr-only lg:not-sr-only text-gray-600 group-hover:text-gray-900" :class="activeTab === 'code' ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">Code</span>
        </button>
      </div>

      <div class="hidden sm:block w-px h-6 bg-gray-200 ml-6"></div>

            <div class="relative hidden sm:block ml-2.5">
        <div x-show="false" aria-hidden="true" style="display: none;">
          <div class="absolute inset-0">
                          <select tabindex="-1" class="placeholder-html bg-transparent text-gray-900 rounded-none border-0 form-select p-0 pl-3.5 pr-[1.875rem] h-9 w-full sm:text-sm font-medium pointer-events-none" style="background-image:none;">
                <option>HTML</option>
              </select>
                          <select tabindex="-1" class="placeholder-react bg-transparent text-gray-900 rounded-none border-0 form-select p-0 pl-3.5 pr-[1.875rem] h-9 w-full sm:text-sm font-medium pointer-events-none" style="background-image:none;">
                <option>React</option>
              </select>
                          <select tabindex="-1" class="placeholder-vue bg-transparent text-gray-900 rounded-none border-0 form-select p-0 pl-3.5 pr-[1.875rem] h-9 w-full sm:text-sm font-medium pointer-events-none" style="background-image:none;">
                <option>Vue</option>
              </select>
                      </div>
        </div>
        <div style="opacity:1" :style="'opacity:1'">
          <select x-model="activeSnippet" class="bg-transparent text-gray-900 rounded-lg border-0 form-select p-0 pl-3.5 pr-[1.875rem] h-9 w-full sm:text-sm font-medium focus:shadow-none focus-visible:ring-2 focus-visible:ring-teal-500" style="background-image:none;">
                          <option value="html">HTML</option>
                          <option value="react">React</option>
                          <option value="vue">Vue</option>
                      </select>
        </div>
        <svg aria-hidden="true" viewBox="0 0 8 6" width="8" height="6" fill="none" class="absolute inset-y-0 right-3.5 h-full pointer-events-none">
          <path d="M7 1.5l-3 3-3-3" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      
      <button type="button" class="hidden sm:flex sm:items-center sm:justify-center relative w-9 h-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-gray-400 hover:text-gray-600 group ml-2.5" :style="copied ? 'color:#06B6D4' : ''" @click="navigator.clipboard.writeText(snippets.find(s=>s.language===activeSnippet).snippet).then(()=>{copied=true;clearTimeout(copyTimeout);copyTimeout=setTimeout(()=>{copied=false},1500)})" style="">
        <span class="sr-only">Copy code</span>
        <span x-show="copied" style="display:none" class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center" x-transition:enter="transform ease-out duration-200 transition origin-bottom" x-transition:enter-start="scale-95 translate-y-0.5 opacity-0" x-transition:enter-end="scale-100 translate-y-0 opacity-100" x-transition:leave="transition ease-in duration-100" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
          <span class="bg-gray-900 text-white rounded-md text-[0.625rem] leading-4 tracking-wide font-semibold uppercase py-1 px-3 filter drop-shadow-md">
            <svg aria-hidden="true" width="16" height="6" viewBox="0 0 16 6" class="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z" fill="currentColor"></path>
            </svg>
            Copied!
          </span>
        </span>
        <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" class="stroke-current transform group-hover:rotate-[-4deg] transition" :style="copied ? '--tw-rotate:-8deg;' : ''" style="">
          <path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <g :class="[copied ? '' : 'opacity-0', initialized ? 'transition-opacity' : '']" class="opacity-0 transition-opacity">
            <path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>