import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Gym API",
        description: "A simple gym API written in Java + SpringBoot, with an external (WIP) CLI Tool",
        tags: ["Java", "Springboot", "MySQL"],
        image: "/projects/project2.png",
        demoUrl: "#",
        githubUrl: "https://github.com/Infiteri/GymApi",
    },
    {
        id: 2,
        title: "Personal Protfolio",
        description: "A simple, slick yet beautiful personal portfolio",
        tags: ["React", "Tailwind", "Javascript"],
        image: "/projects/project1.png",
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Personal Protfolio",
        description: "A simple, slick yet beautiful personal portfolio",
        tags: ["React", "Tailwind", "Javascript"],
        image: "/projects/project1.png",
        demoUrl: "#",
        githubUrl: "#",
    }
]

export default function ProjectsSection() {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">a
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-auto">
                My most proud-of projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center`">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Infiteri" >
                    Check My Github
                    <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}