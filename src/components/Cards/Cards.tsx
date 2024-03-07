import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

// TODO create a component for the displaying of the card
function CardBody({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}

// TODO create a component for the header of the card
function CardHeader({ children, className }: CardProps) {
  return <header className={className}>{children}</header>;
}

//TODO create a component for the body/content of the card
function CardArticle({ children, className }: CardProps) {
  return <article className={className}>{children}</article>;
}

// TODO create a component for the footer of the card
function CardFooter({ children, className }: CardProps) {
  return <footer className={className}>{children}</footer>;
}

// TODO create a component for the image of the card
interface CardImgProps {
  children: ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt?: string;
}

function CardImg({ className, imgSrc, imgAlt }: CardImgProps) {
  return <img src={imgSrc} alt={imgAlt} className={className} />;
}

export { CardBody, CardArticle, CardFooter, CardHeader, CardImg };
