const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch the response");

  const albums = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-black">{album.title}</h3>
          <p className="text-gray-600">{album.id}</p>
        </div>
      ))}
    </div>
  );
};
export default Page;
