import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hyventur collects, uses, and protects your information — including our SMS/text messaging data practices.",
};

const UPDATED = "June 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`How we collect, use, and protect your information. Last updated: ${UPDATED}.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-8 text-[1rem] leading-relaxed text-ink-600 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink-900 [&_h2]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink-900 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_a]:text-crimson-600 [&_a]:underline">
            <div>
              <p>
                {brand.legalName} (&ldquo;Hyventur,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
                This Privacy Policy explains what information we collect, how we
                use it, and the choices you have. By using our website or
                services, you agree to the practices described here.
              </p>
            </div>

            <div>
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li>Contact details such as your name, company, email address, and phone number when you request a demo or contact us.</li>
                <li>Information about your organization and your interest in our services.</li>
                <li>Communications you send to us, including messages submitted through our forms.</li>
              </ul>
              <p>
                We also automatically collect limited technical information such
                as your IP address, browser type, and pages visited, using
                cookies and similar technologies to operate and improve the site.
              </p>
            </div>

            <div>
              <h2>How We Use Your Information</h2>
              <ul>
                <li>To respond to your inquiries and schedule product demonstrations.</li>
                <li>To provide, maintain, and improve our services.</li>
                <li>To send you information you request, and, with your consent, service-related text messages.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2>Text Messaging (SMS) and Mobile Information</h2>
              <p>
                When you provide your mobile number and opt in, we may send you
                recurring automated text messages related to your inquiry, demo
                scheduling, and account or service updates. Message frequency
                varies. Message and data rates may apply. You can opt out at any
                time by replying <strong>STOP</strong>, or get help by replying{" "}
                <strong>HELP</strong>.
              </p>
              <p>
                <strong>
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </strong>{" "}
                Information sharing with subcontractors who provide support
                services, such as customer service, is permitted solely to help
                us deliver the messaging service you requested. All other
                categories of use exclude text messaging originator opt-in data
                and consent; this information will not be shared with any third
                parties.
              </p>
            </div>

            <div>
              <h2>How We Share Information</h2>
              <p>
                We do not sell your personal information. We may share
                information with trusted service providers who perform services
                on our behalf (such as hosting, analytics, and customer support),
                subject to confidentiality obligations, and when required by law
                or to protect our rights. As noted above, SMS opt-in data and
                consent are never shared with third parties for their own
                purposes.
              </p>
            </div>

            <div>
              <h2>Data Security</h2>
              <p>
                We maintain administrative, technical, and physical safeguards
                designed to protect your information, including encryption in
                transit and access controls. No method of transmission or storage
                is completely secure, but we work to protect your information and
                limit access to those who need it.
              </p>
            </div>

            <div>
              <h2>Your Choices and Rights</h2>
              <ul>
                <li>You may opt out of text messages at any time by replying STOP.</li>
                <li>You may unsubscribe from marketing emails using the link in those messages.</li>
                <li>You may request access to, correction of, or deletion of your personal information, subject to applicable law, by contacting us.</li>
              </ul>
            </div>

            <div>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are intended for businesses and are not directed to
                children under 16. We do not knowingly collect personal
                information from children.
              </p>
            </div>

            <div>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will revise the &ldquo;Last updated&rdquo; date above. Your
                continued use of our services after changes take effect
                constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, contact us at{" "}
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
