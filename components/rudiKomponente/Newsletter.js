import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router";
import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_NEWSLETTER_ID || "";

export default function NewsletterFormspark() {
  const { locale = "hr" } = useRouter();
  const isHR = locale === "hr";

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [submit, submitting] = useFormspark({ formId: FORM_ID });

  async function onSubmit(e) {
    e.preventDefault();
    setMsg(null);

    if (!FORM_ID) {
      setMsg({
        type: "err",
        text: isHR
          ? "Nedostaje Formspark FORM_ID."
          : "Missing Formspark FORM_ID.",
      });
      return;
    }
    if (!email) {
      setMsg({
        type: "err",
        text: isHR ? "Unesite e-mail." : "Enter your email.",
      });
      return;
    }

    try {
      await submit({ email }); // šaljemo SAMO email
      setMsg({
        type: "ok",
        text: isHR
          ? "Hvala! Uspješno ste se prijavili na newsletter."
          : "Thanks! You have been subscribed.",
      });
      setEmail("");
    } catch (err) {
      setMsg({
        type: "err",
        text: isHR
          ? "Greška pri slanju. Pokušajte ponovno."
          : "Submission error. Please try again.",
      });
    }
  }

  return (
    <section className="newsletter newsletter--white" id="newsletter">
      <div className="newsletter__inner">
        <p className="newsletter__eyebrow">NEWSLETTER</p>

        <h2 className="newsletter__title">
          {isHR
            ? "Prvi saznajte novosti iz svijeta morskih delicija"
            : "Be the first to hear our seafood updates"}
        </h2>

        <p className="newsletter__subtitle">
          {isHR
            ? "Prijavite se na naš newsletter i otkrijte nove proizvode, recepte i posebne ponude koje pripremamo za naše partnere i kupce."
            : "Subscribe to our newsletter and discover new products, recipes, and special offers we prepare for our partners and customers."}
        </p>

        <form
          className="newsletter__form newsletter__form--inline"
          onSubmit={onSubmit}
          noValidate
        >
          <input
            className="newsletter__input newsletter__input--pill"
            type="email"
            name="email"
            placeholder="email@gmail.com"
            aria-label={isHR ? "E-mail adresa" : "Email address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="newsletter__btn newsletter__btn--pill"
            type="submit"
            disabled={submitting || !email}
          >
            {submitting
              ? isHR
                ? "Slanje…"
                : "Sending…"
              : isHR
              ? "Pretplati se"
              : "Subscribe"}
          </button>
        </form>

        {msg && (
          <p
            className={`newsletter__status ${
              msg.type === "ok" ? "is-ok" : "is-err"
            }`}
            aria-live="polite"
          >
            {msg.text}
          </p>
        )}
      </div>
    </section>
  );
}
