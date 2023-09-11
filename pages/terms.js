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
                    <h1 className="page-header__title lh-14">
                      Terms and Conditions
                    </h1>
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
                    Welcome to Pocket CRM. These Terms and Conditions govern
                    your use of the App, its services, and all related content,
                    features, and functionality. By accessing or using the App,
                    you agree to be bound by these Terms and Conditions. If you
                    do not agree with any part of these terms, you must refrain
                    from using the App.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">
                    2. App Usage and Account Registration
                  </h3>
                  <p className="mt-24">
                    You must be of legal age in your jurisdiction to use the
                    App. By using the App, you represent and warrant that you
                    are of legal age or have obtained parental consent to use
                    the App.
                    <br />
                    <br />
                    You may be required to create an account to access certain
                    features of the App. You are responsible for maintaining the
                    confidentiality of your account information and agree to
                    accept responsibility for all activities that occur under
                    your account.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">3. Intellectual Property</h3>
                  <p className="mt-24">
                    All intellectual property rights, including but not limited
                    to copyrights, trademarks, patents, trade secrets, and other
                    proprietary information related to the App, shall remain the
                    sole property of Devlints or its licensors.
                    <br />
                    <br />
                    You may not copy, modify, distribute, transmit, display,
                    perform, reproduce, license, create derivative works from,
                    transfer, or sell any content, information, software,
                    products, or services obtained from the App without prior
                    written consent from Devlints.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">4. Privacy Policy</h3>
                  <p className="mt-24">
                    Your privacy is essential to us. Please refer to our Privacy
                    Policy, which explains how we collect, use, and disclose
                    your personal information when you use the App.
                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">5. Prohibited Conduct</h3>
                  <p className="mt-24">
                    You agree not to engage in any of the following activities
                    while using the App:
                    <br />
                    <br />
                    1. Violating any applicable laws, regulations, or
                    third-party rights.
                    <br></br>
                    2. Interfering with or disrupting the App's functionality or
                    servers.
                    <br></br>
                    3. Uploading or transmitting any harmful, unlawful, or
                    offensive content.
                    <br></br>
                    4. Attempting to gain unauthorized access to the App's systems or networks.

                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">6. Limitation of Liability
</h3>
                  <p className="mt-24">
                  To the extent permitted by law, Devlints shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.

                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">7. Modification of Terms
</h3>
                  <p className="mt-24">
                  Devlints reserves the right to modify or update these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms regularly to stay informed about any changes.

                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">8. Termination
</h3>
                  <p className="mt-24">
                  Devlints may terminate your access to the App or suspend your account at any time, with or without cause and without notice.

                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">9. Governing Law
</h3>
                  <p className="mt-24">
                  These Terms and Conditions shall be governed by and construed under the laws of Pakistan without regard to its conflict of laws principles.

                  </p>
                </div>
                <div className="col-xl-10 col-lg-11">
                  <h3 className="text-22 fw-600">10. Contact Us
</h3>
                  <p className="mt-24">
                  If you have any questions or concerns about these Terms and Conditions, please contact us at [info@Devlints.com].

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
