import { motion } from "framer-motion"
import ArchiveCard from "./ArchiveCard"

const Archive = () => {

    return (
        <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl font-semibold flex items-center">
                    Other Noteworthy Projects
                </h2>
                <p className="text-sm text-textGreen">view the archive</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-3 gap-6 mt-10 lgl:px-10">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .1 }}
                >
                    <ArchiveCard
                        title="MERN Authentication"
                        description="MERN Authentication with JWT - (JSON Web Token), Redux"
                        listItems={["MongoDB", "Express", "React", "Node.js", "JWT", "Redux"]}
                        link="https://github.com/dulee19/mern_auth"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                >
                    <ArchiveCard
                        title="Codex AI Chat"
                        description="Codex AI Chat with Node.js and React"
                        listItems={["Express", "React", "Node.js"]}
                        link="https://github.com/dulee19/codex_ai_chat"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                >
                    <ArchiveCard
                        title="StoryBooks"
                        description="StoryBooks Application with Node.js, Google Auth and React"
                        listItems={["Express", "Handlebars", "Node.js", "Google Auth"]}
                        link="https://github.com/dulee19/Node.js-StoryBooks-App"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                >
                    <ArchiveCard
                        title="IT Logger"
                        description="IT Logger for delivering logs"
                        listItems={["JSON-Server", "React", "Redux"]}
                        link="https://github.com/dulee19/ItLogger"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}
                >
                    <ArchiveCard
                        title="DevConnector"
                        description="Social media for developers"
                        listItems={["MongoDB", "Express", "React", "Node.js", "JWT"]}
                        link="https://github.com/dulee19/devconnector_mern/tree/main"
                    />
                </motion.div>

            </div>
        </section>

    )
}

export default Archive