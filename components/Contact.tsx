const Contact = () => {
    return (
        <section id="contact" className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
            <p className="text-lg text-textGreen font-semibold flex items-center tracking-wide">
                04. What's Next?
            </p>
            <h2 className="text-5xl font-semibold">Get In Touch</h2>
            <p className="max-w-[600px] text-center text-textDark">Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <a href="mailto:adusan53@gmail.com" className="w-40 h-14 border items-center flex justify-center border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                Contact Me
            </a>
        </section>
    )
}

export default Contact