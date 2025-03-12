export default function Parallax({ navId, navImage, navTitle, navDesc }) {
    return (
        <div id={navId} className="flex justify-around relative w-full bg-black">
            <div className="relative w-full h-80 grid md:bg-fixed bg-center bg-cover bg-no-repeat content-center"
                style={{ backgroundImage: `url(${navImage})` }}>
                <div className='w-full'>
                    <h2 className={`text-center font-pressStart text-white text-3xl md:text-4xl break-words p-3 drop-shadow-[5px_2px_0px_black]`}>{navTitle}</h2>
                    <p className={`text-center font-pressStart text-white text-xl break-words drop-shadow-[5px_2px_0px_black]`}>{navDesc}</p>
                </div>
            </div>
        </div>
    );
}
