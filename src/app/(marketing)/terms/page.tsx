import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing your use of Hyventur's website and services, including our SMS/text messaging program terms.",
};

const UPDATED = "June 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead={`The terms governing your use of our website and services. Last updated: ${UPDATED}.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-8 text-[1rem] leading-relaxed text-ink-600 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink-900 [&_h2]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink-900 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_a]:text-crimson-600 [&_a]:underline">
            <div>
              <p>
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
                access to and use of the website and services provided by{" "}
                {brand.legalName} (&ldquo;Hyventur,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using our website or
                opting in to our communications, you agree to these Terms.
              </p>
            </div>

            <div>
              <h2>Use of Our Website</h2>
              <p>
                You may use our website for lawful purposes only. You agree not
                to misuse the site, interfere with its operation, or attempt to
                access it in an unauthorized manner. All content on this site is
                owned by or licensed to Hyventur and is protected by applicable
                intellectual property laws.
              </p>
            </div>

            <div>
              <h2>SMS / Text Messaging Program Terms</h2>
              <p>
                By providing your mobile phone number and opting in through our
                web form, you agree to receive text messages from Hyventur. These
                messaging terms apply to that program:
              </p>
              <ul>
                <li>
                  <strong>Program description:</strong> Hyventur sends recurring
                  automated text messages related to your inquiry, demo
                  scheduling, and account or service updates.
                </li>
                <li>
                  <strong>Opt-in:</strong> You consent to receive text messages
                  by checking the SMS consent box on our contact form and
                  submitting your mobile number. Consent is not a condition of
                  purchasing any goods or services.
                </li>
                <li>
                  <strong>Message frequency:</strong> Message frequency varies
                  based on your interaction with us.
                </li>
                <li>
                  <strong>Cost:</strong> Message and data rates may apply,
                  according to your mobile carrier plan.
                </li>
                <li>
                  <strong>Opt-out:</strong> You can cancel the SMS service at any
                  time by texting <strong>STOP</strong>. After you send STOP, we
                  will send a confirmation message and then stop sending you text
                  messages. To rejoin, sign up again as you did initially.
                </li>
                <li>
                  <strong>Help:</strong> Reply <strong>HELP</strong> for
                  assistance, or contact us at{" "}
                  <a href={`mailto:${brand.salesEmail}`}>{brand.salesEmail}</a> or{" "}
                  <a href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}>
                    {brand.phone}
                  </a>
                  .
                </li>
                <li>
                  <strong>Carrier liability:</strong> Carriers are not liable for
                  delayed or undelivered messages.
                </li>
                <li>
                  <strong>Privacy:</strong> Your mobile opt-in information is
                  handled in accordance with our{" "}
                  <a href="/privacy">Privacy Policy</a>. No mobile information is
                  shared with third parties or affiliates for marketing or
                  promotional purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2>Disclaimers</h2>
              <p>
                Our website and any illustrative product demonstrations are
                provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
                Dashboard figures and metrics shown in demonstrations are
                illustrative examples and do not represent guaranteed outcomes.
                We make no warranties, express or implied, regarding the website
                or its content to the fullest extent permitted by law.
              </p>
            </div>

            <div>
              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Hyventur will not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or relating to your use of our
                website or services.
              </p>
            </div>

            <div>
              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. When we do, we will
                revise the &ldquo;Last updated&rdquo; date above. Your continued
                use of our website after changes take effect constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
                <a href={`mailto:${brand.salesEmail}`}>{brand.salesEmail}</a> or{" "}
                <a href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}>{brand.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
