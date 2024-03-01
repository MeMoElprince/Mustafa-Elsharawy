const Button = ({text}) => {
  return (
    <button
      class='
        relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg border-[1px] 
        dark:border-pallete-100 border-pallete2-100  py-2 px-4 font-semibold
        dark:text-pallete-500 text-pallete2-500 transition-all duration-500


        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] dark:before:bg-pallete-400 before:bg-pallete2-400
        before:transition-transform before:duration-1000
        before:content-[""]
        
        hover:scale-105 dark:hover:text-pallete-100 hover:text-pallete2-100
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95'


    >
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
      </svg>
      <span className="text-2xl">{text}</span>
    </button>
  );
};

export default Button;
