import Head from 'next/head'

const About = () => {
    return (  
        <> 
            <Head>
                <title>Good Near You | About</title>
                <meta name="keywords" content="goodnearyou"/>
            </Head>
            <div>
                <h2>About & Register</h2>
                <p>Good Near You is a site that collect all your favorite vintage stores in one place. Our interactive map allows you to search and find stores near you. On this site you can also find information about each store, such as opening hours, contact information, etc. In order for you to have as much information as possible regarding each store our AI analyzes each store&apos;s insagram feed. Based on this we provide an estimation regarding what type of products each store is selling. It have never been easier to find good vintage stores near you!
                </p>

                <p>
                    Do you own a vintage store and want to be added on the site? We are always welcoming new store to the site, the more the marrier! Simply fill out the form below and your store will be added to the site. Don&apos;t forget to link your instagram feed in order for us to make a prediction of your supply and bring more customers to your store!
                </p>
            </div>

            <section id="contactForm">
                <form onSubmit={null}>
                    <fieldset>
                        <legend>Register your store</legend>
                        <p>
                            <label htmlFor="name">Store Name*: </label>
                            <input id="name" type="text" required />
                        </p>

                        <p>
                            <label htmlFor="phone">Phone Number*: </label>
                            <input id="phone" type="text" autoComplete="phone" required />
                        </p>

                        <p>
                            <label htmlFor="insta">Insagram username: </label>
                            <input id="insta" type="text" autoComplete="phone" required />
                        </p>

                        <p>
                            <label htmlFor="street">Street name*: </label>
                            <input id="street" type="text" required />
                        </p>

                        <p>
                            <label htmlFor="city">City*: </label>
                            <input id="city" type="text" required />
                        </p>

                        <p>
                            <h3>What type pf products do you sell?: </h3>
                            <div id="checkboxes">
                            <input id="cloths" type="checkbox"/>
                            <label htmlFor="cloths">Cloths</label>

                            <input id="furniture" type="checkbox"/>
                            <label htmlFor="furniture">Furniture</label>

                            <input id="utensils" type="checkbox"/>
                            <label htmlFor="utensils">Utensils</label>

                            <input id="moviesGames" type="checkbox"/>
                            <label htmlFor="moviesGames">Movies & Games</label>

                            <input id="textile" type="checkbox"/>
                            <label htmlFor="textile">Textile</label>
                            </div>
                    
                        </p>

                        <p>
                            <button className="submit" type="submit">Register store</button>
                        </p>

                    </fieldset>
                </form>
            </section>
        </>
    );
}
 
export default About;