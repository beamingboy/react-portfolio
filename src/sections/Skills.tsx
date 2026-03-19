import skills from "../data/skills";

function Skills() {
    return (
        <section>
            <h2>Skills</h2>
            {skills.map((group, index) => (
                <div key={index}>
                    <h3>{group.category}</h3>
                    <div>
                        {group.items.map((skill, i) => (
                            <span key={i}>
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>
            ))}
        </section>
    );
}

export default Skills;