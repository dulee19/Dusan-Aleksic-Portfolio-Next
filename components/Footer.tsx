import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='flex flex-col items-center justify-center w-full py-6 gap-4'>
            <div className="flex gap-3 mt-10">
                <a href="https://github.com/dulee19" target="_blank">
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub />
                    </span>
                </a>

                <a href="https://linkedin.com/in/dusan-aleksic-b22237211" target="_blank">
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin />
                    </span>
                </a>
            </div>
            <div>Dušan Aleksić | All Right Reserved | {currentYear}</div>
        </div>
    )
}

export default Footer