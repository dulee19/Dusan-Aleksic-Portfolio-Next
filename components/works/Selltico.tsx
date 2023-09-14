import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Selltico = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl">Frontend Developer at Selltico</h3>
            <p className="text-sm mt-1 font-medium text-textDark">E-Commerce Stores, B2B Portals, Internet Presentations</p>
            <p className="text-sm mt-1 font-medium text-textDark">October 2020 - Present</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span>
                        <TiArrowForward className="text-textGreen mt-1" />
                    </span>
                    Creating E-Commerce stores, B2B portals and internet presentations. Using PHP, Laravel, JavaScript, PostgreSQL database.
                </li>
            </ul>
        </motion.div>
    )
}

export default Selltico