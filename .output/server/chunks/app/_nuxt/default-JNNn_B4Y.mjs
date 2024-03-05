import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {
  data() {
    return {
      dropdowns: {
        language: false,
        currency: false,
        login: false
      },
      selectedLanguage: "ENG",
      selectedCurrency: "ZAR",
      selectedLogin: "Login"
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
      for (const key in this.dropdowns) {
        if (key !== dropdown) {
          this.dropdowns[key] = false;
        }
      }
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.dropdowns.language = false;
    },
    selectCurrency(currency) {
      this.selectedCurrency = currency;
      this.dropdowns.currency = false;
    },
    selectLoginOption(option) {
      this.selectedLogin = option;
      this.dropdowns.login = false;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "z-50 flex w-full flex-wrap bg-white pb-10 text-base sm:flex-col sm:pb-0 fixed top-0" }, _attrs))}><div class="bg-white"><div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-3"><div class="flex flex-col sm:flex-row justify-between items-center py-2w-full border-b shadow-md dark:border-gray-50"><p class="text-xs md:text-sm font-serif mb-2 sm:mb-0">Free shipping on orders over R1000</p><div class="flex items-center space-x-4"><div class="relative"><button type="button" class="flex items-center border-r border-gray-300 pr-2 font-serif text-black hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm"><svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg> ${ssrInterpolate($data.selectedLanguage)}</button>`);
  if ($data.dropdowns.language) {
    _push(`<div class="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md text-xs md:text-sm"><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">ENG</button><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">FR</button><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">ES</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="relative"><button type="button" id="currencyButton" class="flex items-center border-r border-gray-300 pr-2 font-serif text-black hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm"><svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg> ${ssrInterpolate($data.selectedCurrency)}</button>`);
  if ($data.dropdowns.currency) {
    _push(`<div class="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md dropdown text-xs md:text-sm"><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">ZAR</button><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">USD</button><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">EUR</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="relative"><button type="button" class="flex items-center font-serif text-gray-800 hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm"><svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg> ${ssrInterpolate($data.selectedLogin)}</button>`);
  if ($data.dropdowns.login) {
    _push(`<div class="absolute hidden mt-2 bg-white border border-gray-300 rounded-md shadow-md dropdown text-xs md:text-sm"><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</button><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In</button><button type="button" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Register</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="flex justify-between items-center py-2 mt-2 md:mt-8 mb-8"><button class="text-gray-600 hover:text-gray-300 focus:outline-none"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button><div class="flex items-center justify-center flex-grow"><a href="#" class="font-serif font-bold text-lg md:hidden">FootFlair</a><a href="#" class="font-serif font-bold text-lg hidden md:block lg:block xl:block">FootFlair</a></div><div class="flex items-center space-x-4"><a href="#" class="flex items-center font-serif text-gray-800 hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm"><svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Cart </a><a href="#" class="flex items-center font-serif text-gray-800 hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm"><svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> Search </a></div></div></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><footer class="w-full border-t border-gray-200 dark:border-gray-700"><div class="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:grid-cols-5 lg:px-8"><div><h4 class="font-serif text-xs font-extrabold uppercase text-gray-900 dark:text-gray-800">Company</h4><div class="mt-3 grid space-y-3 text-sm font-thin"><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">About</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Our Shops</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">News</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Delivery</a></p></div></div><div><h4 class="font-serif text-xs font-semibold uppercase text-gray-900 dark:text-gray-800">Help</h4><div class="mt-3 grid space-y-3 text-sm font-thin"><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Contact us</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">F.A.Q</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Help</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Terms</a></p></div></div><div><h4 class="font-serif text-xs font-semibold uppercase text-gray-900 dark:text-gray-800">Get Socials</h4><div class="mt-3 grid space-y-3 text-sm font-thin"><p><a href="#" class="flex items-center gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path></svg> Twitter-X </a></p><p><a href="#" class="flex items-center gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path></svg> Facebook </a></p><p><a href="#" class="flex items-center gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path></svg> Instagram </a></p></div></div><div><h4 class="font-serif text-xs font-semibold uppercase text-gray-900 dark:text-gray-800">Contact</h4><div class="mt-3 grid space-y-3 text-sm font-light"><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">123 Maple Street<br>Cityville, Stateland<br>Zip Code: 56789</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#"><span class="font-bold">Phone:</span>+27 676 750 537</a></p><p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#"><span class="font-bold">Email:</span>support@domail.com</a></p></div></div></div></footer><div class="bg-gray-800 px-3 py-4 text-white"><div class="container mx-auto flex flex-wrap items-center justify-between"><div class="mb-8 w-full md:mb-0 md:w-1/2 md:text-center"><p class="text-xs text-gray-400 md:text-sm">Copyright 2024 \xA9 All Rights Reserved</p></div><div class="w-full text-right items-center md:w-1/2"><p class="mb-2 text-xs text-gray-400 underline md:text-sm"> Subscribe to our newsletter: <span class="inline-block border-b border-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path></svg></span></p></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_web_header = __nuxt_component_0;
  const _component_web_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_web_header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_web_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-JNNn_B4Y.mjs.map
