import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/app/CTA";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">
          Popular Companions
      </h1>
        <section className="home-section">
            <CompanionCard id={'1234'} subject={'science'} name={'Neura the Brainy Explorer'} topic={'Neural Network of the Brain'} duration={45} color={'#E5D0FF'} />
            <CompanionCard id={'2234'} subject={'Maths'}  name={'Countsy the Number Wizard'} topic={'Derivatives & Integrals'} duration={30} color={'#FFDA6E'} />
            <CompanionCard id={'1134'} subject={'Language'} name={'Verba the Vocabulary Builder'} topic={'English Literature'} duration={30} color={'#BDE7FF'} />

        </section>

        <section className="home-section">
            <CompanionList />
            <Cta />

        </section>

    </div>
  )
}

export default Page