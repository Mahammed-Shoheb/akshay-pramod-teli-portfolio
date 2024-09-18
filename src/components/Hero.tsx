"use client";
import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileDownload,
} from "@tabler/icons-react";
import { badgeVariants } from "./ui/badge";
import { BackgroundGradient } from "./ui/background-gradient";
import svg1 from "@/assets/svg/undraw_researching_re_fuod.svg";
import svg2 from "@/assets/svg/undraw_app_wireframe_re_d467.svg";
import svg3 from "@/assets/svg/undraw_building_blocks_re_5ahy.svg";
import svg4 from "@/assets/svg/undraw_product_iteration_kjok.svg";
import svg5 from "@/assets/svg/undraw_real_time_analytics_re_yliv.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative" id="home">
      <div className="align-center relative px-4 py-36 md:px-8 lg:px-12 grid place-items-center  overflow-hidden">
        <div className="flex flex-col gap-8 text-left sm:text-center ">
          <div className="z-10">
            <h1 className="text-6xl md:text-6xl lg:text-7xl text-primary capitalize font-bold mb-4">
              Hi! I&apos;m akshay pramod teli
            </h1>
            <p className="text-4xl md:text-5xl lg:text-6xl">Product Manager</p>
          </div>
          <div className="flex flex-wrap items-center sm:justify-center gap-2 sm:gap-4 lg:gap-8 text-lg md:text-xl">
            <BackgroundGradient>
              <a
                target="_blank"
                href="/Akshay_Pramod_Teli_9Jun2024.pdf"
                className={badgeVariants()}
              >
                <span>
                  <IconFileDownload />
                </span>
                <span>CV </span>
              </a>
            </BackgroundGradient>
            <BackgroundGradient>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akshaypramodteli/"
                className={badgeVariants()}
              >
                <IconBrandLinkedin />
                <span>LinkedIn </span>
              </a>
            </BackgroundGradient>

            <BackgroundGradient>
              <a
                href="https://wa.me/919591461981"
                className={badgeVariants()}
                target="_blank"
              >
                <IconBrandWhatsapp />
                <span>WhatsApp</span>
              </a>
            </BackgroundGradient>
          </div>
        </div>
        <motion.div className="absolute top-2 left-2">
          <Image
            src={svg1}
            alt=""
            width={300}
            height={300}
            className="h-16 w-auto sm:h-20 md:h-36"
          />
        </motion.div>
        <motion.div className="absolute bottom-2 left-2">
          <Image
            src={svg2}
            alt=""
            width={300}
            height={300}
            className="h-16 w-auto sm:h-20 md:h-36"
          />
        </motion.div>
        <motion.div className="absolute top-2 right-2">
          <Image
            src={svg3}
            alt=""
            width={300}
            height={300}
            className="h-16 w-auto sm:h-20 md:h-36"
          />
        </motion.div>
        <motion.div className="absolute bottom-2 right-2">
          <Image
            src={svg4}
            alt=""
            width={300}
            height={300}
            className="h-16 w-auto sm:h-20 md:h-36"
          />
        </motion.div>
        <motion.div className="absolute bottom-0 right-[50%] transform translate-x-[50%]">
          <Image
            src={svg5}
            alt=""
            width={300}
            height={300}
            className="h-16 w-auto sm:h-20 md:h-36"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

// "use client";
// import {
//   IconBrandLinkedin,
//   IconBrandWhatsapp,
//   IconFileDownload,
// } from "@tabler/icons-react";
// import { badgeVariants } from "./ui/badge";
// import { BackgroundGradient } from "./ui/background-gradient";
// import svg1 from "@/assests/svg/undraw_researching_re_fuod.svg";
// import svg2 from "@/assests/svg/undraw_app_wireframe_re_d467.svg";
// import svg3 from "@/assests/svg/undraw_building_blocks_re_5ahy.svg";
// import svg4 from "@/assests/svg/undraw_product_iteration_kjok.svg";
// import svg5 from "@/assests/svg/undraw_real_time_analytics_re_yliv.svg";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section className="" id="#home">
//       <div className="align-center px-4 py-20 md:px-8 lg:px-12 grid sm:grid-cols-2 sm:gap-12 min-h-[70vh] overflow-hidden">
//         <div className="flex flex-col gap-8 text-center sm:text-left ">
//           <div>
//             <h1 className="text-xl md:text-2xl lg:text-7xl text-primary capitalize font-bold mb-4">
//               Hi! I'm akshay pramod teli
//             </h1>
//             <p className="text-lg md:text-xl lg:text-3xl">Product Manager</p>
//           </div>
//           <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 text-lg md:text-xl flex-wrap">
//             <BackgroundGradient>
//               <a
//                 target="_blank"
//                 href="/Akshay Pramod Teli_9Jun2024.pdf"
//                 className={badgeVariants()}
//               >
//                 <IconFileDownload />
//                 <span>CV </span>
//               </a>
//             </BackgroundGradient>
//             <BackgroundGradient>
//               <a
//                 target="_blank"
//                 href="https://www.linkedin.com/in/akshaypramodteli/"
//                 className={badgeVariants()}
//               >
//                 <IconBrandLinkedin />
//                 <span>LinkedIn </span>
//               </a>
//             </BackgroundGradient>

//             <BackgroundGradient>
//               <a
//                 href="https://wa.me/919591461981"
//                 className={badgeVariants()}
//                 target="_blank"
//               >
//                 <IconBrandWhatsapp />
//                 <span>WhatsApp</span>
//               </a>
//             </BackgroundGradient>
//           </div>
//         </div>
//         <div className="grid grid-cols-6 grid-rows-[60px_60px_60px_60px_60px]">
//           <motion.div className="row-start-1 row-end-3 col-start-1 col-end-3 overflow-clip">
//             <Image
//               src={svg1}
//               alt=""
//               width={300}
//               height={300}
//               className="w-full h-full"
//             />
//           </motion.div>
//           <motion.div className="row-start-1 row-end-3 col-start-3 col-end-5">
//             <Image
//               src={svg3}
//               alt=""
//               width={300}
//               height={300}
//               className="w-full h-full"
//             />
//           </motion.div>
//           <motion.div className="row-start-3 row-end-6 col-start-1 col-end-3">
//             <Image
//               src={svg2}
//               alt=""
//               width={300}
//               height={300}
//               className="w-full h-full"
//             />
//           </motion.div>
//           <motion.div className="row-start-1 row-end-3 col-start-5 col-end-7">
//             <Image
//               src={svg5}
//               alt=""
//               width={300}
//               height={300}
//               className="w-full h-full"
//             />
//           </motion.div>
//           <motion.div className="row-start-3 row-end-6 col-start-3 col-end-7">
//             <Image
//               src={svg4}
//               alt=""
//               width={300}
//               height={300}
//               className="w-full h-full"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
