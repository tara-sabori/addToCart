
const FeatureCard = ({icon,title,desc}) => {
  return (
            <div className='border border-secondary-400 rounded-xl p-4 flex flex-col items-center justify-center gap-3 bg-secondary-100'>
                <span className="bg-orange-950 p-2 rounded-full text-white">
                    {icon}
                </span>
                <h6 className="font-semibold text-secondary-800">{title}</h6>
                <p className="text-center text-sm">{desc}</p>
            </div>
  )
}

export default FeatureCard