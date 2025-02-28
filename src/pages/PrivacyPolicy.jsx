import SolutonAhead from '../Components/Solutions-Components/SolutonAhead';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto">
        <div className="">
          {/* content */}
          <article className="grid gap-10 p-4 md:p-10">
            <h1 className="text-4xl md:text-6xl">Privacy Notice</h1>
            <div className="grid gap-5">
              <span className="flex text-lg items-center gap-2">
                <h5 style={{ color: 'var(--black-primary-terms)' }}>
                  Effective Date:
                </h5>
                <p style={{ color: 'var(--black-primary-terms)' }}>
                  February 7, 2025
                </p>
              </span>
              <h1 className="text-3xl md:text-5xl pt-8 pb-4">Introduction.</h1>
              <p
                className="text-lg"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                This privacy notice (“Privacy Notice”) describes how Calendly,
                LLC and its affiliate Interview Schedule, Inc. d/b/a Prelude
                (“Calendly”, “we”, or “us”) collect, use, and disclose your
                Personal Data in the course of our business. Throughout this
                document, we will use a few defined terms.
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                "<b>Personal Data</b>" when used in this Privacy Notice means
                any data relating to an identified or identifiable natural
                person that is processed by Calendly as described in this
                Privacy Notice when such information is protected as “personal
                data” or “personal information” or a similar term under
                applicable data protection laws.
              </p>
              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                "<b>Services</b>" when used in this Privacy Policy means all of
                Calendly’s websites, applications (including, but not limited
                to, mobile and cloud applications), tools, platforms, and
                services offered by Calendly, but excluding third party
                applications.
              </p>
              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                "<b>Website</b>" when used in this Privacy Policy means the
                Calendly.com website or any other proprietary website owned by
                Calendly or that Calendly has the authority to manage and
                control and which link to this Privacy Policy.
              </p>

              <h1 className="text-3xl md:text-5xl pt-8 pb-4">Applicability.</h1>
              <p
                className="text-lg"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                Unless stated otherwise, this Privacy Notice only applies to
                Personal Data for which Calendly acts as a controller, such as
                when you visit our Website or create an account for our
                Services. Please note that when our customers use our Services
                to directly collect and process Personal Data, such as when our
                customers use our Services to schedule a meeting with you or
                record a meeting, Calendly acts as a processor (or service
                provider) on behalf of our customers (who are controllers of the
                Personal Data) under the Calendly Data Processing Addendum and
                Customer Terms and Conditions. If you have questions about how
                your data is processed by our customers or wish to exercise your
                rights with respect to that data, you should contact the
                customer which collected your information.
              </p>

              <h1 className="text-3xl md:text-5xl pt-8 pb-4">
                Information We Collect and Process.
              </h1>
              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>Information You Provide Directly to Calendly</b>
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  <b>When You Visit Our Website. </b>We may collect Personal
                  Data from you when you submit information via a web form or
                  otherwise interact with our Website, for example to request a
                  demo, create a help center or developer account, or download
                  resources and white papers. In these instances, we may ask for
                  certain Personal Data, such as your name, email address, and
                  phone number.
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  <b>Account Information. </b>Calendly’s customers provide
                  Calendly with Personal Data, including name, email address,
                  username, and password, when they set up their account. If a
                  customer has multiple account holders, then each account
                  holder will provide us with similar information.
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  <b>Billing Information. </b> If you purchase a paid version of
                  Calendly, our third party payment processors will collect and
                  store your billing address and credit card information. We
                  store the last four digits of your credit card number, card
                  type, and the expiration date. (
                  <b>For Prelude service customers only, </b>the payment and
                  billing information will be processed as established in the
                  services agreement between Calendly and your organization.).
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  <b>Marketing Information. </b> People interested in Calendly’s
                  products and services may contact us through forms made
                  available on the Website and voluntarily provide information
                  such as name, email address, phone number, company, and role.
                  People interested in our newsletter may also submit their name
                  and email addresses to join our mailing list. We also receive
                  other similar information provided by you if you participate
                  in an event hosted by or attended by Calendly or its partners
                  (such as webinars, conferences, and trade shows) and in your
                  interactions with our social media accounts.
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  <b>Additional Information. </b> We may also receive certain
                  Personal Data as you interact with Calendly through activities
                  such as surveys, focus groups, or any other product education
                  initiatives aimed at receiving your feedback.
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>Information Collected Automatically From You.</b>
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                We and our authorized third parties use Cookies (defined below),
                pixels, web beacons, and other technologies (such as local
                storage) to receive and store certain types of information when
                you interact with us through your computer or mobile device
                (subject to your consent, opt-out preferences or other
                appropriate legal basis where legally required). Using these
                technologies helps us customize your experience with our Website
                and Services, improve your experience, tailor marketing
                messages, and detect and prevent fraud and security risks. Here
                is more specific information about the types of information we
                collect automatically:
              </p>

              {/* old one */}

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                You are a “Customer” if:
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You are an individual with a registered Calendly account; or
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You are an Entity that has purchased Calendly licenses for
                  your Authorized Users to access and use Calendly with
                  registered accounts.
                </li>
                <li style={{ color: 'var(--black-primary-terms)' }}>
                  <ul
                    className="text-lg ml-4 grid gap-3 md:ml-10"
                    style={{ color: 'var(--black-primary-terms)' }}
                  >
                    <li
                      className="list-disc"
                      style={{ color: 'var(--black-primary-terms)' }}
                    >
                      “Entity” means a company or organization which has
                      purchased licenses to the Services for use with email
                      domains it owns, controls or manages, or has authority to
                      bind to the Customer Terms and Conditions and be
                      responsible for individuals using such email domain(s)
                      with the Services;
                    </li>
                    <li
                      className="list-disc"
                      style={{ color: 'var(--black-primary-terms)' }}
                    >
                      “Authorized Users” means an Entity’s employees,
                      consultants, contractors, and agents i) who are authorized
                      by the Entity to access and use the Services under the
                      rights granted to the Entity pursuant to the Customer
                      Terms and Conditions or MSA with Calendly; and ii) for
                      whom access to the Services has been purchased thereunder.
                      Authorized Users may include employees, consultants,
                      contractors and agents of Customer or its Affiliates.
                    </li>
                  </ul>
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                If you are a DesignPro Customer:
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  Your access and use of the Services are subject to the
                  Customer Terms and Conditions, unless you have a current and
                  valid MSA with Calendly, in which case the MSA governs and
                  controls.
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  If you do not have an MSA, then in addition to the Customer
                  Terms & Conditions, you are also subject to the Data
                  Processing Addendum, the Acceptable Use Policy and Privacy
                  Notice, and any applicable Industry-Specific Supplemental
                  Terms.
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>
                  {' '}
                  If you are not a Customer (as defined above), are you a
                  Calendly “Invitee”?
                </b>
              </p>
              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                You are an “Invitee” if:
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You have received or are accessing a valid scheduling link
                  made available by a Customer;
                </li>
                <b>and</b>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You do not have your own registered Calendly account.
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                If you are an Invitee:
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You are subject to the Invitee Terms and Conditions
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  For the avoidance of doubt, if you have a Calendly account,
                  your access and use to the Services, are governed by the or
                  your valid MSA, as described above under the terms applicable
                  to Customers.
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>
                  If you are not a Customer, nor an Invitee, are you a Calendly
                  “Visitor”?
                </b>
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                You are a Visitor if:
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You do not have a registered Calendly account;
                </li>
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  Nor are you accessing a valid scheduling link made available
                  by a Customer (i.e. you’re just here browsing the Website).
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                If you are a Visitor:
              </p>
              <ul
                className="text-lg mx-3 grid gap-3 md:ml-10"
                style={{ color: 'var(--black-primary-terms)' }}
              >
                <li
                  className="list-disc"
                  style={{ color: 'var(--black-primary-terms)' }}
                >
                  You are subject to our also if you’re interested in learning
                  more about DesignPro!
                </li>
              </ul>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>TERMS:</b> The terms and policies provided via the links on
                this page (collectively, the <b>“Terms”</b>) apply to your
                access and use of the Services and visitation to the Website, as
                applicable, depending on the type of user you are and described
                on each page. Any questions may be directed to the Calendly
                Support Team.
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>
                  READ THE TERMS CAREFULLY BEFORE USING THE SERVICES AS USE OF
                  THE SERVICES INDICATES THAT YOU HAVE BOTH READ AND ACCEPTED
                  THE TERMS. THE TERMS CONTAIN A DISPUTE RESOLUTION AND
                  ARBITRATION PROVISION, INCLUDING A CLASS ACTION WAIVER THAT
                  AFFECTS YOUR RIGHTS UNDER THE TERMS AND WITH RESPECT TO
                  DISPUTES YOU MAY HAVE WITH CALENDLY. YOU ACKNOWLEDGE THAT YOU
                  ARE ENTERING INTO THESE TERMS VOLUNTARILY AND NOT IN RELIANCE
                  ON ANY PROMISES OR REPRESENTATIONS WHATSOEVER EXCEPT THOSE
                  CONTAINED IN THE TERMS THEMSELVES.
                </b>
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>CHANGES:</b> These Terms or policies may change in whole or
                in part. If we make any material changes, we will use
                commercially reasonable efforts to provide you with advance
                notice prior to the change taking effect. You can review the
                most current version of the Terms at any time by visiting this
                page. Any material revisions to the Terms will become effective
                on the date set forth in our notice, and all other changes will
                become effective on the date we publish the change. If you
                access or use the Services after the effective date of any
                changes, that access or use will constitute your acceptance of
                the revised Terms. If you don’t agree to be bound by the
                changes, you may not use the Services anymore.
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>INVESTIGATIONS:</b> Calendly reserves the right to
                investigate complaints or reported violations of our terms or
                policies and to take any action we deem appropriate, including
                but not limited to suspending or canceling your account,
                reporting any suspected unlawful activity to law enforcement
                officials, regulators, or other third parties and disclosing any
                information related to your account and or use of the Services
                that may be necessary or appropriate to such persons or entities
                including but not limited to name(s), e-mail addresses, usage
                history, posted or solicited materials, IP addresses, and
                traffic information, or other Customer Data, or Personal Data as
                described under our Data Processing Addendum or Privacy Notice.
                You agree to promptly notify Calendly in the event that you are
                made aware of any unauthorized or illegal access or use of the
                Services by emailing legal@calendly.com.
              </p>

              <p
                style={{ color: 'var(--black-primary-terms)' }}
                className="text-lg"
              >
                <b>WEBSITE:</b> Calendly’s Website may contain links to third
                party websites. These links are provided solely as a convenience
                to you. Unless otherwise stated by Calendly, Calendly’s
                inclusion of links to these websites does not create or indicate
                an affiliation with or sponsor of such third-party websites and
                does not constitute any endorsement, guarantee, warranty, or
                recommendation of such third-party websites. Calendly has no
                control over the legal documents and privacy practices of
                third-party websites, and by using them, you may be giving those
                third parties permission to use or control your information in
                ways Calendly would not. As such, you access any third-party
                websites at your own risk. Calendly disclaims all liability and
                responsibility for or in connection with any third-party links
                or websites, or any services or resources accessible thereon.
              </p>
            </div>
          </article>
          <SolutonAhead />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
