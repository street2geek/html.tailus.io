import type { Code } from "src/types";

const htmlCode = `<section>
    <div class="py-32">
        <div class="mx-auto px-6 max-w-5xl">
            <div class="text-center">
                <h2 class="text-3xl text-title font-semibold">Quickstart with boilerplates</h2>
                <p class="mt-6 text-body">Harum quae dolore inventore repudiandae? orrupti aut temporibus ariatur.</p>
            </div>
            <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="relative group overflow-hidden card variant-outlined">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-linear-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                    <div class="relative">
                        <div class="badge variant-outlined flex relative *:relative *:size-6 *:m-auto size-12 ">
                            <svg class="text-title" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
                                <defs>
                                    <linearGradient id="deviconAstro0" x1="882.997" x2="638.955" y1="27.113" y2="866.902" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="currentColor"/>
                                        <stop offset="1" stop-color="currentColor"/>
                                    </linearGradient>
                                    <linearGradient id="deviconAstro1" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="#ff1639"/>
                                        <stop offset="1" stop-color="#ff1639" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#deviconAstro0)" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"/>
                                <path fill="#ff5d01" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"/>
                                <path fill="url(#deviconAstro1)" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"/>
                            </svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-(--card-border-radius)">
                            <p class="text-body">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>

                        <div class="flex gap-3 -mb-(--card-padding) py-4 border-t">
                            <a href="#" download="/" class="group btn variant-soft sz-sm">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                            </a>
                            <a href="https://github.com/tailus-ui" class="btn variant-soft sz-sm icon-only">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div href="#" class="relative group overflow-hidden card variant-outlined">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-linear-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                    <div class="relative">
                        <div class="badge variant-outlined flex relative *:relative *:size-6 *:m-auto size-12 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 263"><defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stop-color="#249361"/><stop offset="100%" stop-color="#3ecf8e"/></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"/><stop offset="100%" stop-opacity="0"/></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"/><path fill="url(#logosSupabaseIcon1)" fill-opacity="0.2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"/><path fill="#3ecf8e" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"/></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-(--card-border-radius)">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>

                        <div class="flex gap-3 -mb-(--card-padding) py-4 border-t">
                            <a href="#" download="/" class="group btn variant-soft sz-sm">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                            </a>
                            <a href="https://github.com/tailus-ui" class="btn variant-soft sz-sm icon-only">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden card variant-outlined">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-linear-to-b from-danger-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                    <div class="relative">
                        <div class="badge variant-outlined flex relative *:relative *:size-6 *:m-auto size-12 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.95em" height="1em" viewBox="0 0 256 271"><defs><linearGradient id="logosAngularIcon0" x1="25.071%" x2="96.132%" y1="90.929%" y2="55.184%"><stop offset="0%" stop-color="#e40035"/><stop offset="24%" stop-color="#f60a48"/><stop offset="35.2%" stop-color="#f20755"/><stop offset="49.4%" stop-color="#dc087d"/><stop offset="74.5%" stop-color="#9717e7"/><stop offset="100%" stop-color="#6c00f5"/></linearGradient><linearGradient id="logosAngularIcon1" x1="21.863%" x2="68.367%" y1="12.058%" y2="68.21%"><stop offset="0%" stop-color="#ff31d9"/><stop offset="100%" stop-color="#ff5be1" stop-opacity="0"/></linearGradient></defs><path fill="url(#logosAngularIcon0)" d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"/><path fill="url(#logosAngularIcon1)" d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"/></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-(--card-border-radius)">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                        <div class="flex gap-3 -mb-(--card-padding) py-4 border-t">
                            <a href="#" download="/" class="group btn variant-soft sz-sm">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                            </a>
                            <a href="https://github.com/tailus-ui" class="btn variant-soft sz-sm icon-only">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden card variant-outlined">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-linear-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                    <div class="relative">
                        <div class="badge variant-outlined flex relative *:relative *:size-6 *:m-auto size-12 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"/></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-(--card-border-radius)">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                        <div class="flex gap-3 -mb-(--card-padding) py-4 border-t">
                            <a href="#" download="/" class="group btn variant-soft sz-sm">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                            </a>
                            <a href="https://github.com/tailus-ui" class="btn variant-soft sz-sm icon-only">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden card variant-outlined">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-linear-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                    <div class="relative">
                        <div class="badge variant-outlined flex relative *:relative *:size-6 *:m-auto size-12 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.73em" height="1em" viewBox="0 0 256 351"><defs><filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"/><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/></filter><filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"/><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/></filter><path id="logosFirebase2" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"/><path id="logosFirebase3" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"/></defs><path fill="#ffc24a" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"/><use fill="#ffa712" fill-rule="evenodd" href="#logosFirebase2"/><use filter="url(#logosFirebase0)" href="#logosFirebase2"/><path fill="#f4bd62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"/><use fill="#ffa50e" fill-rule="evenodd" href="#logosFirebase3"/><use filter="url(#logosFirebase1)" href="#logosFirebase3"/><path fill="#f6820c" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"/><path fill="#fde068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"/><path fill="#fcca3f" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"/><path fill="#eeab37" d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"/></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-(--card-border-radius)">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                        <div class="flex gap-3 -mb-(--card-padding) py-4 border-t">
                            <a href="#" download="/" class="group btn variant-soft sz-sm">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                            </a>
                            <a href="https://github.com/tailus-ui" class="btn variant-soft sz-sm icon-only">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden card variant-outlined">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-linear-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                    <div class="relative">
                        <div class="badge variant-outlined flex relative *:relative *:size-6 *:m-auto size-12 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0080ff" d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"/></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-(--card-border-radius)">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                        <div class="flex gap-3 -mb-(--card-padding) py-4 border-t">
                            <a href="#" download="/" class="group btn variant-soft sz-sm">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                            </a>
                            <a href="https://github.com/tailus-ui" class="btn variant-soft sz-sm icon-only">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `import React from 'react';

