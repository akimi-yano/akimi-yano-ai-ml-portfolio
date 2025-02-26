export default function Button({children, varient, ...props}) {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold focus:outline-none transition duration-300 ease-in-out"

    const varientStyles = {
        filled: "bg-slate-600 text-white hover:bg-slate-900",
        outline: "text-slate-600 border border-slate-600 hover:bg-slate-600 hover:text-white",
        text: "text-slate-600 bg-transparent hover:bg-gray-100 hover:text-gray-500",
        disabled: "disabled: bg-gray-300 pointer-events-none",
    };

    let buttonClasses = `${baseStyles} ${varientStyles[varient]}`

    return (
        <button className={buttonClasses}>{children}</button>
    );
}
