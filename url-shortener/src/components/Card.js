export default function Card({ header, desc, src, down }) {
    return (
        <div className="bg-white w-[30%] p-8 rounded-md relative" style={{top: down+"px"}}>
            <div className="w-[76px] h-[76px] rounded-full bg-(--dark-violet) grid place-items-center absolute top-[-38px]">
                <img src={src} alt="" className="w-[38px]"/>
            </div>
            <p className="text-(--very-dark-blue) mt-8 font-poppins-bold text-2xl mb-4">{header}</p>
            <p className="text-(--gray)">{desc}</p>
        </div>
    );
}