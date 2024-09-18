const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center mb-16">
      <h2 className="inline-block mx-auto text-center capitalize text-3xl md:text-4xl text-primary font-bold tracking-wide border-b-4 border-b-primary">
        {title}
      </h2>
    </div>
  );
};

export default Title;
