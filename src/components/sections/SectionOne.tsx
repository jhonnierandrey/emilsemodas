import React from 'react';

function SectionOne() {
    return(
        <section id="one" className="wrapper style1">
            <div className="container">
                <header className="major">
                    <h2>Lorem ipsum dolor</h2>
                    <p>Ipsum dolor tempus commodo turpis adipiscing adipiscing in tempor placerat<br />
                    sed amet accumsan enim lorem sem turpis ut. Massa amet erat accumsan curae<br />
                    blandit porttitor faucibus in nisl nisi volutpat massa mi non nascetur.</p>
                </header>
                <div className="slider">
                    <span className="nav-previous"></span>
                    <div className="viewer">
                        <div className="reel">
                            <div className="slide">
                                <img src="images/slide01.jpg" alt="" />
                            </div>
                            <div className="slide">
                                <img src="images/slide02.jpg" alt="" />
                            </div>
                            <div className="slide">
                                <img src="images/slide03.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <span className="nav-next"></span>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;