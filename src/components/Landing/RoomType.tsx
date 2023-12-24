import Layer from "../Layout/Layer";

const RoomType = () => {
  return (
    <div className="flex justify-center w-full">
      <Layer isMiddle>
        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-2 lg:gap-8 h-fit">
          <div className="h-32 w-full rounded-lg bg-gray-200">
            <div className="w-full h-full">hha</div>
          </div>
          <div className="h-32 w-full rounded-lg bg-gray-200"></div>
          <div className="h-32 w-full rounded-lg bg-gray-200"></div>
        </div>
      </Layer>
    </div>
  );
};

export default RoomType;
