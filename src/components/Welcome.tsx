function Welcome() {
    return (
        <section
            className="bg-white bg-opacity-50 py-7 px-6 gap-2 text-slate-800 flex flex-col items-center rounded-md 
            shadow-lg hover:shadow-2xl"
        >
            <h1 className={`${font} text-4xl`}>Next Boilerplate</h1>
            <h2 className={`${font} text-3xl `}>Integrated With Tailwind CSS</h2>
            <span className="font-poorStory font-semibold text-md text-gray-800">mza-codes</span>
            
        </section>
    );
}

export default Welcome;

var font = `font-semibold font-kanit leading-loose tracking-wider`;
