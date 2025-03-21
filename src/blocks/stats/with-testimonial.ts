import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl space-y-12 px-6">
        <div class="relative z-10 max-w-xl space-y-6">
            <h2 class="text-title text-4xl font-medium lg:text-5xl">The Gemini ecosystem brings together our models.</h2>
            <p class="text-body">Gemini is evolving to be more than just the models. <span class="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div>
                <p class="text-body">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>
                <div class="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                    <div class="space-y-4">
                        <div class="bg-gradient-to-r from-[--title-text-color] to-gray-600 bg-clip-text text-5xl font-bold text-transparent dark:to-gray-800">+1200</div>
                        <p class="text-body">Stars on GitHub</p>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-gradient-to-r from-[--title-text-color] to-gray-600 bg-clip-text text-5xl font-bold text-transparent dark:to-gray-800">+500</div>
                        <p class="text-body">Powered Apps</p>
                    </div>
                </div>
            </div>
            <div class="relative">
                <blockquote class="text-blockquote">
                    <p>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                    <div class="mt-6 space-y-3">
                        <cite class="text-title font-medium">John Doe, CEO</cite>
                        <img class="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function StatsSection(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-title text-4xl font-medium lg:text-5xl">The Gemini ecosystem brings together our models.</h2>
                    <p className="text-body">Gemini is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p className="text-body">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-[--title-text-color] to-gray-600 bg-clip-text text-5xl font-bold text-transparent dark:to-gray-800">+1200</div>
                                <p className="text-body">Stars on GitHub</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-[--title-text-color] to-gray-600 bg-clip-text text-5xl font-bold text-transparent dark:to-gray-800">+500</div>
                                <p className="text-body">Powered Apps</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="text-blockquote">
                            <p>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="text-title font-medium">John Doe, CEO</cite>
                                <img className="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const testimonialCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}