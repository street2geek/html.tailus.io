import type { Code } from "src/types";

const htmlCode = `<section class="py-32 bg-white dark:bg-transparent">
    <div class="mx-auto max-w-5xl space-y-12 px-6">
        <h2 class="text-title max-w-xl text-4xl font-medium lg:text-5xl">The Tailus UI ecosystem, products and platforms.</h2>
        <div class="grid gap-6 divide-y border-y *:py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:*:py-12">
            <div class="space-y-6 sm:pr-6 lg:pr-12">
                <h3 class="font-medieum text-title text-xl">Products</h3>
                <p class="text-body">Gemini is evolving to be more than just the models. <span class="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>
                <div class="relative pt-6">
                    <div class="absolute inset-0 z-1 bg-linear-to-tl from-white dark:from-gray-950"></div>
                    <img class="grayscale" src="https://oxymor-st.tailus.io/_astro/bars.DEh8rxfi_2hxS64.webp" alt="" />
                </div>
            </div>
            <div class="space-y-6 sm:pl-6 lg:pl-12">
                <h3 class="font-medieum text-title text-xl">Platforms</h3>
                <p class="text-body">Gemini is evolving to be more than just the models. <span class="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>

                <div class="relative pt-6">
                    <div class="absolute inset-0 z-1 bg-linear-to-tl from-white dark:from-gray-950"></div>
                    <img class="grayscale" src="https://oxymor-st.tailus.io/_astro/areas.CthgT_WU_Z1eTdMG.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function ContentSection(){
    return (
        <section className="bg-white dark:bg-transparent py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <h2 className="text-title max-w-xl text-4xl font-medium lg:text-5xl">The Tailus UI ecosystem, products and platforms.</h2>
                <div className="grid gap-6 divide-y border-y *:py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:*:py-12">
                    <div className="space-y-6 sm:pr-6 lg:pr-12">
                        <h3 className="font-medieum text-title text-xl">Products</h3>
                        <p className="text-body">Gemini is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>
                        <div className="relative pt-6">
                            <div className="absolute inset-0 z-1 bg-linear-to-tl from-white dark:from-gray-950"></div>
                            <img className="grayscale" src="https://oxymor-st.tailus.io/_astro/bars.DEh8rxfi_2hxS64.webp" alt="" />
                        </div>
                    </div>
                    <div className="space-y-6 sm:pl-6 lg:pl-12">
                        <h3 className="font-medieum text-title text-xl">Platforms</h3>
                        <p className="text-body">Gemini is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>

                        <div className="relative pt-6">
                            <div className="absolute inset-0 z-1 bg-linear-to-tl from-white dark:from-gray-950"></div>
                            <img className="grayscale" src="https://oxymor-st.tailus.io/_astro/areas.CthgT_WU_Z1eTdMG.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const gridContentCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}