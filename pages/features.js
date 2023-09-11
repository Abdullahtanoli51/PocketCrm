import Layout from "@/components/layout/Layout";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Services1() {
  return (
    <>
      <Layout>
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
                      Powerful Features
                    </h1>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-9 col-md-10">
                  <div className="px-20">
                    <p className="page-header__text">
                      Unleash the Real Estate Power - Where Productivity Meets
                      Real Success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-lg layout-pb-sm">
            <div className="container">
              <div className="row y-gap-32">
                <div className="col-lg-3 col-sm-6">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-blue-light">
                      <img
                        src="/img/about-4/solutions/branding.svg"
                        alt="icon"
                      />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">Leads</h4>
                    <p className="mt-10">
                      Leads to Success - Your Pathway to Profitable
                      Opportunities.
                    </p>
                    <Link
                      href="/features"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                      <img
                        src="/img/about-4/solutions/ui-design.svg"
                        alt="icon"
                      />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">Clients</h4>
                    <p className="mt-10">
                      Client-Centric Brilliance - Elevate Customer Relationships
                      to New Heights.
                    </p>
                    <Link
                      href="/features"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                      <img
                        src="/img/about-4/solutions/animate.svg"
                        alt="icon"
                      />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">Staff</h4>
                    <p className="mt-10">
                      Empower Your Team - Uniting Talents for Unstoppable
                      Growth.
                    </p>
                    <Link
                      href="/features"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                      <img src="/img/about-4/solutions/seo.svg" alt="icon" />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">Inventory</h4>
                    <p className="mt-10">
                      Inventory Mastery Simplified - Keep Stock in Sync, Profits
                      in Check.
                    </p>
                    <Link
                      href="/features"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Discover Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      <span>how our process works</span>
                    </div>
                    <h2 className="sectionHeading__title">
                      Simple 4-step system
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-sm">
            <div className="container">
              <div className="row y-gap-48 items-center">
                <div className="col-xl-5 col-lg-6">
                  <img
                    className="initial-img"
                    src="/img/services/images.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-xl-5 offset-xl-1 col-md-10 col-lg-6">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      <span>Strategy</span>
                    </div>
                    <h2 className="sectionHeading__title">
                      Seamless Experience
                    </h2>
                  </div>
                  <p className="mt-30 sm:mt-20 pr-100 lg:pr-0">
                    Pocket CRM offers a user-friendly interface and smooth
                    navigation, ensuring a hassle-free journey through every
                    feature. From leads and client management to inventory and
                    reporting, enjoy a seamless experience that keeps you in
                    control of your Real Estate business growth with ease and
                    efficiency.
                  </p>
                  <div className="mt-30">
                    <Link
                      href="/features"
                      className="button -md -accent text-white -uppercase"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-sm">
            <div className="container">
              <div className="row y-gap-48 justify-between items-center">
                <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-2">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      <span>Design</span>
                    </div>
                    <h2 className="sectionHeading__title">
                      Enhanced Productivity
                    </h2>
                  </div>
                  <p className="mt-30 sm:mt-20 pr-100 lg:pr-0">
                  Our powerful tools help your team to work smarter, not harder. From lead generation to customer service, leverage advanced features to optimize your processes, maximize efficiency, and achieve remarkable results, all while saving valuable time and resources.

                  </p>
                  <div className="mt-60 md:mt-32">
                    <Link
                      href="/features"
                      className="button -md -accent text-white -uppercase"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
                  <img
                    className="initial-img"
                    src="/img/services/images-1.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-sm">
            <div className="container">
              <div className="row y-gap-48 items-center">
                <div className="col-xl-5 col-lg-6">
                  <img
                    className="initial-img"
                    src="/img/services/images-2.jpg"
                    alt="image"
                  />
                </div>
                <div className="offset-xl-1 col-lg-6 col-md-10">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      <span>Operation</span>
                    </div>
                    <h2 className="sectionHeading__title">
                    Simplifying Your Real Estate 
                      <br />  Business
                    </h2>
                  </div>
                  <p className="mt-30 sm:mt-20 pr-100 lg:pr-0">
                  Say goodbye to complexities and hello to efficiency. Our intuitive platform streamlines tasks like lead management, client interactions, inventory control, and reporting, giving you the tools to run your business seamlessly. Embrace simplicity and unlock the full potential of your enterprise with ease.

                  </p>
                 
                  <div className="mt-30">
                    <Link
                      href="/features"
                      className="button -md -accent text-white -uppercase"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-sm">
            <div className="container">
              <div className="row y-gap-48 justify-between items-center">
                <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-2">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      <span>Launch</span>
                    </div>
                    <h2 className="sectionHeading__title">
                      Provide the best digital
                      <br /> experiences
                    </h2>
                  </div>
                  <p className="mt-30 sm:mt-20 pr-100 lg:pr-0">
                    With you get components and examples, including tons of
                    variables that will help you customize this theme with ease.
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
                  <img
                    className="initial-img"
                    src="/img/services/images-3.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-lg">
            <div className="container">
              <div className="relative rounded-16">
                <div className="absolute-full-center z--1">
                  <div
                    className="bg-image rounded-16 js-lazy"
                    style={{
                      backgroundImage: 'url("/img/home-2/footer/cta.png")',
                    }}
                  />
                </div>
                <div className="py-50 px-64">
                  <div className="row y-gap-32 justify-between items-center">
                    <div className="col-auto">
                      <h3 className="text-30 lh-15 text-white">
                        Join Pocket CRM and increase
                        <br /> your productivity.
                      </h3>
                    </div>
                    <div className="col-auto">
                      <button className="button -md -white text-accent">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
