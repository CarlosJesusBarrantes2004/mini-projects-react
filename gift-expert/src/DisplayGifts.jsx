import useApi from "./hooks/useApi";

const DisplayGifts = ({ value }) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=xXTIkpmQlUrs9FIfcgpyVdSD3gQXtkaz&q=${value}&limit=20`;
  const { loading, data } = useApi(URL);

  console.log(data);

  return (
    <div className="flex flex-wrap p-6">
      {loading &&
        data.map((gift) => (
          <div key={gift.id} className="flex flex-col m-10">
            <div className="mb-10">
              <img
                src={gift.images.downsized_medium.url}
                className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-gray-800"
              />
            </div>
            <span className="text-lg text-center font-bold">{gift.title}</span>
          </div>
        ))}
    </div>
  );
};

export default DisplayGifts;
