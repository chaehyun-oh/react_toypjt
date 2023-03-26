import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import ToursList from "./components/ToursList";
import Bookmark from "./components/Bookmark";
import Route from "./components/Route";

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours);
    }

    const addToBookmark = (id) => {
        const selectTour = (tours.filter((tour) => tour.id === id));
        const newBookmark = [...selectTour]


        function checkMark(element) {
            if (element.id == id) {
                return true;
            }
        }

        if (bookmark.length === 0) {
            setBookmark([...bookmark, ...newBookmark]);
        }

        if (!bookmark.some(checkMark)) {
            setBookmark([...bookmark, ...newBookmark]);
        }

        // console.log(bookmark);
    }

    const clearBookmark = () => {
        setBookmark([]);
    }

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const tours = await res.json()
            setIsLoading(false);
            setTours(tours);

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTours()
    }, []);

    if (isLoading) {
        return <Loading times={5} />
    }
    if (tours.length === 0) {
        return (
            <div className="container mx-auto grid grid-cols-1 gap-4 mt-4">
                <Navbar />
                <h3 className="mb-4 text-2xl">No tours left</h3>
                <button onClick={() => fetchTours()} className="bg-blue-400 rounded-full  p-2 text-white hover:bg-blue-500">Refresh</button>
            </div>
        )
    }

    return (
        <div className="container mx-auto grid grid-cols-1 gap-4 mt-4">
            <Navbar />
            <Route path='/'>
                <ToursList tours={tours} removeTour={removeTour} addToBookmark={addToBookmark} />
            </Route>
            <Route path='/bookmark'>
                <Bookmark bookmark={bookmark} clearBookmark={clearBookmark} />
            </Route>
        </div>
    );
}

export default App;