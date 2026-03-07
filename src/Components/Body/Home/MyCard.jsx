import img from '../../../Imgs/Me-2024.jpg';

const MyCard = () => {
    return (
        <div className="relative flex items-center justify-center p-6">
            {/* Decorative bg layers */}
            <div className="absolute inset-4 dark:bg-pallete-400/15 bg-pallete2-400/15 rounded-3xl rotate-6 scale-105" />
            <div className="absolute inset-4 dark:bg-pallete-400/8 bg-pallete2-400/8 rounded-3xl -rotate-3 scale-110" />

            {/* Image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-3xl overflow-hidden border-2 dark:border-pallete-400 border-pallete2-400 shadow-2xl dark:shadow-pallete-400/10 shadow-pallete2-400/10">
                <img
                    className="w-full h-full object-cover object-top"
                    src={img}
                    alt="Mustafa Elsharawy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t dark:from-pallete-100/50 from-pallete2-100/30 to-transparent" />
            </div>

            {/* Floating badge top-right */}
            <div className="absolute top-0 right-0 dark:bg-pallete-200 bg-pallete2-200 border dark:border-pallete-400/30 border-pallete2-400/30 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                    <span className="text-sm">⚡</span>
                    <span className="text-xs font-semibold dark:text-pallete-500 text-pallete2-500 whitespace-nowrap">Backend Engineer</span>
                </div>
            </div>

            {/* Floating badge bottom-left */}
            <div className="absolute bottom-0 left-0 dark:bg-pallete-200 bg-pallete2-200 border dark:border-pallete-400/30 border-pallete2-400/30 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <span className="text-xs font-semibold dark:text-pallete-500 text-pallete2-500 whitespace-nowrap">Open to Work</span>
                </div>
            </div>
        </div>
    );
};

export default MyCard;
