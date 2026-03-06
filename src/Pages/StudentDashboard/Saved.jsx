import React, { useContext } from "react";
import { SavedContext } from "../../Components/SavedContext.jsx";
import Calender from "../../Components/MyCalender.jsx";
import NewsCard from "../../Components/NewsCard.jsx";

const Saved = () => {
  const { savedItems, removeSavedItem } = useContext(SavedContext);


  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Saved Scholarships</h1>

      {savedItems.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {savedItems.map((item) => (
  <div
    key={item.id}
    className="w-[230px] h-[320px] p-4 bg-white shadow rounded-lg flex flex-col gap-2 relative"
  >
    <button
      onClick={() => removeSavedItem(item.id)}
      className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded"
    >
      Remove
    </button>

    <img
      src={item.image}
      alt={item.title}
      className="w-[230px] h-[160px] object-cover rounded-lg"
    />

    <h4 className="font-medium text-[14px]">{item.title}</h4>
    <p className="text-[10px] text-gray-700">{item.description}</p>
  </div>
))}

        </div>
      ) : (
        <p className="text-gray-500">No Location saved yet.</p>
      )} 
      <div
              className="w-[360px] bg-white rounded-[12px] shadow p-6 flex flex-col justify-between"
              style={{ position: "absolute", top: "130px", left: "1090px" }}
            >
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <Calender />
      
              </div>
            </div>
            <div   style={{ position: "absolute", top: "-9px", left: "-10px" }}>
                      <NewsCard/>
                    </div>
     
      
    </div>
  );
};

export default Saved;
