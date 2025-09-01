import { ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <div className="accordion accordion--open">
      <div className="accordion__top">
        <div className="accordion__top-title accordion__top-title-format">
          <p>
            <strong>{title}</strong>
          </p>
        </div>
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
