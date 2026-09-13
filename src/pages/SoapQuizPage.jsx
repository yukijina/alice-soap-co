import Accordion from '../components/Accordion';
import { CiBeaker1 } from 'react-icons/ci';
import { CiDroplet } from 'react-icons/ci';
import { CiTrophy } from 'react-icons/ci';

function SoapQuizPage() {
  const faqData = [
    {
      question:
        'What is the actual name of the science magic that happens when oils and lye mix together to create soap?',
      answer:
        "It is called saponification! It sounds like a wizard's spell, but it is just the chemical reaction that turns raw ingredients into skin-loving soap.",
    },
    {
      question:
        'True or false: The oldest recorded soap recipe in human history was written on a piece of paper.',
      answer:
        'False! It was actually carved into clay tablets by the ancient Babylonians all the way back in 2800 BCE.',
    },
    {
      question:
        "Most soap bars you buy at the grocery store today aren't technically soap at all. What are they actually?",
      answer:
        'They are synthetic detergents (often called syndet bars). They are engineered to clean your skin using petroleum or plant derivatives rather than traditional fats.',
    },
    {
      question:
        'After a soapmaker pours a fresh batch of cold-process soap, how long does the soap have to cure and dry out before it is ready to use?',
      answer:
        'It takes about 4 to 6 weeks! Good things take time, and this waiting period makes the bar harder and much longer-lasting.',
    },
    {
      question:
        ' If a soapmaker wants their bar to produce massive, fluffy, cloud-like bubbles, which popular tropical oil should they add to their recipe?',
      answer:
        'Coconut oil! It is the undisputed champion for creating an incredibly bubbly and rich lather.',
    },
  ];

  return (
    <section className='section-px my-20 h-[80vh]'>
      <h2>The Suds & Science Soap Quiz</h2>
      <h4>Bubble Buddies Trivia Time!</h4>
      <Accordion items={faqData} />
      <div className='flex justify-center text-3xl text-orange-400 mt-10'>
        <CiBeaker1 />
        <CiDroplet />
        <CiTrophy />
      </div>
    </section>
  );
}

export default SoapQuizPage;
