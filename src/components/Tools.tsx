import { tools } from "@/assets/data";
import Title from "./Title";
import SwipeToSlide from "./Slider";
import Image from "next/image";

const Tools = () => {
  return (
    <section id="tools">
      <div className="align-center section-padding !select-none">
        <Title title="tools" />
        <SwipeToSlide>
          {tools.map((item) => (
            <li className="!flex !justify-center w-full" key={item.title}>
              <Image
                src={item.logo}
                alt={`${item.title} Logo`}
                width={400}
                height={200}
                className="w-20 h-12"
              />
            </li>
          ))}
        </SwipeToSlide>
      </div>
    </section>
  );
};

export default Tools;
