import React from 'react';
import { cva } from 'class-variance-authority';
import testImage from '../../assets/image-1.jpg';

interface ICardProps {
  title: string;
  content: string;
  imageSrc?: string;
  theme?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  interaction?: 'hoverable' | 'static';
}

const cardStyles = cva(["border rounded-lg shadow flex"], {
  variants: {
    theme: {
      light: ["bg-white", "text-gray-900", "border-gray-200"],
      dark: ["bg-gray-800", "text-white", "border-gray-700"]
    },
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-lg"]
    },
    contentPosition: {
      left: ["flex-row"],
      right: ["flex-row-reverse"],
      top: ["justify-start"],
    },


    interaction: {
      hoverable: ["transform transition-transform duration-500 hover:scale-105"],
      static: [""]
    }
  },
  defaultVariants: {
    theme: "light",
    size: "medium",
    interaction: "static"
  },
});


const Card: React.FC<ICardProps> = (props) => {
  const { cardType } = props;

  const ComponentsMap = {
    imageCard: CardImage,
    textCard: CardText,
    rowImage: CardRowImage

  };

  const ComponentToRender = ComponentsMap[cardType];

  if (!ComponentToRender) {
    throw new Error(`Invalid prop for 'cardType': ${cardType}. Expected one of: ${Object.keys(ComponentsMap).join(', ')}`);
  }

  return <ComponentToRender {...props} />;
};

export default Card;


function CardRowImage({ imageSrc, title, content, theme, size, interaction, cardType }) {
  return (
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imageSrc} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
      </div>
    </a>
  )
}


function CardText({ title, content, theme, size, interaction, cardType }) {
  const cardClass = cardStyles({ theme, size, interaction, cardType });

  return (
    <div className={cardClass}>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        </a>
        <p className="mb-3 font-normal">{content}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}


function CardImage({ imageSrc, title, theme, size, interaction, content, cardType }) {
  const cardClass = cardStyles({ theme, size, interaction, cardType });

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        {imageSrc && (
          <img src={imageSrc} alt={title} className="rounded-t-lg" />
        )}
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        </a>
        <p className="mb-3 font-normal">{content}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}
