import {Accordion, AccordionHeader, AccordionItem, AccordionPanel,} from "../Accordion/Accordion.jsx"
import {Plus} from 'lucide-react';
import {
  ITEM1_TEXT,
  ITEM1_TITLE,
  ITEM2_TEXT,
  ITEM3_TEXT,
  ITEM4_TEXT,
  ITEM5_TEXT,
  ITEM6_TEXT,
  ITEM7_TEXT
} from "../../constants";

function Rules() {
  return (
    <div className="rules"
         style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionHeader icon={<Plus/>}>
            {ITEM1_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM1_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader icon={<Plus/>}>
            {ITEM2_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM2_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader icon={<Plus/>}>
            {ITEM3_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM3_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionHeader icon={<Plus/>}>
            {ITEM4_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM4_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionHeader icon={<Plus/>}>
            {ITEM5_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM5_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionHeader icon={<Plus/>}>
            {ITEM6_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM6_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionHeader icon={<Plus/>}>
            {ITEM7_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM7_TEXT}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionHeader icon={<Plus/>}>
            {ITEM8_TITLE}
          </AccordionHeader>
          <AccordionPanel>
            {ITEM8_TEXT}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Rules;
