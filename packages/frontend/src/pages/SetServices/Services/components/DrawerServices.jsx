import React, { useContext } from 'react'
import ServiceItemModal from './ServiceItemModal'
import PackageItemModal from '../../Packages/components/PackageItemModal'
import context from '../../../../context/context'

export default function DrawerServices({props}) {
  console.log('modal props')
    const {modalInfos, setModalInfos, setServiceStatePackage} = useContext(context)
    const {type} = modalInfos

    const handleClick = () => {
      console.log('clicado')
      setServiceStatePackage(props.services)
      setModalInfos(props)
    }
  return (
    <div className="drawer drawer-end ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex">
    <label htmlFor="my-drawer-4" className="drawer-button hover:text-gray-700 focus:outline-none cursor-pointer" onClick={() => handleClick() }>
        <div className="flex items-center">
            <svg className="text-themeColor-500 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/> 
                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /> 
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /> 
                <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
            <span className='text-sm'>Edit</span>
        </div>
    </label>
</div>
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    {<ServiceItemModal props={props}/>}
    {/* {type === 'package' && <PackageItemModal props={{...modalInfos}}/>} */}

  </div>
</div>
  )
}
