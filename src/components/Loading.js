function Loading({ times }) {
    // const outerClassNames = 'relative overflow-hidden bg-gray-200 rounded mb-2.5';
    // const innerClassNames = 'animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200';

    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return <div key={i} className='relative overflow-hidden bg-gray-200 rounded mb-2.5 h-96 w-full'>
                <div className='animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200' />
            </div>
        });

    return boxes;
}

export default Loading;