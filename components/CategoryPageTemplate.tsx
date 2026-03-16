import Link from 'next/link';
import { seoContent, type CategoryPageKey } from '../lib/seo';
import { siteConfig } from '../lib/site.config';

interface CategoryPageTemplateProps {
  slug: CategoryPageKey;
}

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export function CategoryPageTemplate({ slug }: CategoryPageTemplateProps) {
  const page = seoContent.categoryPages[slug];
  const whatsappLink = buildWhatsAppLink(`${page.cta} - ${siteConfig.businessName}`);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sand via-white to-sand text-charcoal">
      <section className="border-b border-gray-100 bg-white/90">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <Link href="/" className="font-semibold hover:text-accent">
              Neo-Decor
            </Link>
            <span>/</span>
            <span>{page.h1}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{siteConfig.city}</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{page.h1}</h1>
              <p className="max-w-3xl text-lg text-gray-700">{page.intro}</p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Pourquoi choisir Neo-Decor pour cette categorie ?</h2>
              <p className="mt-4 text-base leading-7 text-gray-700">{page.explanation}</p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-sand/60 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Questions frequentes</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {page.faqs.map((faq) => (
                  <article key={faq.question} className="rounded-2xl border border-gray-100 bg-white p-5">
                    <h3 className="text-lg font-semibold text-charcoal">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Liens internes utiles</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-accent hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-accent hover:text-accent"
                >
                  Ouvrir Google Maps
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-gray-100 bg-charcoal p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact rapide</p>
              <h2 className="mt-3 text-2xl font-semibold">{page.cta}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-200">
                Envoyez vos dimensions, une photo de la piece et votre budget pour recevoir une orientation rapide.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
                >
                  WhatsApp
                </Link>
                <Link
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
                >
                  Instagram
                </Link>
                <Link
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
                >
                  Visiter le magasin
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-charcoal">Zone desservie</h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Showroom a Nador avec demandes frequentes depuis Beni Ansar, Al Aroui et Selouane.
              </p>
              <p className="mt-3 text-sm font-semibold text-charcoal">{siteConfig.address}</p>
              <p className="mt-1 text-sm text-gray-700">{siteConfig.openingHours}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
