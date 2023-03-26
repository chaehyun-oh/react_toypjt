function Bookmark({ bookmark, clearBookmark }) {
    if (bookmark.length === 0) {
        return (
            <div>
                No bookmarks Left.
            </div>
        )
    }

    const renderedBookmark =
        bookmark.map((book) => {
            return (
                <div key={book.id} className='my-5 shadow-lg p-3 rounded-md'>
                    {book.name}
                </div>
            )
        })


    return (<div>
        <div className="flex justify-between">
            <p>Bookmarks: {bookmark.length}</p>
            <button onClick={clearBookmark}
                className="border-2 border-red-400 rounded-full  p-2 text-red-400 hover:bg-red-400 hover:text-white"
            >Clear All</button>
        </div>
        {renderedBookmark}
    </div>
    )
}

export default Bookmark;