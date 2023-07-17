import { useEffect, useState } from 'react';
import CountUp from '@/components/elements/CounterUp';

export default function CounterTwo () {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
      const elements = document.getElementsByClassName('counterUp');
      if (elements.length > 0) {
        const element = elements[0];
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport && !inViewport) {
          setInViewport(true);
        }
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <>
            <section className="layout-pt-lg layout-pb-lg section-bg-color">
                <div className="section-bg-color__item bg-orange rounded-8">
                    <div className="rounded-8 bg-image js-rellax js-lazy" style={{ backgroundImage: 'url("../img/sections/bg.png")' }} />
                </div>
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-8 col-lg-9">
                            <div className="sectionHeading -light">
                                <h2 className="sectionHeading__title">Forming strong and trusted connections with our clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-48 pt-60">
                        <div className="col-lg-3 col-6">
                            <div className="text-center counterUp">
                                <div className="text-50 text-white fw-700">{inViewport && <CountUp end={28} duration={10} />}k</div>
                                <h5 className="text-white text-lg">Projects</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="text-center counterUp">
                                <div className="text-50 text-white fw-700">{inViewport && <CountUp end={100} duration={10} />}+</div>
                                <h5 className="text-white text-lg">Locations</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="text-center counterUp">
                                <div className="text-50 text-white fw-700">{inViewport && <CountUp end={120} duration={10} />}%</div>
                                <h5 className="text-white text-lg">Growth</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="text-center counterUp">
                                <div className="text-50 text-white fw-700">{inViewport && <CountUp end={22} duration={10} />}k</div>
                                <h5 className="text-white text-lg">Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
