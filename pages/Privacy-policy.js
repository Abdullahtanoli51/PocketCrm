import Layout from "@/components/layout/Layout";

export default function Term() {
  return (
    <>
      <Layout footerLayout={11}>
        <div>
          <section className="page-header -base -">
            <div className="page-header__bg">
              <img
                className="initial-img"
                src="/img/page-header/bg-light.png"
                alt="Page header"
              />
            </div>
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-lg-9 col-md-10">
                  <div>
                    <h1 className="page-header__title lh-14">Privacy Policy</h1>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-9 col-md-10"></div>
              </div>
            </div>
          </section>
          <section className="layout-pt-lg layout-pb-lg">
            <div className="container">
              <div className="row y-gap-40 justify-center">
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">1. Introduction</h3>
                  <p className="mt-24">
                    Welcome to Pocket CRM. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your personal
                    information when you use the App. By accessing or using the
                    App, you consent to the practices described in this Privacy
                    Policy.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">2. Information We Collect</h3>
                  <p className="mt-24">
                    Personal Information: You must be of legal age in your
                    jurisdiction to use the App. By using the App, you represent
                    and warrant that you are of legal age or have obtained
                    parental consent to use the App.
                    <br />
                    <br />
                    Usage Information: You may be required to create an account
                    to access certain features of the App. You are responsible
                    for maintaining the confidentiality of your account
                    information and agree to accept responsibility for all
                    activities that occur under your account.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">
                    3. How We Use Your Information
                  </h3>
                  <p className="mt-24">
                    We may use the information we collect from you for the
                    following purposes:
                    <br />
                    <br></br>
                    To provide and maintain the App's services and features.
                    <br />
                    To personalize your experience with the App.
                    <br></br>
                    To send you updates, notifications, and marketing
                    communications.
                    <br></br>
                    To respond to your inquiries and provide customer support.
                    <br></br>
                    To improve the App's functionality, features, and user
                    experience.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">
                    4. Information Sharing and Disclosure
                  </h3>
                  <p className="mt-24">
                    We will not sell, rent, or lease your personal information
                    to third parties.
                    <br></br>
                    We may share your information with third-party service
                    providers who assist us in operating the App, performing
                    tasks on our behalf, and providing services to you. These
                    third parties are obligated not to disclose or use the
                    information for any other purpose.
                    <br></br>
                    We may also disclose your information if required by law, or
                    government agencies, or to protect our rights, property, or
                    safety.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">5. Security</h3>
                  <p className="mt-24">
                    We implement reasonable security measures to protect your
                    personal information from unauthorized access, disclosure,
                    alteration, and destruction. However, no method of
                    transmission over the Internet or electronic storage is 100%
                    secure, and we cannot guarantee its absolute security.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">6. Children's Privacy</h3>
                  <p className="mt-24">
                    Pocket CRM is not intended for use by individuals under the
                    age of [Legal Age in Your Jurisdiction]. We do not knowingly
                    collect personal information from children under [Legal Age
                    in Your Jurisdiction]. If you believe we have inadvertently
                    collected personal information from a child, please contact
                    us to have it removed.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">
                    7. Changes to this Privacy Policy
                  </h3>
                  <p className="mt-24">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify you of any
                    significant changes by posting the updated Privacy Policy on
                    this page.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">8. Contact Us</h3>
                  <p className="mt-24">
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at [info@Devlints.com].
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="svg-shape">
            <svg
              width={1920}
              height={60}
              viewBox="0 0 1920 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z"
                fill="#1A3454"
              />
            </svg>
          </div>
        </div>
      </Layout>
    </>
  );
}
