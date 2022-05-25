import './About.css';

function About() {
    return (
        <div>
            <div className="aboutUsBox">
                <span>
                    <h1 id="aboutUsLabel" style={{color: "#2C81B8"}}>About Us</h1>
                </span>
            </div>

            <div id="aboutUsContentDiv">

                <section id="aboutUsSection">

                    <article className="aboutUs">
                        <h2>Who are we?</h2>
                        <p>Lunamar Management is an American luxury developer committed to redefining the art of living through
                            sustainable communities.
                            Established in 1976 as an interior decoration firm in Dallas, the company has grown its presence
                            with developments and investments in the California, Michigan, New Mexico, Arizona.
                            Over the last four decades, Lunamar Management has also redefined the real estate value chain by
                            leveraging its inherent in-house capabilities of conceptualisation, design and development.
                            Lunamar Managament is currently developing Dallas Hartland, a luxurious freehold community spread
                            across eight million square feet in the heart of Dallas.</p>
                    </article>
                    <article className="aboutUs">
                        <h2>What we do?</h2>
                        <p>Lunamar's Subdivision strives to provide an exceptional residential experience by delivering
                            supportive services that foster diverse
                            engagement, individual growth, and community belonging. Lunamar residence feature fully furnished
                            three-bedroom suites, a variety of recreation areas, gardens, large communal spaces, and study
                            lounges..</p>
                    </article>

                </section>
            </div> 
            </div>
    );
}

export default About;