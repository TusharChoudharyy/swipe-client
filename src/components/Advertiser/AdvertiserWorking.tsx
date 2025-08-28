
import {
  ClipboardList,
  Rocket,
  BarChart,
  TrendingUp,
  Eye
} from 'lucide-react'

const steps = [
  {
    title: 'Onboarding & Strategy Alignment',
    description: '📋 Share goals, KPIs, and target markets—we design your campaign blueprint.',
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: 'Affiliate & Media Buying Launch',
    description: '🚀 We match you with the best-fit publishers and activate multichannel buying.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Funnel & Creative Optimization',
    description: '🎯 A/B test creatives, LPs, and CTAs for max conversion lift.',
    icon: <Eye className="w-6 h-6" />,
  },
  {
    title: 'Tracking + Real-Time Reporting',
    description: '📊 Live dashboards show granular click-to-conversion metrics.',
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    title: 'Ongoing Performance Scaling',
    description: '📈 We scale traffic, eliminate poor sources, and iterate for ROAS.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
]

const AdvertiserWorking = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-4">
          How We Turn Clicks Into Conversions
        </h2>
        <p className="text-lg text-[#183ec2] font-medium">
          Every step is optimized for advertiser ROI, speed, and quality traffic.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#f5f8ff] rounded-2xl shadow-md p-6 border-l-4 border-[#183ec2] hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#183ec2]">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#183ec2]">
                {index + 1}. {step.title}
              </h3>
            </div>
            <p className="text-[#4c5472]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdvertiserWorking
