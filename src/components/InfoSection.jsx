


const InfoSection = () => {
    const stats = [
        { value: '১৩,০০,০০০', description: 'ব্যাগ রক্তের চাহিদা রয়েছে।', highlighted: true },
        { value: '৬,০০,০০০', description: 'ব্যাগ রক্তের চাহিদা পূরণ হয়।' },
        { value: '৩২%', description: 'রক্ত আসে ব্লাড ডোনারদের মাধ্যমে।' },
        { value: '৫৫,০০০', description: 'মানুষ মৃত্যুবরণ করে রক্তের অভাবে।' },
    ];

    return (
        <div
            className="relative bg-[#F5F5F5] py-10 my-10"
            style={{ backgroundImage: `url(https://i.ibb.co/KXLdFwW/Line-8.png)`, backgroundSize: 'cover' }}
        >
            <div className="max-w-[1500px] w-full mx-auto px-4">
                <h2 className="text-red-600 font-bold text-3xl mb-6 lg:md:text-start text-center">তথ্যসঞ্চার</h2>
                <div className="grid md:grid-cols-2 gap-6 lg:md:justify-between justify-center items-center">
                    <div className="grid md:grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 border-2 rounded-xl shadow-md bg-white hover:bg-[#F9E6E6] border-dashed hover:border-[#BF0000] border-[#fff] cursor-pointer h-[190px] flex flex-col items-center justify-center`}
                            >
                                <p className="text-2xl font-bold text-red-600 mb-2">{stat.value}</p>
                                <p>{stat.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co/JBYbzb0/news.png" alt="Article 1" className="shadow-md rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
