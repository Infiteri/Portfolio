import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection() {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold ">Passionate C++ DEVELOPER</h3>

                    <p className="text-muted-foreground">
                        With over 4 years of low level C++ programmer, i can assuer you I can write performent and important code.
                    </p>

                    <p className="text-muted-foreground">
                        I can also write performant C code, libraries and even interop with MySql in C++ for low level, optimised database code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primar/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Low/High Level Development</h4>
                                <p className="text-muted-foreground">
                                    Creating fast, well-built code and API's in languages such as C and C++, Java, Javascript and Python.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primar/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Team leader</h4>
                                <p className="text-muted-foreground">
                                    Works well in leader position, distributing tasks equally based on skills. But can also work alone. Works well in English and Romainian environments
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primar/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Maintainer</h4>
                                <p className="text-muted-foreground">
                                    Can maintain codebases of all sorts of complexity with the right equipment, can also use other pieces of code wherever the situation asks for
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </section>
}