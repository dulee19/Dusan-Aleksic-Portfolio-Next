"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Freelance from "./works/Freelance";
import Selltico from "./works/Selltico";
import UnionUniversity from "./works/UnionUniversity";

const positions = [
    {
        positionInfo: [
            { name: "Freelance" },
            { name: "Union University" },
            { name: "Selltico" }
        ]
    }
]

const Experience = () => {
    const [workFreelance, setWorkFreelance] = useState<boolean>(true);
    const [workUnion, setWorkUnion] = useState<boolean>(false);
    const [workSelltico, setWorkSelltico] = useState<boolean>(false);

    const handleFreelance = () => {
        setWorkFreelance(true);
        setWorkUnion(false);
        setWorkSelltico(false)
    }

    const handleUnion = () => {
        setWorkUnion(true);
        setWorkFreelance(false);
        setWorkSelltico(false);
    }

    const handleSelltico = () => {
        setWorkSelltico(true);
        setWorkFreelance(false);
        setWorkUnion(false);
    }

    return (
        <section id="experience" className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            <SectionTitle title="Where I have worked" titleNo="02" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li 
                    onClick={handleFreelance} 
                    className={`${workFreelance ? 'border-l-textGreen text-textGreen border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium' : 'border-l-hoverColor text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'}`}>
                        Freelance
                    </li>
                    <li 
                        onClick={handleUnion} 
                        className={`${workUnion ? 'border-l-textGreen text-textGreen border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium' : 'border-l-hoverColor text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'}`}>
                        Union University
                    </li>
                    <li 
                        onClick={handleSelltico} 
                        className={`${workSelltico ? 'border-l-textGreen text-textGreen border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium' : 'border-l-hoverColor text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'}`}>
                        Selltico
                    </li>
                </ul>
                {workFreelance && (
                    <Freelance />
                )}

                {workUnion && (
                    <UnionUniversity />
                )}

                {workSelltico && (
                    <Selltico />
                )}
            </div>
        </section>
    )
}

export default Experience