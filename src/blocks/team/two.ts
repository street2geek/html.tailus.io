import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 class="text-title mb-12 text-center text-3xl font-semibold md:text-4xl">Team</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">M.Irung <span class="text-caption"> - Creator</span></span>
            </div>
            <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">T.Balick <span class="text-caption"> - Frontend Dev</span></span>
            </div>
            <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">B.Ngandu <span class="text-caption"> - Backend Dev</span></span>
            </div>
            <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">G.Lukose <span class="text-caption"> - Frontend Dev</span></span>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function TeamSection(){
    return (
        <section class="py-32">
            <div class="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 class="text-title mb-12 text-center text-3xl font-semibold md:text-4xl">Team</h2>
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                        <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">M.Irung <span class="text-caption"> - Creator</span></span>
                    </div>
                    <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/68236786?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                        <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">T.Balick <span class="text-caption"> - Frontend Dev</span></span>
                    </div>
                    <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                        <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">B.Ngandu <span class="text-caption"> - Backend Dev</span></span>
                    </div>
                    <div class="bg-ui rounded-card border p-1 shadow-2xs shadow-gray-950/5">
                        <img class="aspect-square rounded-[calc(var(--card-radius)-4px)] object-cover" src="https://avatars.githubusercontent.com/u/99137927?v=4" alt="Méschac Irung" height="460" width="460" loading="lazy" />
                        <span class="text-title block px-1 pb-0.5 pt-1.5 text-xs">G.Lukose <span class="text-caption"> - Frontend Dev</span></span>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const twoCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}