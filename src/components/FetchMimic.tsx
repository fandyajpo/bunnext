interface Props {
  user: any;
}

const FetchMimic = async (props: Props) => {
  const rr = await fetch(
    `https://64e495b5c555638029137451.mockapi.io/user/${props?.user ?? 1}`,
    {
      method: "GET",
    }
  );

  const result = await rr.json();

  return (
    <div className="w-full h-full bg-blue-500 text-white">
      {JSON.stringify(result.name)}
    </div>
  );
};

export default FetchMimic;
