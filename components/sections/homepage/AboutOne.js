export default function AboutOne() {
  return (
    <>
      <section className="layout-pt-sm layout-pb-sm overflow-visible">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionHeading">
                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">
                  Features
                </h2>
              </div>
            </div>
          </div>
          <div className="row y-gap-32 pt-80 md:pt-60 sm:pt-24">
            <div className="col-md-6 wow animate__animated animate__fadeInUp">
              <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up">
                <div className="mr-48 md:mr-0">
                  <img src="/img/home-1/company/timer.svg" alt="icon" />
                </div>
                <div className="md:mt-20">
                  <h4 className="text-xl fw-600 lh-1">Leads Management</h4>
                  <p className="mt-20 md:mt-12">
                    Seamlessly capture, organize, and nurture real estate leads
                    with Pocket CRM's intuitive tools, ensuring no opportunity
                    slips through the cracks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow animate__animated animate__fadeInUp">
              <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up">
                <div className="mr-48 md:mr-0">
                  <img src="/img/home-1/company/cloud-storage.svg" alt="icon" />
                </div>
                <div className="md:mt-20">
                  <h4 className="text-xl fw-600 lh-1">Staff Management</h4>
                  <p className="mt-20 md:mt-12">
                    Effortlessly assign tasks, track performance, and
                    collaborate with your team, fostering a harmonious work
                    environment and maximizing productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow animate__animated animate__fadeInUp">
              <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up">
                <div className="mr-48 md:mr-0">
                  <img src="/img/home-1/company/touch.svg" alt="icon" />
                </div>
                <div className="md:mt-20">
                  <h4 className="text-xl fw-600 lh-1">Clients Management</h4>
                  <p className="mt-20 md:mt-12">
                    With the powerful client management capabilities of Pocket
                    CRM, you can gain a 360-degree view of each real estate
                    client and proactively address their needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow animate__animated animate__fadeInUp">
              <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up">
                <div className="mr-48 md:mr-0">
                  <img src="/img/home-1/company/pen-tool.svg" alt="icon" />
                </div>
                <div className="md:mt-20">
                  <h4 className="text-xl fw-600 lh-1">Inventory Management</h4>
                  <p className="mt-20 md:mt-12">
                    Stay in control for viewing or adding properties and stock
                    levels, receive real-time updates, and optimize your
                    inventory to meet customer demands efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
