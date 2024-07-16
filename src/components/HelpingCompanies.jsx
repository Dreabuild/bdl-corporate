

const HelpingCompanies = () => {
    const logos = [
        { src: "https://i.ibb.co/N18qyXk/1.png", alt: 'Logo 1' },
        { src: "https://i.ibb.co/yPsr8zd/2.png", alt: 'Logo 2' },
        { src: "https://i.ibb.co/JntL9Pp/3.png", alt: 'Logo 3' },
        { src: "https://i.ibb.co/d6LzPDL/7.png", alt: 'Logo 3' },
        { src: "https://i.ibb.co/T0200Td/8.png", alt: 'Logo 3' },
        { src: "https://i.ibb.co/FgJk6tr/9.png", alt: 'Logo 3' },
        // Add other logos similarly
    ];
    return (
        <div>
            <div className="max-w-[1500px] w-full mx-auto px-4 py-6">
                <h2 className="text-center font-bold text-2xl mb-10 lg:md:text-[32px] text-[24px] text-[#000] ">সহযোগী <span className="text-[#BF0000]">সংস্থা</span></h2>
                <div className="flex overflow-x-auto space-x-4 justify-center gap-x-4 items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <img src={logo.src} alt={logo.alt} className=" mx-2" />
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <iframe width="650" height="315" src="https://www.youtube.com/embed/hwuqArMKUco?si=JkPfVNe2bctQKPv0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    );
};

export default HelpingCompanies;