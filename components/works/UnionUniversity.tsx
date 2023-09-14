import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const UnionUniversity = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl">Frontend Developer at Union University</h3>
            <p className="text-sm mt-1 font-medium text-textDark">Creating and maintaining Content Management System. Mainly focused on WP and Joomla</p>
            <p className="text-sm mt-1 font-medium text-textDark">November 2018 - September - 2020</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span>
                        <TiArrowForward className="text-textGreen mt-1" />
                    </span>
                    Creating E-Commerce stores using WP and Joomla CMS
                </li>
            </ul>
        </motion.div>
    )
}

export default UnionUniversity