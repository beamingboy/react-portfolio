import personal from "../data/personal";

function Hero() {
    return (
        <section>
            <h1>{personal.name}</h1>
            <h1>{personal.title}</h1>
            <p>{personal.tagline}</p>
        </section>
    );
}

export default Hero;