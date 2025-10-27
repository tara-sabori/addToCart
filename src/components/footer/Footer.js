
const Footer = () => {
  return (
    <div className="mt-20 p-8 bg-secondary-200 shadow-md">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-0 xl:grid-cols-3">
                        <div className="space-y-2">
                            <h5 className='text-orange-950 font-semibold'>Products</h5>
                            <ul className='text-sm space-y-2'>
                                <li>Web Stadio</li>
                                <li>DynamicBox</li>
                                <li>Programming</li>
                                <li>Integrations</li>
                                <li>Command-line</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h5 className='text-orange-950 font-semibold'>Resources</h5>
                            <ul className='text-sm space-y-2'>
                                <li>Documentation</li>
                                <li>Tutorials & Guides</li>
                                <li>Blog</li>
                                <li>Support Center</li>
                                <li>Partners</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h5 className='text-orange-950 font-semibold'>Company</h5>
                            <ul className='text-sm space-y-2'>
                                <li>Pricing</li>
                                <li>Company Values</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
            </div>
  )
}

export default Footer