import { getPosts } from '@/app/utils'
import { baseURL } from '@/app/resources'
import { routing } from '@/i18n/routing'

export default async function sitemap() {

    const locales = routing.locales;
    const fullBaseURL = `https://${baseURL}`; // Tambahkan "https://" ke baseURL

    let blogs = locales.flatMap((locale) => 
        getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]).map((post) => ({
            url: `${fullBaseURL}/${locale}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let works = locales.flatMap((locale) => 
        getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]).map((post) => ({
            url: `${fullBaseURL}/${locale}/work/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let routes = locales.flatMap((locale) => 
        ['', '/blog', '/work'].map((route) => ({
            url: `${fullBaseURL}/${locale}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    return [...routes, ...blogs, ...works];
}
