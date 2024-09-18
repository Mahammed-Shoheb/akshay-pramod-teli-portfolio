import { tools } from "@/assets/data";
import Title from "./Title";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Tools = () => {
  return (
    <section id="tools">
      <div className="align-center section-padding">
        <Title title="tools" />
        <InfiniteMovingCards items={tools} direction="right" speed="normal" />
      </div>
    </section>
  );
};

export default Tools;
