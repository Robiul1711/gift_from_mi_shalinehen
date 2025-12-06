import Title from "../common/Title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


const faqData = [
  {
    id: "item-1",
    question: "What is GiftFromMi?",
    answer:
      "GiftFromMi is a smart automated gifting platform that helps people send curated gift boxes to multiple recipients easily.",
  },
  {
    id: "item-2",
    question: "How does scheduling work?",
    answer:
      "You can set specific delivery dates for each recipient. Gifts ship automatically based on your schedule.",
  },
  {
    id: "item-3",
    question: "Can I add personalized messages?",
    answer:
      "Yes, you can include custom messages or branded cards in every gift.",
  },
  {
    id: "item-4",
    question: "Do you offer bulk gifting?",
    answer:
      "Yes, the platform supports sending hundreds of gifts at once with tracking and automation.",
  },
  {
    id: "item-5",
    question: "How fast is delivery?",
    answer:
      "Standard delivery takes 3–5 days, with express shipping available.",
  },
  {
    id: "item-6",
    question: "Can I track my shipments?",
    answer:
      "Yes, you get a dashboard with tracking numbers and real-time delivery updates.",
  },
];

const Faq = () => {
  return (
    <div className="section-padding-x section-padding-y bg-[#EFDBBF]">
      {/* TITLE */}
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <Title level="title48">Frequently Asked Questions</Title>
        <Title level="title24" className="">
          Find answers to common queries about our product, features, and services.
        </Title>
      </div>

      {/* FAQ GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {faqData.map((item) => (
          <div key={item.id} className="bg-white rounded-md px-4">
            <Accordion type="single" collapsible>
              <AccordionItem value={item.id}>
                <AccordionTrigger className="text-Secondary text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-Secondary text-base font-medium">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
