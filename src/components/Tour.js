import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function Tour({ id, image, info, name, price, removeTour, addToBookmark }) {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="my-10 shadow-lg p-3 rounded-md">
            <img src={image} alt={name} className="rounded-md" />
            <div className="flex justify-between my-5">
                <h4 className="text-xl font-bold">{name}</h4>
                <span className="rounded-full border-2 border-red-400 px-3 text-red-400 " >${price}</span>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)} className="text-blue-400 hover:text-blue-500 hover:underline">
                    {readMore ? <GoTriangleUp /> : <GoTriangleDown />}
                </button>
            </p>
            <div className="mt-4 flex justify-center">
                <button onClick={() => {
                    addToBookmark(id)
                }}
                    className="bg-green-400 rounded-full  p-2 text-white hover:bg-green-500 mr-3">
                    Bookmark
                </button>
                <button onClick={() => removeTour(id)} className="bg-red-400 rounded-full  p-2 text-white hover:bg-red-500">
                    Not interested
                </button>
            </div>
        </div>
    )
}

export default Tour;