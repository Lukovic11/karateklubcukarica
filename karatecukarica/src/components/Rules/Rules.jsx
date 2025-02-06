import {Accordion, AccordionHeader, AccordionItem, AccordionPanel,} from "../Accordion/Accordion.jsx"
import {Plus} from 'lucide-react';

function Rules() {
  return (
    <div className="rules"
         style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionHeader icon={<Plus/>}>
            Oprema za trening
          </AccordionHeader>
          <AccordionPanel>
            Da bi dete počelo da vežba karate, kimono nije neophodan. Dovoljni su trenerka dugih nogavica i majica
            kratkih rukava.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader icon={<Plus/>}>
            Osvežavajući napici
          </AccordionHeader>
          <AccordionPanel>
            Jedini napitak koji može da hidrira dete je VODA i zato nije poželjno donositi sokove i slične napitke.
            Potrebno je da dete ima svoju PLASTIČNU flašicu, obeleženu tako da može da je prepozna.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader icon={<Plus/>}>
            Priprema za trening i presvlačenje
          </AccordionHeader>
          <AccordionPanel>
            Bez obzira koliko godina deca imaju, potrebno je da se uče samostalnosti i odgovornosti. To je jedan od
            zadataka i ciljeva treninga. Zato je važno dovesti dete na vreme (desetak minuta pre treninga) i pustiti ga
            da se samostalno presvuče.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionHeader icon={<Plus/>}>
            Higijena
          </AccordionHeader>
          <AccordionPanel>
            Deca se uče da održavaju ličnu higijenu, ali i da vode računa o čistoći prostora koji koriste i u kojem
            borave. To je naša zajednička odgovornost. U sali i svlačionici deca hodaju bosa. Iz tog razloga, samo
            vežbači mogu da koriste ovaj prostor i o njemu vode računa.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionHeader icon={<Plus/>}>
            Prisustvo roditelja na treningu
          </AccordionHeader>
          <AccordionPanel>
            Roditeljima nije dozvoljen ulazak u salu. Trening je vreme Vašeg deteta i čini deo njegove privatnosti. Osim
            toga, Vaše prisustvo bi remetilo detetovu pažnju i otežavalo posao trenera.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionHeader icon={<Plus/>}>
            Komunikacija trenera i roditelja
          </AccordionHeader>
          <AccordionPanel>
            Molimo Vas za strpljenje. U vreme treninga, trener ne može komunicirati sa roditeljima, ali to može učiniti
            pre ili nakon treninga.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionHeader icon={<Plus/>}>
            Komunikacija sa sekretarom kluba
          </AccordionHeader>
          <AccordionPanel>
            Sekretar kluba dostupan Vam je pre ili posle treninga u prostorijama kluba, ali će Vam rado odgovoriti i na
            poruke.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionHeader icon={<Plus/>}>
            Karate zajednica
          </AccordionHeader>
          <AccordionPanel>
            Da bismo Vas na vreme obaveštavali o svemu, koristimo Viber zajednicu. Kada Vaše dete postane član kluba, Vi
            ćete biti uključeni u zajednicu gde sekretar povremeno šalje važne poruke koje se odnose na funkcionisanje
            kluba.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Rules;
