import Atropos from "atropos/react";

export default function SuccessOne() {
  return (
    <>
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-48 justify-between items-center">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div>
                <div className="atropos -no-shadow js-atropos wow animate__animated animate__zoomIn">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner overflow-visible d-flex justify-center">
                        <div className="relative z-2">
                          <Atropos data-atropos-offset={-5}>
                            <img
                              src="/img/home-1/phones/phone.png"
                              alt="phone"
                            />
                          </Atropos>
                        </div>

                        <div className="absolute-full-center">
                          <Atropos data-atropos-offset={-5}>
                            <img
                              src="/img/home-1/phones/circle.png"
                              alt="phone"
                            />
                          </Atropos>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <div className="sectionHeading animated">
                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                  <span>We are your only</span>
                </div>
                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">
                  Manage Your Clients
                </h2>
              </div>
             
              <div className="row y-gap-60 pt-60 sm:pt-32">
                <div className="col-12 wow animate__animated animate__fadeInUp">
                  <div className="d-flex sm:direction-column">
                    <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                      <img src="/img/home-1/success/letter.svg" alt="icon" />
                    </div>
                    <div className="sm:mt-20">
                      <h4 className="text-xl fw-600 lh-1">Mail Management</h4>
                      <p className="mt-12">
                      Pocket CRM – perfect for your Real Estate Email Management.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="d-flex sm:direction-column">
                    <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                      <img
                        src="/img/home-1/success/package-delivery.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="sm:mt-20">
                      <h4 className="text-xl fw-600 lh-1">
                        Customers Tracking
                      </h4>
                      <p className="mt-12">
                      We help monitor and record every touchpoint with robust tracking capabilities and valuable insights. Building stronger connections and increasing engagement with your clients enables you to tailor your approach to drive long-term loyalty. Real Estate business is always meant for long-term goals and that’s where we help our clients to achieve their goals in due time.

                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="d-flex sm:direction-column">
                    <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                      <img src="/img/home-1/success/layout.svg" alt="icon" />
                    </div>
                    <div className="sm:mt-20">
                      <h4 className="text-xl fw-600 lh-1">
                        Advanced Reporting
                      </h4>
                      <p className="mt-12">
                      Pocket CRM's cutting-edge reporting tools provide in-depth analysis and visualizations of your sales, customer data, and team performance. Make data-driven decisions, identify trends, and spot opportunities for growth, giving your business a competitive edge and propelling it toward success.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
