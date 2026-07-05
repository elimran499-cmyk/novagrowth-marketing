import LegalLayout from './LegalLayout';

export default function Impressum() {
  return (
    <LegalLayout title="Imprint / Impressum" lastUpdated="July 5, 2026">
      <section>
        <p>
          Provider identification for <a href="/">monarchix.eu</a>, provided in line with EU
          trader-transparency requirements (and in the format familiar to visitors from Germany
          and Austria as an &quot;Impressum&quot;). Monarchix is a United States limited liability
          company, not a company established in the EU/EEA.
        </p>
      </section>

      <section>
        <h2>Provider</h2>
        <p>
          Monarchix LLC
          <br />
          1209 Mountain Road Pl NE, Ste N
          <br />
          Albuquerque, NM 87110
          <br />
          United States of America
        </p>
      </section>

      <section>
        <h2>Represented By</h2>
        {/* TODO: replace with the managing member's/officer's full legal name before launch — required for a valid provider disclosure. */}
        <p>[Managing Member Name] — Managing Member, Monarchix LLC</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:growth@monarchix.eu">growth@monarchix.eu</a>
          <br />
          {/* TODO: add a phone number here once one is designated for business use — a fast means of direct contact is required in most EU jurisdictions. */}
          For the fastest response, please use the <a href="/#contact">contact form</a> or email above.
        </p>
      </section>

      <section>
        <h2>Business Registration</h2>
        {/* TODO: fill in the state registration / EIN details once confirmed. */}
        <p>
          Monarchix LLC is a limited liability company registered in the State of New Mexico,
          USA. [Registration/EIN number].
        </p>
      </section>

      <section>
        <h2>VAT</h2>
        <p>
          Monarchix LLC is a US entity and does not hold an EU VAT identification number. Where
          applicable, VAT on services supplied to EU customers is handled in accordance with EU
          reverse-charge or non-Union OSS rules.
        </p>
      </section>

      <section>
        <h2>Responsible for Content</h2>
        <p>
          Monarchix LLC, at the address above, is responsible for the content of this website
          within the meaning of § 55 Abs. 2 RStV / § 18 Abs. 2 MStV.
        </p>
      </section>

      <section>
        <h2>Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (ODR):{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . We are not obligated and are not generally willing to participate in dispute
          resolution proceedings before a consumer arbitration board.
        </p>
      </section>

      <section>
        <h2>Liability for Content &amp; Links</h2>
        <p>
          We make every effort to keep the information on this Site accurate and up to date, but
          we do not guarantee the completeness or timeliness of its content. Where this Site links
          to external websites operated by third parties, we have no control over and accept no
          liability for that external content.
        </p>
      </section>

      <section>
        <p className="text-slate-500 text-xs">
          For how we handle personal data, see our <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
