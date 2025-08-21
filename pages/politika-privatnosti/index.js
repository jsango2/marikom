import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function PrivacyPolicy() {
  const { locale } = useRouter();
  const isHR = locale === 'hr';

  const title = isHR ? 'Politika privatnosti | Marikomerc' : 'Privacy Policy | Marikomerc';
  const desc = isHR
    ? 'Politika privatnosti Marikomerc d.o.o. — informacije o prikupljanju, korištenju i zaštiti osobnih podataka u skladu s GDPR-om.'
    : 'Marikomerc d.o.o. Privacy Policy — how we collect, use and protect personal data in accordance with the GDPR.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='robots' content='index,follow' />
        {/* Ako koristiš Next i18n routing, ove alternate linkove će pomoći SEO-u */}
        <link rel='alternate' hrefLang='hr' href='/hr/politika-privatnosti' />
        <link rel='alternate' hrefLang='en' href='/en/politika-privatnosti' />
      </Head>

      <article className='legal'>
        <figure className='legal__hero'>
          <img
            src='https://cms.bluvia.hr/wp-content/uploads/2025/08/hero-legal-marikomerc.webp'
            alt={isHR ? 'Ilustracija privatnosti podataka' : 'Illustration of data privacy'}
            loading='lazy'
          />
        </figure>

        <header className='legal__header'>
          <h1 className='legal__title'>{isHR ? 'Politika privatnosti' : 'Privacy Policy'}</h1>
          <p className='legal__subtitle'>
            {isHR ? 'Politika privatnosti – Marikomerc d.o.o.' : 'Privacy Policy – Marikomerc d.o.o.'}
          </p>
          <p className='legal__intro'>
            {isHR ? (
              <>
                Marikomerc d.o.o. poštuje vašu privatnost i obvezuje se štititi vaše osobne podatke u skladu s Općom
                uredbom o zaštiti podataka (GDPR).
              </>
            ) : (
              <>
                Marikomerc d.o.o. respects your privacy and is committed to protecting your personal data in accordance
                with the General Data Protection Regulation (GDPR).
              </>
            )}
          </p>
        </header>

        <div className='legal__content'>
          {isHR ? (
            <>
              <h2>Koje podatke prikupljamo?</h2>
              <ul className='legal__list'>
                <li>
                  <strong>Newsletter (Mailchimp)</strong> – prikupljamo vašu e-mail adresu kada se prijavite na naš
                  newsletter.
                </li>
                <li>
                  <strong>Kontakt forma</strong> – kada nam se obratite putem kontakt forme, prikupljamo vaše ime,
                  e-mail adresu i poruku.
                </li>
              </ul>

              <h2>Kako koristimo podatke?</h2>
              <ul className='legal__list'>
                <li>
                  E-mail adrese prikupljene za newsletter koristimo isključivo za slanje obavijesti i vijesti o našim
                  uslugama i proizvodima.
                </li>
                <li>Podatke iz kontakt forme koristimo isključivo za odgovor na vaš upit.</li>
              </ul>

              <h2>Rok čuvanja podataka</h2>
              <ul className='legal__list'>
                <li>
                  Newsletter e-mail adrese čuvamo <strong>36 mjeseci</strong>.
                </li>
                <li>Podaci iz kontakt forme čuvaju se koliko je potrebno za rješavanje upita.</li>
              </ul>

              <h2>Dijeljenje podataka</h2>
              <p>
                Vaše podatke <strong>ne dijelimo s trećim stranama</strong>, osim s pružateljem usluge newslettera{' '}
                <strong>Mailchimp</strong> (SAD). Mailchimp osigurava adekvatnu razinu zaštite podataka u skladu s
                GDPR-om.
              </p>

              <h2>Vaša prava</h2>
              <ul className='legal__list'>
                <li>pravo na pristup svojim podacima,</li>
                <li>ispravak netočnih podataka,</li>
                <li>brisanje podataka (“pravo na zaborav”),</li>
                <li>povlačenje privole u bilo kojem trenutku.</li>
              </ul>
              <p>
                Za ostvarivanje prava kontaktirajte nas na <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
            </>
          ) : (
            <>
              <h2>What data do we collect?</h2>
              <ul className='legal__list'>
                <li>
                  <strong>Newsletter (Mailchimp)</strong> – we collect your email address when you subscribe to our
                  newsletter.
                </li>
                <li>
                  <strong>Contact form</strong> – when you contact us via the form, we collect your name, email address,
                  and message.
                </li>
              </ul>

              <h2>How do we use your data?</h2>
              <ul className='legal__list'>
                <li>
                  Email addresses collected for the newsletter are used solely to send news and updates about our
                  services and products.
                </li>
                <li>Data from the contact form is used solely to respond to your enquiry.</li>
              </ul>

              <h2>Data retention</h2>
              <ul className='legal__list'>
                <li>
                  Newsletter email addresses are retained for <strong>36 months</strong>.
                </li>
                <li>Contact form data is retained for as long as necessary to resolve the enquiry.</li>
              </ul>

              <h2>Data sharing</h2>
              <p>
                We <strong>do not share</strong> your data with third parties, except with our newsletter service
                provider <strong>Mailchimp</strong> (USA). Mailchimp provides appropriate safeguards in line with the
                GDPR.
              </p>

              <h2>Your rights</h2>
              <ul className='legal__list'>
                <li>right of access to your data,</li>
                <li>rectification of inaccurate data,</li>
                <li>erasure (“right to be forgotten”),</li>
                <li>withdrawal of consent at any time.</li>
              </ul>
              <p>
                To exercise your rights, contact us at <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
            </>
          )}
        </div>
      </article>
    </Layout>
  );
}
