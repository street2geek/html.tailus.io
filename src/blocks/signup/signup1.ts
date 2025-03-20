import type { Code } from "src/types";

const htmlCode = `<section class="flex min-h-screen">
    <form action="" class="card bg-ui tls-shadow-md m-auto h-fit w-full max-w-sm p-1">
        <div class="p-8">
            <div class="text-center">
                <h1 class="text-title mb-1 text-xl font-semibold">Create an Account</h1>
                <p class="text-sm">Welcome back! Create an account</p>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3">
                <button type="button" class="btn sz-sm variant-outlined">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                        ><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg
                    >
                    <span class="btn-label">Google</span>
                </button>
                <button type="button" class="btn sz-sm variant-outlined">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"></path></svg>
                    <span class="btn-label">Microsoft</span>
                </button>
            </div>

            <hr class="my-8 border-dashed" />

            <div class="space-y-8">
                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="field">
                            <label for="name" class="text-title text-sm">First name</label>
                            <input type="text" required name="name" id="name" class="input sz-md variant-outlined" />
                        </div>
                        <div class="field">
                            <label for="lname" class="text-title text-sm">Last name</label>
                            <input type="text" required name="lname" id="lname" class="input sz-md variant-outlined" />
                        </div>
                    </div>
                    <div class="field">
                        <label for="email2" class="text-title text-sm"> Username</label>
                        <input type="email" required name="email2" id="email2" class="input sz-md variant-outlined" />
                    </div>

                    <div class="field">
                        <label for="pwd" class="text-title text-sm"> Password</label>
                        <input type="password" required name="pwd" id="pwd" class="input sz-md variant-outlined" />
                    </div>
                </div>

                <button class="btn variant-primary sz-md w-full">Sign Up</button>
            </div>
        </div>

        <div data-shade="925" class="card variant-soft rounded-[calc(var(--card-radius)-4px)] dark:bg-(--ui-bg)!">
            <p class="text-center text-sm">
                Already have an account ?
                <a href="#" class="link intent-neutral variant-underlined">Login</a>
            </p>
        </div>
    </form>
</section>`

const nextjsCode = `import Link from 'next/link';

export default function LoginPage(){
    return (
        <section className="flex min-h-screen">
            <form action="" className="card bg-ui tls-shadow-md m-auto h-fit w-full max-w-sm p-1">
                <div className="p-8">
                    <div className="text-center">
                        <h1 className="text-title mb-1 text-xl font-semibold">Create an Account</h1>
                        <p className="text-sm">Welcome back! Create an account</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button type="button" className="btn sz-sm variant-outlined">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                ><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg
                            >
                            <span className="btn-label">Google</span>
                        </button>
                        <button type="button" className="btn sz-sm variant-outlined">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"></path></svg>
                            <span className="btn-label">Microsoft</span>
                        </button>
                    </div>

                    <hr className="my-8 border-dashed" />

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="field">
                                    <label htmlFor="name" className="text-title text-sm">Firstname</label>
                                    <input type="text" required name="name" id="name" className="input sz-md variant-mixed" />
                                </div>
                                <div className="field">
                                    <label htmlFor="lname" className="text-title text-sm">Lastname</label>
                                    <input type="text" required name="lname" id="lname" className="input sz-md variant-mixed" />
                                </div>
                            </div>

                            <div className="field">
                                <label htmFor="email2" className="text-title text-sm"> Username</label>
                                <input type="email" required name="email2" id="email2" className="input sz-md variant-mixed" />
                            </div>

                            <div className="field">
                                <div className="flex justify-between">
                                    <label htmFor="pwd" className="text-title text-sm"> Password</label>
                                    <Link href="#" className="link intent-info variant-ghost text-sm"> Forgot your Password ?</Link>
                                </div>
                                <input type="password" required name="pwd" id="pwd" className="input sz-md variant-mixed" />
                            </div>
                        </div>

                        <button className="btn variant-primary sz-md w-full">Sign In</button>
                    </div>
                </div>

                <div data-shade="925" className="card variant-soft rounded-[calc(var(--card-radius)-4px)] dark:bg-(--ui-bg)!">
                    <p className="text-center text-sm">
                        Already have an account ?
                        <Link href="#" className="link intent-neutral variant-underlined">Login</Link>
                    </p>
                </div>
            </form>
        </section>
    )
}`

const nuxtjsCode = `<template>
    <section class="flex min-h-screen">
        <form action="" class="card bg-ui tls-shadow-md m-auto h-fit w-full max-w-sm p-1">
            <div class="p-8">
                <div class="text-center">
                    <h1 class="text-title mb-1 text-xl font-semibold">Create an Account</h1>
                    <p class="text-sm">Welcome back! Create an account</p>
                </div>

                <div class="mt-6 grid grid-cols-2 gap-3">
                    <button type="button" class="btn sz-sm variant-outlined">
                        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                            ><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg
                        >
                        <span class="btn-label">Google</span>
                    </button>
                    <button type="button" class="btn sz-sm variant-outlined">
                        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"></path></svg>
                        <span class="btn-label">Microsoft</span>
                    </button>
                </div>

                <hr class="my-8 border-dashed" />

                <div class="space-y-8">
                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div class="field">
                                <label for="name" class="text-title text-sm">Firstname</label>
                                <input type="text" required name="name" id="name" class="input sz-md variant-mixed" />
                            </div>
                            <div class="field">
                                <label for="lname" class="text-title text-sm">Lastname</label>
                                <input type="text" required name="lname" id="lname" class="input sz-md variant-mixed" />
                            </div>
                        </div>

                        <div class="field">
                            <label for="email2" class="text-title text-sm"> Username</label>
                            <input type="email" required name="email2" id="email2" class="input sz-md variant-mixed" />
                        </div>

                        <div class="field">
                            <label for="pwd" class="text-title text-sm"> Password</label>
                            <input type="password" required name="pwd" id="pwd" class="input sz-md variant-mixed" />
                        </div>
                    </div>

                    <button class="btn variant-primary sz-md w-full">Sign In</button>
                </div>
            </div>

            <div data-shade="925" class="card variant-soft rounded-[calc(var(--card-radius)-4px)] dark:bg-(--ui-bg)!">
                <p class="text-center text-sm">
                    Already have an account ?
                    <a href="#" class="link intent-neutral variant-underlined">Login</a>
                </p>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'SignUpPage',
    }
</script>`

export const signupCode1: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}