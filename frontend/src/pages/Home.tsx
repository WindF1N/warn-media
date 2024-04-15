import dogImage from "../assets/dog.png";
import berriesImage from "../assets/berries.png";
import berryImage from "../assets/berry.png";

function Home() {
  return (
    <div className="flex flex-col min-h-[100vh]"> 
        <div className="absolute z-[-2] inset-0 w-[100vw] h-[110vh] bg-[url('/bg.png')] bg-cover bg-center flex justify-center items-center"></div>
        <section className="relative w-[100vw] min-h-[100vh]">
            <div className="w-full min-h-[100vh] flex justify-center items-center max-sm:flex-col max-sm:justify-start max-sm:pt-[86px] sm:max-w-[1300px] mx-auto px-4 gap-[20px]">
                <div className="relative flex flex-col gap-[16px] max-sm:order-2 p-1">
                    <div className="absolute z-[-1] top-[-100px] left-[-100px] w-[600px] h-[600px] bg-[rgba(104,104,104,.5)] blur-[300px]"></div>
                    <div className="sm:hidden absolute z-[-1] top-[-300px] w-[600px] h-[600px] bg-gradient-to-b from-[#FF7056] to-[#FFBE18] blur-[300px]"></div>
                    <img src={dogImage} alt="" className="absolute right-0 top-0 z-[0] translate-x-[45%] sm:hidden -scale-x-100" />
                    <img src={berriesImage} alt="" className="absolute left-0 top-[-7vw] z-[-1] translate-x-[-100%] max-sm:hidden" />
                    <h1 className="max-sm:text-[36px] sm:text-[64px] text-white leading-[120%]">WarnMedia<br/>Ձեր հոսքային<br/>կենտրոնը</h1>
                    <p className="text-[16px] text-[#FFA53C] leading-[150%] max-sm:max-w-[90%]">
                        լավագույն հեռարձակողներ, առավելագույն բոնուսներ և անվերջ զվարճանք
                    </p>
                    <div className="pt-[16px]">
                        <button type="button" className="flex justify-center items-center bg-[#F2994A] max-sm:w-full sm:w-[20vw] text-black text-[18px] leading-[22px] py-[14px] px-[24px]">
                            Կազմը
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute z-[-1] top-[-600px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-b from-[#FF7056] to-[#FFBE18] blur-[300px]"></div>
                    <img src={dogImage} alt="" className="absolute right-0 bottom-[4vw] z-[0] translate-x-[65%] max-sm:hidden" />
                    <img src={berryImage} alt="" className="absolute right-0 top-[-7vw] z-[0] translate-x-[70%] max-sm:hidden" />
                    <div className="bg-[rgba(0,0,0,0.2)] sm:p-[44px] sm:backdrop-blur-[55px] sm:rounded-[15px] sm:border sm:border-[rgba(255,255,255,.1)]">
                        <iframe className="max-sm:w-[100vw] max-sm:h-[65vw] sm:w-[34vw] sm:h-[20vw] sm:rounded-[15px]" src="https://www.youtube.com/embed/jBKbUJ5d6oI?si=ppIaIphUsigLPcEE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative flex flex-col items-center mt-[-5vh]">
            <div className="max-sm:hidden absolute z-[-2] top-[-300px] left-[-600px] w-[600px] h-[600px] bg-gradient-to-b from-[#FF7056] to-[#FFBE18] blur-[300px]"></div>
            <div className="absolute z-[-1] top-[-300px] w-[600px] h-[600px] bg-[rgba(104,104,104,.5)] blur-[300px]"></div>
            <h2 className="sm:text-[64px] max-sm:text-[36px] text-white leading-[120%] text-center">Կազմը</h2>
            <p className="sm:text-[16px] max-sm:text-[#FFA53C] sm:text-[#5E5D5D] text-center mt-[20px]">это наши работы, мы любим когда вы их смотрите, что бы узнать нас получше!</p>
            <div className="max-sm:mt-[30px] sm:mt-[77px] flex items-center gap-[20px] overflow-x-auto max-w-[100vw] px-4 no-scrollbar">
                <div className="p-[24px] border border-[rgba(255,255,255,.1)] rounded-[15px] max-sm:min-w-[85vw] sm:min-w-[20vw]">
                    <div className="relative min-h-[150px] bg-[rgba(255,255,255,.1)] rounded-[9px]">
                        <div className="absolute top-[10px] right-[10px] bg-[#DC143C] px-[8px] py-[4px] rounded-[8px]">LIVE</div>
                    </div>
                    <span className="block text-white mt-[15px]">Название или имя</span>
                    <div className="relative mt-[15px] flex items-center justify-around gap-[10px] px-[12px] py-[14px] border border-[#F2994A] rounded-[15px] text-[#F2994A] pr-[50px]">
                        <div>ПРОМОКОД:</div>
                        <div>ПРОМОКОД</div>
                        <div className="absolute right-[12px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60156 11.3963C6.60156 8.67028 6.60156 7.30728 7.44456 6.46028C8.28856 5.61328 9.64556 5.61328 12.3616 5.61328H15.2416C17.9566 5.61328 19.3146 5.61328 20.1576 6.46028C21.0016 7.30728 21.0016 8.67028 21.0016 11.3963V16.2163C21.0016 18.9423 21.0016 20.3053 20.1576 21.1523C19.3146 21.9993 17.9566 21.9993 15.2416 21.9993H12.3616C9.64556 21.9993 8.28856 21.9993 7.44456 21.1523C6.60156 20.3053 6.60156 18.9423 6.60156 16.2163V11.3963Z" fill="#F2994A"/>
                                <path opacity="0.5" d="M4.172 3.172C3 4.343 3 6.229 3 10V12C3 15.771 3 17.657 4.172 18.828C4.789 19.446 5.605 19.738 6.792 19.876C6.6 19.036 6.6 17.88 6.6 16.216V11.397C6.6 8.671 6.6 7.308 7.443 6.461C8.287 5.614 9.644 5.614 12.36 5.614H15.24C16.892 5.614 18.04 5.614 18.878 5.804C18.74 4.611 18.448 3.792 17.828 3.172C16.657 2 14.771 2 11 2C7.229 2 5.343 2 4.172 3.172Z" fill="#F2994A"/>
                            </svg>  
                        </div>
                    </div>
                    <button type="button" className="mt-[15px] flex justify-center items-center bg-[#F2994A] max-sm:w-full sm:w-[20vw] text-black text-[18px] leading-[22px] py-[14px] px-[24px]">
                        Կազմը
                    </button>
                </div>
                <div className="p-[24px] border border-[rgba(255,255,255,.1)] rounded-[15px] max-sm:min-w-[85vw] sm:min-w-[20vw]">
                    <div className="relative min-h-[150px] bg-[rgba(255,255,255,.1)] rounded-[9px]">
                        <div className="absolute top-[10px] right-[10px] bg-[#DC143C] px-[8px] py-[4px] rounded-[8px]">LIVE</div>
                    </div>
                    <span className="block text-white mt-[15px]">Название или имя</span>
                    <div className="relative mt-[15px] flex items-center justify-around gap-[10px] px-[12px] py-[14px] border border-[#F2994A] rounded-[15px] text-[#F2994A] pr-[50px]">
                        <div>ПРОМОКОД:</div>
                        <div>ПРОМОКОД</div>
                        <div className="absolute right-[12px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60156 11.3963C6.60156 8.67028 6.60156 7.30728 7.44456 6.46028C8.28856 5.61328 9.64556 5.61328 12.3616 5.61328H15.2416C17.9566 5.61328 19.3146 5.61328 20.1576 6.46028C21.0016 7.30728 21.0016 8.67028 21.0016 11.3963V16.2163C21.0016 18.9423 21.0016 20.3053 20.1576 21.1523C19.3146 21.9993 17.9566 21.9993 15.2416 21.9993H12.3616C9.64556 21.9993 8.28856 21.9993 7.44456 21.1523C6.60156 20.3053 6.60156 18.9423 6.60156 16.2163V11.3963Z" fill="#F2994A"/>
                                <path opacity="0.5" d="M4.172 3.172C3 4.343 3 6.229 3 10V12C3 15.771 3 17.657 4.172 18.828C4.789 19.446 5.605 19.738 6.792 19.876C6.6 19.036 6.6 17.88 6.6 16.216V11.397C6.6 8.671 6.6 7.308 7.443 6.461C8.287 5.614 9.644 5.614 12.36 5.614H15.24C16.892 5.614 18.04 5.614 18.878 5.804C18.74 4.611 18.448 3.792 17.828 3.172C16.657 2 14.771 2 11 2C7.229 2 5.343 2 4.172 3.172Z" fill="#F2994A"/>
                            </svg>  
                        </div>
                    </div>
                    <button type="button" className="mt-[15px] flex justify-center items-center bg-[#F2994A] max-sm:w-full sm:w-[20vw] text-black text-[18px] leading-[22px] py-[14px] px-[24px]">
                        Կազմը
                    </button>
                </div>
                <div className="p-[24px] border border-[rgba(255,255,255,.1)] rounded-[15px] max-sm:min-w-[85vw] sm:min-w-[20vw]">
                    <div className="relative min-h-[150px] bg-[rgba(255,255,255,.1)] rounded-[9px]">
                        <div className="absolute top-[10px] right-[10px] bg-[#DC143C] px-[8px] py-[4px] rounded-[8px]">LIVE</div>
                    </div>
                    <span className="block text-white mt-[15px]">Название или имя</span>
                    <div className="relative mt-[15px] flex items-center justify-around gap-[10px] px-[12px] py-[14px] border border-[#F2994A] rounded-[15px] text-[#F2994A] pr-[50px]">
                        <div>ПРОМОКОД:</div>
                        <div>ПРОМОКОД</div>
                        <div className="absolute right-[12px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60156 11.3963C6.60156 8.67028 6.60156 7.30728 7.44456 6.46028C8.28856 5.61328 9.64556 5.61328 12.3616 5.61328H15.2416C17.9566 5.61328 19.3146 5.61328 20.1576 6.46028C21.0016 7.30728 21.0016 8.67028 21.0016 11.3963V16.2163C21.0016 18.9423 21.0016 20.3053 20.1576 21.1523C19.3146 21.9993 17.9566 21.9993 15.2416 21.9993H12.3616C9.64556 21.9993 8.28856 21.9993 7.44456 21.1523C6.60156 20.3053 6.60156 18.9423 6.60156 16.2163V11.3963Z" fill="#F2994A"/>
                                <path opacity="0.5" d="M4.172 3.172C3 4.343 3 6.229 3 10V12C3 15.771 3 17.657 4.172 18.828C4.789 19.446 5.605 19.738 6.792 19.876C6.6 19.036 6.6 17.88 6.6 16.216V11.397C6.6 8.671 6.6 7.308 7.443 6.461C8.287 5.614 9.644 5.614 12.36 5.614H15.24C16.892 5.614 18.04 5.614 18.878 5.804C18.74 4.611 18.448 3.792 17.828 3.172C16.657 2 14.771 2 11 2C7.229 2 5.343 2 4.172 3.172Z" fill="#F2994A"/>
                            </svg>  
                        </div>
                    </div>
                    <button type="button" className="mt-[15px] flex justify-center items-center bg-[#F2994A] max-sm:w-full sm:w-[20vw] text-black text-[18px] leading-[22px] py-[14px] px-[24px]">
                        Կազմը
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
