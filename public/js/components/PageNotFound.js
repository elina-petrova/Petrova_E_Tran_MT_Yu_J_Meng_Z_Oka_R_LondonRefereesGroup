export default {
    name: 'PageNotFound',
    template: `
    <section class="sectionShell pro-hero page-content">
          <h1 class="hidden">Error page</h1>
            <section class="pro-hero-content">

            <div>
                <h1>Page not found!</h1>
                <router-link to="/">Go to the homepage</router-link>
                    </div>
            </section>
        </section>
    `
}