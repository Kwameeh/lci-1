import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner-home.jpg";

type Props = {};

export default function Card(props: Props) {
  return (
    <div className="container mx-auto my-24 md:px-6">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-32 text-center">
        {/* <!-- Single article --> */}
        <div className="mb-12 flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={banner}
                className="h-72 w-full object-cover"
                alt="helele"
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12">
            <h5 className="mb-3 text-lg font-bold">
              This is a very long post title
            </h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>15.01.2022</u> by
                <a href="#!">Anna Maria Doe</a>
              </small>
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              atque hic, officiis blanditiis accusantium veritatis ullam?
              Maiores atque autem velit officiis molestiae voluptates suscipit
              eligendi, vero expedita sequi, doloremque modi?
            </p>
            <a
              data-te-ripple-init
              data-te-ripple-color="light"
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              href=""
              role="button"
            >
              Read more
            </a>
          </div>
        </div>

        {/* <!-- Single article --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
}
