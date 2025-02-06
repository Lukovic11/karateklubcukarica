import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ChevronDown} from 'lucide-react';
import PropTypes from 'prop-types';
import './Accordion.scss';

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

export function AccordionContainer({children, className}) {
  return (
    <div className={`accordion-container ${className || ''}`}>{children}</div>
  );
}

export function AccordionWrapper({children}) {
  return <div className="accordion-wrapper">{children}</div>;
}

export function Accordion({children, multiple, defaultValue = null}) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? (defaultValue ? [defaultValue] : []) : defaultValue
  );

  function onChangeIndex(value) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value;
      }
      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value);
      }
      return [...currentActiveIndex, value];
    });
  }

  return React.Children.map(children, (child) => {
    const value = child.props.value;
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : activeIndex === value;
    return (
      <AccordionContext.Provider value={{isActive, value, onChangeIndex}}>
        <>{child}</>
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({children, value}) {
  const {isActive} = useAccordion();
  return (
    <div
      className={`accordion-item ${isActive ? 'active' : ''}`}
      value={value}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({children, icon}) {
  const {isActive, value, onChangeIndex} = useAccordion();
  return (
    <motion.div
      className={`accordion-header ${isActive ? 'active' : ''}`}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      {icon ? (
        <div className={`accordion-icon ${isActive ? 'rotate' : ''}`}>
          {icon}
        </div>
      ) : (
        <ChevronDown className={`accordion-icon ${isActive ? 'rotate' : ''}`}/>
      )}
    </motion.div>
  );
}

export function AccordionPanel({children}) {
  const {isActive} = useAccordion();
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{height: 0, opacity: 0}}
          animate={{height: 'auto', opacity: 1}}
          exit={{height: 0, opacity: 0}}
          transition={{
            height: { duration: 0.3, ease: "easeOut" },
            opacity: { duration: 0.2, ease: "easeOut" }
          }}
          className="accordion-panel"
        >
          <div className="accordion-content">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

AccordionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AccordionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  multiple: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

AccordionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};

AccordionPanel.propTypes = {
  children: PropTypes.node.isRequired,
};