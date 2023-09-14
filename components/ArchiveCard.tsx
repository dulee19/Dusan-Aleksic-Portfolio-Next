import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
    title: string;
    description: string;
    listItems: string[];
    link: string
}

const ArchiveCard = ({ title, description, listItems, link }: Props) => {
    return (
        <a href={link} target="_blank">
            <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="flex justify-between items-center">
                    <FaRegFolder className="text-4xl text-textGreen" />
                    <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold tracking-wide group-hover:text-textGreen">{title}</h2>
                    <p>{description}</p>
                </div>
                <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </a>
    )
}

export default ArchiveCard