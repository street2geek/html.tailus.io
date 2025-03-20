export default `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        /* Border Radius */
        --card-radius: theme(borderRadius.xl);
        --btn-radius: var(--card-radius);
        --badge-radius: var(--btn-radius);
        --input-radius: var(--btn-radius);
        --avatar-radius: theme(borderRadius.full);
        --annonce-radius: var(--avatar-radius);

        /* Border Color */
        --ui-border-color: theme(colors.gray.200);
        --btn-border:theme(colors.gray.200);
        --badge-border : var(--btn-border);
        --input-border: var(--ui-border-color);
        --ui-disabled-border : theme(colors.gray.100);
        --ui-error-border : theme(colors.danger.600);
        --ui-success-border : theme(colors.success.600);
        --input-outline:theme(colors.primary.600);

        /* Background */

        --ui-bg: theme(colors.white/var(--ui-bg-opacity));
        --ui-soft-bg: theme(colors.gray.100);
        --overlay-bg: theme(colors.gray.950/0.25);
        --input-bg:var(--ui-soft-bg);
        --ui-disabled-bg : theme(colors.gray.100);

        /* Padding */
        --card-padding: theme("spacing[6]");

        /* Typography */
        --display-text-color: theme(colors.gray.950);
        --title-text-color: var(--display-text-color);
        --body-text-color: theme(colors.gray.700);
        --caption-text-color: theme(colors.gray.500);
        --placeholder-text-color: theme(colors.gray.400);

        /* Opacity */
        --ui-bg-opacity: 1;

        color : var(--body-text-color);

        @apply dark:[--ui-border-color:var(--color-gray-800)] dark:[--ui-disabled-bg:var(--color-gray-900)] dark:[--ui-bg:theme('colors.gray.900/var(--ui-bg-opacity)')] dark:[--ui-soft-bg:var(--color-gray-800)] dark:[--display-text-color:var(--color-white)] dark:[--body-text-color:var(--color-gray-300)] dark:[--placeholder-text-color:var(--color-gray-600)]
    }

    *{
        border-color: var(--ui-border-color);
    }

    button:disabled{
        border:none !important;
        background: var(--ui-disabled-bg) !important;
        background-image: none !important;
        box-shadow: none !important;
        color: var(--placeholder-text-color) !important;
        pointer-events: none !important;
        @apply before:hidden
    }

    a:focus-visible, button:focus-visible {
        @apply outline-2 outline-offset-2 focus-visible:outline outline-primary-600
    }

    input:user-invalid, textarea:user-invalid, select:user-invalid {
        --input-border: var(--ui-error-border);
        --ui-border-color: var(--ui-error-border);
        --input-outline : var(--ui-error-border);
        --title-text-color : theme(colors.danger.600);

        @apply dark:[--title-text-color:var(--color-danger-400)]
    }

    /* Data attributes */
    /* Rounded Data attributes */
    [data-rounded="none"] {
        --card-radius: theme(borderRadius.none);
        --avatar-radius: theme(borderRadius.none);
    }

    [data-rounded="default"] {
        --card-radius: theme("borderRadius.DEFAULT");
    }

    [data-rounded="small"] {
        --card-radius: theme("borderRadius.sm");
    }

    [data-rounded="medium"] {
        --card-radius: theme("borderRadius.md");
    }

    [data-rounded="large"] {
        --card-radius: theme("borderRadius.lg");
    }

    [data-rounded="xlarge"] {
        --card-radius: theme("borderRadius.xl");
    }

    [data-rounded="2xlarge"] {
        --card-radius: theme("borderRadius.2xl");
        --input-radius: theme("borderRadius.xl");
    }

    [data-rounded="3xlarge"] {
        --card-radius: theme("borderRadius.3xl");
        --input-radius: theme("borderRadius.xl");
    }
    
    [data-rounded="full"] {
        --card-radius: theme("borderRadius.3xl");
        --btn-radius: theme("borderRadius.full");
        --input-radius: theme("borderRadius.2xl");
    }

    /* Shade Data Attributes */

    [data-shade="glassy"] {
        --ui-bd-blur: theme("blur[2xl]");
        --ui-bg-opacity: 0.75;
        --ui-bg: theme("colors.white/var(--ui-bg-opacity)");

        @apply dark:[--ui-bg-opacity:0.5] dark:[--ui-border-color:var(--color-gray-50)]/10 dark:[--ui-bg:var(--color-gray-700)]/(--ui-bg-opacity) dark:[--ui-soft-bg:var(--color-gray-600)]/50
    }

    [data-shade="800"] {
        @apply dark:[--ui-border-color:var(--color-gray-700)] dark:[--ui-bg:var(--color-gray-800)] dark:[--ui-soft-bg:var(--color-gray-900)]
    }

    [data-shade="900"] {
        @apply dark:[--ui-border-color:var(--color-gray-800)] dark:[--ui-bg:var(--color-gray-900)] dark:[--ui-soft-bg:var(--color-gray-800)] 
    }

    [data-shade="950"] {
        @apply dark:[--ui-border-color:var(--color-gray-800)] dark:[--ui-bg:var(--color-gray-950)] dark:[--ui-soft-bg:var(--color-gray-800)]
    }
}

@layer utilities {
    /* Typography */
    .text-display {
        color : var(--display-text-color);
    }

    .text-title {
        color : var(--title-text-color);
    }

    .text-body {
        color : var(--body-text-color);
    }

    .text-caption {
        color : var(--caption-text-color)
    }

    .text-placeholder {
        color : var(--placeholder-text-color)
    }

    /* Border Radius */
    .rounded-card{
        border-radius: var(--card-radius);
    }

    .rounded-btn{
        border-radius: var(--btn-radius);
    }

    .rounded-badge{
        border-radius: var(--badge-radius);
    }

    .rounded-annonce{
        border-radius: var(--annonce-radius);
    }

    .rounded-input{
        border-radius: var(--input-radius);
    }

    .rounded-avatar{
        border-radius: var(--avatar-radius);
    }

    /* Background */
    .bg-ui{
        background: var(--ui-bg);
    }

    .bg-ui-soft{
        background: var(--ui-soft-bg);
    }

    .bg-overlay{
        background: var(--overlay-bg);
    }

    .tls-shadow, .tls-shadow-md, .tls-shadow-lg{
        --tw-shadow-color:theme(colors.gray.950/0.05)
    }

    /* Shadow */
    .tls-shadow {
        box-shadow:
        0 0 0 1px var(--ui-border-color),
        0 0.5px 0.5px -0.125px var(--tw-shadow-color),
        0 1px 1px -0.5px var(--tw-shadow-color),
        0 2px 2px -1px var(--tw-shadow-color),
        0 4px 4px -2px var(--tw-shadow-color),
        0 8px 8px -4px var(--tw-shadow-color);
    }

    .tls-shadow-md {
        box-shadow:
        0 0 0 1px var(--ui-border-color),
        0 1px 1px -0.25px var(--tw-shadow-color),
        0 2px 2px -0.5px var(--tw-shadow-color),
        0 4px 4px -1px var(--tw-shadow-color),
        0 8px 8px -2px var(--tw-shadow-color),
        0 16px 16px -4px var(--tw-shadow-color);
    }

    .tls-shadow-lg {
        box-shadow:
        0 0 0 1px var(--ui-border-color),
        0 2px 2px -0.5px var(--tw-shadow-color),
        0 4px 4px -1px var(--tw-shadow-color),
        0 8px 8px -2px var(--tw-shadow-color),
        0 16px 16px -4px var(--tw-shadow-color),
        0 32px 32px -8px var(--tw-shadow-color);
    }
}

@layer components {
    /* Typography */
    .text-blockquote {
        color: var(--body-text-color);
        @apply italic pl-4 border-l-2
    }

    .text-quote {
        color: var(--body-text-color);
        @apply italic pl-4 border-l-2
    }

    /* Button */

    .btn{
        @apply flex justify-center gap-2.5 items-center rounded-(--btn-radius) *:relative
    }

    .btn.variant-primary,.btn.variant-destructive,.btn.variant-neutral > .btn-label{
        @apply relative [text-shadow:_0_1px_0_var(--tw-shadow-color)]
    }

    .btn.variant-neutral > .btn-label{
        @apply dark:[text-shadow:none]
    }

    .btn.variant-neutral,.btn.variant-primary,.btn.variant-destructive{
        @apply transition-[filter] text-white duration-300 before:inset-0
    }

    .btn.variant-neutral,.btn.variant-primary,.btn.variant-destructive,.btn.variant-outlined{
        @apply relative before:absolute bg-linear-to-b shadow-sm before:rounded-[calc(var(--btn-radius)-1px)] before:border-t
    }

    .btn.variant-neutral,.btn.variant-primary,.btn.variant-destructive,.btn.variant-soft{
        @apply border
    }

    .btn.variant-neutral{
        @apply border-gray-800 from-gray-700 to-gray-900 shadow-gray-950/25 before:border-white/25 hover:brightness-125 active:brightness-75 dark:border-white dark:bg-white dark:from-transparent dark:to-transparent dark:hover:bg-white/75 dark:shadow-gray-950/5 dark:text-gray-950
    }

    .btn.variant-primary{
        @apply border-primary-700 from-primary-500 to-primary-600 shadow-primary-950/25 before:border-white/25 hover:brightness-110 active:brightness-95 dark:border-white/15 dark:from-primary-600 dark:to-primary-600 dark:before:border-transparent dark:shadow-primary-950/10
    }

    .btn.variant-destructive{
        @apply border-danger-700 from-danger-500 to-danger-600 shadow-danger-950/25 before:border-white/25 hover:brightness-110 active:brightness-95 dark:border-white/15 dark:from-danger-600 dark:to-danger-600 dark:before:border-transparent dark:shadow-danger-950/10
    }

    .btn.variant-outlined{
        @apply text-gray-950 from-gray-300/75 from-85% to-gray-400/50 before:inset-px before:border-t before:border-white before:bg-white before:transition-[background,border-color] before:duration-300 hover:before:bg-gray-100 active:before:bg-gray-200 dark:from-transparent dark:to-transparent dark:before:inset-0 dark:before:border dark:before:border-white/10 dark:before:bg-white/5 dark:hover:before:bg-white/10 dark:active:before:bg-white/15 dark:text-white
    }

    .btn.variant-soft{
        @apply border-transparent bg-gray-950/[0.07] transition-[background,border-color] duration-300 hover:border-gray-950/10 active:bg-gray-950/15 dark:bg-gray-500/15 dark:hover:border-white/10 dark:active:bg-gray-500/20
    }

    .btn.variant-ghost{
        @apply transition-[background] duration-300 hover:bg-gray-950/[0.07] active:bg-gray-950/15 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/20
    }

    .btn.sz-xs {
        @apply text-sm h-7 px-2.5
    }

    .btn.sz-sm {
        @apply text-sm h-8 px-3
    }

    .btn.sz-md{
        @apply text-sm h-9 px-3.5
    }

    .btn.sz-lg{
        @apply text-base h-10 px-4
    }

    .btn.sz-xl{
        @apply text-lg h-12 px-6
    }

    .btn.icon-only{
        @apply px-0
    }

    .btn.icon-only.sz-xs {
        @apply size-7
    }

    .btn.icon-only.sz-sm {
        @apply size-8
    }

    .btn.icon-only.sz-md{
        @apply size-9
    }

    .btn.icon-only.sz-lg{
        @apply size-10
    }

    .btn.icon-only.sz-xl{
        @apply size-12
    }
 
    /* Badge */

    .badge{
        @apply rounded-(--badge-radius) flex items-center gap-1.5 size-fit border
    }

    .badge.variant-neutral{
        @apply bg-gray-500/10 border-gray-500/15 text-(--body-text-color) dark:bg-gray-500/15 dark:border-gray-500/20
    }

    .badge.variant-info{
        @apply bg-info-500/15 border-info-500/15 text-info-700 dark:text-info-300 dark:border-info-500/20
    }

    .badge.variant-success{
        @apply bg-success-500/15 border-success-500/25 text-success-800 dark:text-success-300 dark:border-success-500/15
    }

    .badge.variant-warning{
        @apply bg-warning-500/15 border-warning-500/25 text-warning-800 dark:text-warning-200 dark:border-warning-500/15
    }

    .badge.variant-danger{
        @apply bg-danger-500/15 border-danger-500/15 text-danger-700 dark:text-danger-300
    }

    .badge.variant-urgent{
        @apply bg-danger-600 border-danger-600 text-white
    }

    .badge.sz-xs {
        @apply px-1.5 py-0.5 text-xs
    }

    .badge.sz-sm {
        @apply px-2 py-0.5 text-sm
    }

    .badge.sz-md{
        @apply px-2.5 py-0.5 text-sm
    }

    .badge.sz-lg{
        @apply px-2.5 py-0.5 text-base
    }

    /* Form field, input and textarea */
    .field{
        @apply relative space-y-2.5 has-disabled:*:opacity-50 has-disabled:*:pointer-events-none has-[:user-invalid]:[--caption-text-color:var(--color-danger-600)] dark:has-[:user-invalid]:[--caption-text-color:var(--color-danger-400)]
    }

    .input, .textarea{
        @apply w-full placeholder-(--placeholder-text-color) text-(--title-text-color) rounded-(--input-radius)
    }

    .input.variant-outlined, .textarea.variant-outlined{
        @apply outline-2 bg-transparent focus:outline-(--input-outline) -outline-offset-1 focus:outline border border-(--input-border)
    }

    .input.variant-mixed, .textarea.variant-mixed{
        @apply shadow-sm shadow-gray-950/5 dark:shadow-gray-950/35 outline-2 bg-(--ui-bg) focus:outline-(--input-outline) -outline-offset-1 focus:outline border border-(--input-border)
    }

    .input.variant-soft, .textarea.variant-soft {
        @apply outline-hidden bg-(--ui-soft-bg) focus:brightness-95 dark:focus:brightness-105
    }

    .input.variant-plain, .textarea.variant-plain {
        @apply rounded-none outline-hidden bg-transparent
    }

    .input.variant-bottomOutlined, .textarea.variant-bottomOutlined {
        @apply rounded-none bg-transparent focus:outline-hidden border-b border-(--input-border) focus:border-(--input-outline) focus:border-b-2
    }

    .input.sz-sm {
        @apply text-sm h-8
    }

    .input.sz-md {
        @apply text-sm h-9
    }

    .input.sz-lg {
        @apply h-10
    }

    .input.sz-xl {
        @apply h-12
    }

    .textarea.sz-sm {
        @apply text-sm py-1.5
    }

    .textarea.sz-md {
        @apply text-sm py-2
    }

    .textarea.sz-lg {
        @apply py-3
    }

    .textarea.sz-xl {
        @apply py-4
    }

    .input.variant-mixed.sz-sm, .input.variant-outlined.sz-sm, .input.variant-soft.sz-sm, .textarea.variant-mixed.sz-sm, .textarea.variant-outlined.sz-sm, .textarea.variant-soft.sz-sm {
        @apply px-2.5
    }

    .input.variant-mixed.sz-md, .input.variant-outlined.sz-md, .input.variant-soft.sz-md, .textarea.variant-mixed.sz-md, .textarea.variant-outlined.sz-md, .textarea.variant-soft.sz-md {
        @apply px-3
    }

    .input.variant-mixed.sz-lg, .input.variant-outlined.sz-lg, .input.variant-soft.sz-lg, .textarea.variant-mixed.sz-lg, .textarea.variant-outlined.sz-lg, .textarea.variant-soft.sz-lg {
        @apply px-4
    }

    .input.variant-mixed.sz-xl, .input.variant-outlined.sz-xl, .input.variant-soft.sz-xl, .textarea.variant-mixed.sz-xl, .textarea.variant-outlined.sz-xl, .textarea.variant-soft.sz-xl {
        @apply px-5
    }

    .switch{
        @apply block relative w-8 h-5 border transition duration-300 rounded-full bg-ui-soft dark:bg-(--ui-bg) has-checked:border-white/5
    }

    .switch-thumb{
        @apply absolute inset-x-[1px] inset-y-0 my-auto size-4 rounded-full bg-white shadow-sm shadow-gray-950/25 transition-[transform,width] ease-in-out duration-300 will-change-transform peer-checked:translate-x-3
    }

    .switch-thumb.variant-neutral{
        @apply absolute inset-x-[1px] inset-y-0 my-auto size-4 rounded-full bg-white shadow-sm shadow-gray-950/25 transition-[transform,width] ease-in-out duration-300 will-change-transform peer-checked:translate-x-3 dark:peer-checked:bg-gray-900
    }

    .switch.variant-primary{
        @apply has-checked:bg-primary-600
    }

    .switch.variant-neutral{
        @apply has-checked:bg-gray-950 dark:has-checked:bg-white
    }

    .checkbox, .radio{
        @apply block relative size-[1.125rem] border border-gray-300 dark:border-(--ui-border-color) transition duration-300 rounded shadow-sm shadow-gray-950/5 dark:bg-ui has-checked:bg-primary-600 has-checked:border-white/5
    }

    .checkbox-icon{
        @apply absolute inset-0 m-auto size-3.5 transition duration-300 text-gray-950 dark:text-white scale-75 opacity-0 group-hover:opacity-25 peer-checked:scale-100 peer-checked:text-white peer-checked:opacity-100
    }

    .radio-indicator{
        @apply absolute inset-0 m-auto size-2 rounded-full peer-checked:shadow-2xs peer-checked:shadow-gray-950/25 transition duration-300 bg-gray-950 dark:bg-white scale-75 opacity-0 group-hover:opacity-25 peer-checked:scale-100 peer-checked:bg-white peer-checked:opacity-100
    }

    .checkbox, .radio, .switch{
        @apply overflow-hidden has-focus-visible:outline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary-600
    }

    .checkbox>input, .radio>input, .switch>input{
        @apply absolute -left-6 size-2
    }
    /* Card */

    .card{
        @apply p-(--card-padding) rounded-(--card-radius)
    }

    .card.variant-outlined {
        @apply border bg-(--ui-bg)
    }

    .card.variant-mixed {
        @apply border bg-(--ui-bg) shadow shadow-gray-950/5
    }

    .card.variant-soft{
        @apply bg-(--ui-soft-bg)
    }

    /* Kbd */

    .kbd {
        @apply inline-flex items-center justify-center text-gray-800 dark:text-white h-5 text-[11px] min-w-5 px-1.5 rounded font-sans bg-gray-100 dark:bg-white/10 ring-1 border-b border-t border-t-white border-b-gray-200 dark:border-t-transparent dark:border-b-gray-950 ring-gray-300 dark:ring-white/15
    }

    /* Code */

    .code {
        @apply text-sm inline-block  rounded-md py-px px-1
    }

    .code.variant-primary {
        @apply border bg-primary-50 text-primary-600 dark:text-primary-300 border-primary-200 dark:border-primary-500/20 dark:bg-primary-500/5
    }

    .code.variant-gray {
        @apply bg-(--ui-soft-bg) text-(--body-text-color)
    }

    .code.variant-neutral {
        @apply border bg-gray-50 text-gray-950 dark:text-white dark:bg-gray-500/5 dark:border-gray-500/20
    }

    /* Link */

    .link {
        @apply transition text-primary-600 dark:text-primary-400
    }

    .link.variant-ghost{
        @apply hover:underline
    }

    .link.variant-underlined{
        @apply underline
    }

    .link.variant-animated {
        @apply relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:scale-x-0 before:origin-right hover:before:origin-left hover:before:scale-x-100 before:transition before:duration-200
    }

    .link.intent-info {
        @apply text-info-600 dark:text-info-400
    }

    .link.intent-neutral {
        @apply text-gray-950 dark:text-white
    }

    .link.variant-animated.intent-neutral{
        @apply before:bg-gray-950/50 dark:before:bg-white/50
    }

    .link.variant-animated.intent-info{
        @apply before:bg-info-300 dark:before:bg-info-600
    }

    .link.variant-animated.intent-primary{
        @apply before:bg-primary-300 dark:before:bg-primary-600
    }

    .link.variant-underlined.intent-neutral, .link.variant-ghost.intent-neutral{
        @apply decoration-gray-950/50 dark:decoration-white/50
    }

    /* Separator */
    .separator {
        @apply bg-(--ui-border-color) h-px w-full block
    }

    .separator.vertical{
        @apply w-px h-full
    }

    /* Annonce */
    .annonce{
        @apply flex items-center gap-3 w-fit rounded-(--annonce-radius)
    }

    .annonce.variant-outlined{
        @apply border
    }

    .annonce.variant-soft{
        @apply bg-(--ui-soft-bg)
    }

    .annonce.variant-mixed{
        @apply border bg-(--ui-bg) shadow-sm shadow-gray-950/5 dark:shadow-gray-950/25
    }

    .annonce.sz-xs{
        @apply py-0.5 pl-0.5 pr-3 [&>span]:rounded-[calc(var(--annonce-radius)-2px)]
    }

    .annonce.sz-sm{
        @apply py-1 pl-1 pr-4 [&>span]:rounded-[calc(var(--annonce-radius)-4px)]
    }

    .annonce.sz-md{
        @apply py-1.5 pl-1.5 pr-5 [&>span]:rounded-[calc(var(--annonce-radius)-6px)]
    }

    .annonce.sz-lg{
        @apply py-2 pl-2 pr-6 [&>span]:rounded-[calc(var(--annonce-radius)-8px)]
    }

    .annonce-concern{
        @apply block px-2 py-0.5
    }

    .annonce-concern.sz-xs{
        @apply text-xs
    }

    .annonce-concern.sz-sm{
        @apply text-sm
    }

    .annonce-concern.sz-md{
        @apply text-sm px-2.5
    }

    .annonce-concern.sz-lg{
        @apply text-base px-3 py-1
    }

    .annonce-concern.variant-primary {
        @apply bg-primary-600 text-white
    }

    .annonce-concern.variant-neutral {
        @apply border bg-gray-500/15 border-gray-500/15 text-gray-950 dark:text-white
    }

    /* Progress */
    .progress {
        @apply bg-(--ui-soft-bg) rounded-full overflow-hidden
    }

    .progress.sz-xs {
        @apply h-0.5
    }

    .progress.sz-sm {
        @apply h-1
    }

    .progress.sz-md {
        @apply h-1.5
    }

    .progress.sz-lg {
        @apply h-2.5
    }

    .progress.sz-xl {
        @apply h-3.5
    }

    .progress-indicator{
        @apply h-full ease-[cubic-bezier(0.65,0,0.35,1)] rounded-full transition-transform duration-[660ms]
    }

    .progress-indicator.variant-primary{
        @apply bg-primary-600
    }
    .progress-indicator.variant-danger{
        @apply bg-danger-600
    }
    .progress-indicator.variant-success{
        @apply bg-success-600
    }
    .progress-indicator.variant-warning{
        @apply bg-warning-600
    }
    .progress-indicator.variant-gray{
        @apply bg-gray-600
    }
    .progress-indicator.variant-neutral{
        @apply bg-gray-950 dark:bg-white
    }

    /* Avatar */
    .avatar{
        @apply block border border-gray-950/5 dark:border-white/5 relative rounded-(--avatar-radius) *:rounded-(--avatar-radius) before:hidden
    }

    .avatar img{
        @apply size-full object-cover
    }

    .avatar.avatar-status{
        @apply before:absolute before:z-1 before:block before:right-px before:rounded-full before:border-white dark:before:border-gray-950
    }

    .avatar.sz-xs, .avatar.sz-sm{
        @apply before:size-2 before:border-[1px]
    }

    .avatar.sz-xxs{
        @apply text-xs size-6 before:size-1.5 before:border-[1px]
    }

    .avatar.sz-xs{
        @apply text-xs size-7
    }

    .avatar.sz-sm{
        @apply text-sm size-8
    }

    .avatar.sz-md{
        @apply text-sm size-9 before:border-2 before:right-px before:size-2.5
    }

    .avatar.sz-lg{
        @apply text-base size-10 before:top-0.5 before:right-0.5 before:size-2.5 before:border-[2px]
    }

    .avatar.sz-xl{
        @apply text-lg size-12 before:top-[3px] before:border-2 before:right-[3px] before:size-2.5
    }

    .avatar.sz-xxl{
        @apply text-sm size-16 before:size-3 before:border-2 before:top-1 before:right-1
    }

    .avatar.sz-xxxl{
        @apply text-2xl size-20 before:size-3.5 before:border-2 before:top-1.5 before:right-1.5
    }

    .avatar.status-online{
        @apply before:bg-success-600 dark:before:bg-success-400
    }

    .avatar.status-offline{
        @apply before:bg-gray-600 dark:before:bg-gray-400
    }

    .avatar.status-away{
        @apply before:bg-warning-600 dark:before:bg-warning-500
    }

    .avatar.status-busy{
        @apply before:bg-danger-600 dark:before:bg-danger-400
    }

    .avatar.fallback-neutral, .avatar.fallback-primary{
        @apply flex items-center justify-center font-medium border
    }

    .avatar.fallback-neutral{
        @apply bg-gray-500/15 border-gray-500/15 text-gray-800 dark:text-gray-300
    }

    .avatar.fallback-primary{
        @apply bg-primary-500/15 border-primary-500/15 text-primary-800 dark:text-primary-300
    }

    .callout{
        @apply p-5 border rounded-(--card-radius)
    }

    .callout-title{
        @apply font-medium text-(--title-text-color)
    }

    .callout-description{
        @apply mt-1 text-(--body-text-color)
    }

    .callout-link{
        @apply text-(--title-text-color) underline font-medium
    }

    .callout.variant-warning{
        @apply bg-warning-50 [--title-text-color:var(--color-warning-950)] dark:bg-warning-500/5 dark:border-white/5 dark:[--title-text-color:var(--color-white)]
    }
    .callout.variant-danger{
        @apply bg-danger-50 [--title-text-color:var(--color-danger-950)] dark:bg-danger-500/5 dark:border-white/5 dark:[--title-text-color:var(--color-white)]
    }
    .callout.variant-neutral{
        @apply bg-gray-50 [--title-text-color:var(--color-gray-950)] dark:bg-gray-500/5 dark:[--title-text-color:var(--color-white)]
    }
}`
