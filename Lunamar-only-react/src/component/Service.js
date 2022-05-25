import './Service.css';

function Service() {
    return (
        <>
            <div className="ServiceBox"><span>
                <h1 id="servicesLabel" style={{color: "#2C81B8"}}>Services</h1>
            </span>
            </div>

            <div id="serviceContentDiv">

                <section id="serviceSection">
                    <article className="services">
                        <h2>Manage Buildings</h2>
                        <p>The building manager has the access to view statistics related to building on the homepage. They can
                            also access all the features which are under building management( i.e Building & Apartment, Owner
                            Information, Services Opted, Service Complaints, Maintenance & Bills). <br></br><br></br>
                            {/* <a href="View-Building.html" style= {{textDecoration: "solid", color: "#2C81B8"}} >Click here</a> */}
                        </p>
                    </article>
                    <article className="services">
                        <h2>Management of Gardens and Surroundings</h2>
                        <p>The garden and pool manager maintains the operations for Plant, Garden Personnel & Security, Garden,
                            Pool.
                            <br></br><br></br>
                            {/* <a href="View Garden.html" className="serviceLink">Click here</a> */}
                        </p>
                    </article>
                    <article className="services">
                        <h2>Management of Resident</h2>
                        <p>Residents have ability to raise service requests and report incidents. Residents can also view and manager their vistor's information.
                            <br></br><br></br>
                            {/* <a href="manager-resident-page.html" className="serviceLink">Click here</a> */}
                        </p>
                    </article>
                    <article className="services">
                        <h2>Management of Visitors</h2>
                        <p>The visitor manager has rights to log visitors information and their timings.
                            <br></br><br></br>
                            {/* <a href="visitor-data.html" className="serviceLink">Click here</a> */}
                        </p>
                    </article>

                </section>

            </div>
        </>
    );
}

export default Service;
