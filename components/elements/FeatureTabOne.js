import { useState } from 'react';

export default function AccordionOne() {
    const [active, setActive] = useState(1);

    const handleOnClick = (index) => {
        setActive(index);
    };
    return (
        <>
            <div className="tabs -button-bg-white pt-60 js-tabs">
                <div className="row y-gap-48 items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="tabs__controls js-tabs-controls">
                            <div className=" wow animate__animated animate__fadeInUp">
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 1 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(1)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <img src="/img/home-1/features/laptop.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Agency Broucher Generator
</h4>
                                            <p className="mt-12">
                                            Pocket CRM introduces an innovative Real Estate Agency Brochure Generator, enabling you to design stunning Real Estate promotional materials in minutes. 

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp" data-wow-delay='0.2s'>
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 2 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(2)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <img src="/img/home-1/features/pencil.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Facebook ads Generator


</h4>
                                            <p className="mt-12">
                                            Revolutionize Your Facebook Advertising with the Facebook Ads Generator. Effortlessly design eye-catching Real Estate Property brochures and target your audience with precision, resulting in highly effective campaigns that boost engagement, drive conversions, and drive your business to new heights.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp" data-wow-delay='0.4s'>
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 3 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(3)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <img src="/img/home-1/features/shapes.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Invoice generator
</h4>
                                            <p className="mt-12">
                                            With Pocket CRM's intuitive invoice generator, creating professional and customizable real estate invoices becomes a breeze. Efficiently bill clients, include itemized details, and track payment statuses on the go. 

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="tabs__content js-tabs-content">
                            <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <img
                                                    className="initial-img"
                                                    src="/img/home-1/features/group-2.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <img
                                                    className="initial-img"
                                                    src="/img/home-1/phones/images-1.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <img
                                                    className="initial-img"
                                                    src="/img/home-1/phones/images.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};