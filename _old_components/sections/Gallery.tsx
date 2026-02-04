export default function Gallery() {
  // Placeholder for your black and white photos
  // Replace these with your actual images
  const photos = [
    {
      id: 1,
      title: "Columbia University",
      description: "Moments at Columbia",
      image: "/gallery/columbia.jpg" // You'll add this
    },
    {
      id: 2,
      title: "SWE Conference",
      description: "Tech conferences and networking",
      image: "/gallery/conference.jpg" // You'll add this
    },
    {
      id: 3,
      title: "New York",
      description: "Life in the city",
      image: "/gallery/nyc.jpg" // You'll add this
    },
    {
      id: 4,
      title: "My Dog",
      description: "My furry companion",
      image: "/gallery/dog.jpg" // You'll add this
    },
    {
      id: 5,
      title: "Cherished Moments",
      description: "Places and people I love",
      image: "/gallery/moments.jpg" // You'll add this
    },
    {
      id: 6,
      title: "More Memories",
      description: "Special moments",
      image: "/gallery/memories.jpg" // You'll add this
    }
  ];

  return (
    <section id="gallery" className="section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-playfair">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Black and white moments I cherish
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg aspect-square bg-gray-200 hover-lift cursor-pointer"
            >
              {/* Placeholder - replace with actual Image component when you add photos */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-16 h-16 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-600 font-medium">{photo.title}</p>
                  <p className="text-xs text-gray-500 mt-1">Add your photo here</p>
                </div>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                  <p className="text-sm">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Add your black and white photos to the <code className="bg-gray-100 px-2 py-1 rounded">/public/gallery/</code> folder
          </p>
        </div>
      </div>
    </section>
  );
}