export default function IntegrationsSection() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto px-6 max-w-5xl">
                    <div className="text-center">
                        <h2 className="text-3xl text-title font-semibold">Quickstart with boilerplates</h2>
                        <p className="mt-6 text-body">Harum quae dolore inventore repudiandae? orrupti aut temporibus ariatur.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <IntegrationCard
                            title="React"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                            icon={<IntegrationIcon />}
                        />
                        <IntegrationCard
                            title="Vue"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                            icon={<IntegrationIcon />}
                        />
                        <IntegrationCard
                            title="Angular"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                            icon={<IntegrationIcon />}
                        />
                        <IntegrationCard
                            title="Astro"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                            icon={<IntegrationIcon />}
                        />
                        <IntegrationCard
                            title="Svelte"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                            icon={<IntegrationIcon />}
                        />
                        <IntegrationCard
                            title="DigitalOcean"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                            icon={<IntegrationIcon />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const DownloadIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
    );
}

const GitHubIcon = () => {
    return (
        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
        </svg>
    );
}

const IntegrationIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
            <path fill="#61dafb" d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0" />
        </svg>
    )
}

const IntegrationCard = (
    { title, description, icon, downloadLink = "/", sourceCodeLink = "https://github.com/tailus-ui"}: 
    { title: string, description: string, icon: JSX.Element, downloadLink?: string, sourceCodeLink?: string }
) => {
    return (
        <div className="relative group overflow-hidden card variant-outlined">
            <div aria-hidden="true" className="inset-0 absolute aspect-video rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-white blur-2xl opacity-0 group-hover:opacity-5"></div>
            <div className="relative">
                <h3 className="sr-only">{title}</h3>
                <div data-shade="glassy" className="badge variant-outlined flex relative bg-ui *:relative *:size-6 *:m-auto size-12 ">
                    {icon}
                </div>

                <div className="mt-6 pb-6 rounded-b-(--card-border-radius)">
                    <p className="text-gray-700 dark:text-gray-300">{description}</p>
                </div>

                <div className="flex gap-3 -mb-(--card-padding) py-4 border-t">
                    <a href={downloadLink} download="/" className="group btn variant-soft sz-sm">
                        <span>Download</span>
                        <DownloadIcon />
                    </a>
                    <a href={sourceCodeLink} className="btn variant-soft sz-sm icon-only">
                        <span className="sr-only">Source Code</span>
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}`

const nuxtjsCode = ``

export const integrationFirstCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}