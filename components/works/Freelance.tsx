import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Freelance = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl">Frontend Developer at UpWork</h3>
            <p className="text-sm mt-1 font-medium text-textDark">Creating HTML/CSS Templates</p>
            <p className="text-sm mt-1 font-medium text-textDark">May 2018 - October - 2018</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span>
                        <TiArrowForward className="text-textGreen mt-1" />
                    </span>
                    Write modern, performant, maintainable code for a diverse array of client and internal projects
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span>
                        <TiArrowForward className="text-textGreen mt-1" />
                    </span>
                    Work with a variety of different languages, platforms, frameworks, and content management systems such as HTML, CSS, SCSS, JavaScript, jQuery, Joomla, 
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span>
                        <TiArrowForward className="text-textGreen mt-1" />
                    </span>
                    Communicate with multi-disciplinary teams of engineers, designers, and clients on a daily basis
                </li>
            </ul>
        </motion.div>
    )
}

export default Freelance