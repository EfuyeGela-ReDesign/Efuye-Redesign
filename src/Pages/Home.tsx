import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Life from '@/Components/Life'
import Projects from '@/Components/Projects'


const Home = () => {
  return (
    <div className="font-bebas flex-col gap-10 overflow-hidden">
          <Hero />
          <Projects />
          <Life />
          <Footer />
      </div>
  )
}

export default Home