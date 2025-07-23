import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Hash, Gift, UserPlus, Baby, Wine } from 'lucide-react';

const faqData = [
  {
    icon: Hash,
    iconColor: 'powder-pink',
    question: 'Do you have a wedding hashtag?',
    answer: 'We\'d love to see the special moments you\'ve captured! Kindly use our wedding hashtag #wePAULnallyRingTheVELLE and don\'t forget to tag us in your photos on Facebook.'
  },
  {
    icon: Gift,
    iconColor: 'orange-peach',
    question: 'Do you have a gift registry?',
    answer: 'Your love and support are the greatest gift, but if you wish to add a little extra, a contribution to our new home fund would help us build our dream space together.'
  },
  {
    icon: UserPlus,
    iconColor: 'baby-blue',
    question: 'Am I allowed to bring a plus-one?',
    answer: 'Our celebration is strictly RSVP only. We will only accommodate guests listed on the invitation. Thank you for your understanding!'
  },
  {
    icon: Baby,
    iconColor: 'periwinkle',
    question: 'Am I allowed to bring my children?',
    answer: 'As much as we love your little ones, this will be an adults-only celebration. We hope this gives you the chance to enjoy a well-deserved evening off and celebrate with us!'
  },
  {
    icon: Wine,
    iconColor: 'shadow-lime',
    question: 'Will there be an open bar?',
    answer: 'There will be an open bar for guests to enjoy throughout cocktail hour and the reception. However, if you plan to join us for the after-pool party, we kindly recommend bringing your own drinks, some snacks, or cash/credit card, as drinks after the reception will not be covered.'
  }
];

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-4 fade-in">
      {faqData.map((item, index) => (
        <Card key={index} className="bg-white/90 backdrop-blur-md rounded-2xl petal-border shadow-lg border-0">
          <button 
            className="w-full px-6 py-4 text-left flex items-center justify-between"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center">
              <item.icon className={`${item.iconColor} mr-3`} size={20} />
              <span className="font-semibold text-deep-forest">{item.question}</span>
            </div>
            <ChevronDown 
              className={`text-deep-forest transition-transform duration-300 ${
                openItem === index ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          {openItem === index && (
            <CardContent className="px-6 pb-4 text-deep-forest">
              {item.answer}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
