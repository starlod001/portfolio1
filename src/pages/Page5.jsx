import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen bg-black text-white'>
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 flex items-center">
                        <i className="fas fa-book mr-2 text-green-400" />
                        My Reads
                    </h2>
                    <p className="mb-4">Explore the books shaping my perspectives.</p>
                    <img src="https://placehold.co/150x200" alt="Book cover of 'Atomic Habits'" className="rounded-lg" />
                 </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 flex items-center">
                        <i className="fas fa-tools mr-2 text-green-400" />
                        My Toolbox
                    </h2>
                    <p className="mb-4">Explore the technologies and tools I use to craft exceptional digital experiences.</p>
                    <div className="flex flex-wrap gap-2">
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                            <i className="fab fa-js-square text-blue-400 mr-2" />
                            JavaScript
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                            <i className="fab fa-html5 text-blue-400 mr-2" />
                            HTML5
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <i className="fab fa-css3-alt text-blue-400 mr-2" />
                        CSS3
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <i className="fab fa-react text-blue-400 mr-2" />
                        React
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <i className="fab fa-react text-blue-400 mr-2" />
                        React
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <i className="fab fa-chrome text-blue-400 mr-2" />
                        Chrome
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <i className="fab fa-github text-blue-400 mr-2" />
                        Github
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <i className="fab fa-js-square text-blue-400 mr-2" />
                        JavaScript
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 flex items-center">
                        <i className="fas fa-star mr-2 text-green-400" />
                        Beyond the Code
                    </h2>
                    <p className="mb-4">Explore my interests and hobbies beyond the digital realm.</p>
                    <div className="flex flex-wrap gap-2">
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-palette mr-2" />
                            Painting
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-camera mr-2" />
                            Photography
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-gamepad mr-2" />
                            Gaming
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-hiking mr-2" />
                            Hiking
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-music mr-2" />
                            Music
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-dumbbell mr-2" />
                            Fitness
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg flex items-center">
                            <i className="fas fa-book-reader mr-2" />
                            Reading
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <img src="https://placehold.co/300x300" alt="Map with a marker indicating a location" className="rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page5
