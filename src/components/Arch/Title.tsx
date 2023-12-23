"use client";
interface Props {
  title: string;
}

const Title = (props: Props) => {
  return <p className="text-xl font-semibold">{props.title}</p>;
};

export default Title;
