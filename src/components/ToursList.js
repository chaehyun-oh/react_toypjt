import Tour from "./Tour";

function ToursList({ tours, removeTour, addToBookmark }) {
    return (
        <div>
            <h2 className="text-sky-600 text-3xl text-center p-3">Our Tours</h2>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} addToBookmark={addToBookmark} />
                })}
            </div>
        </div>
    )

}

export default ToursList;