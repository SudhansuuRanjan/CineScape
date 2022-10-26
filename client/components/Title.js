import React from "react";

const Title = (props) => {
  return (
    <div  className="max-w-xl md:max-w-2xl lg:max-w-2xl pl-5 md:pl-0 lg:pl-0">
      <h3  className="text-3xl md:text-4xl font-semibold">{props.title}</h3>
      <span  className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
        {props.description}
      </span>
    </div>
  );
};

export default Title;



