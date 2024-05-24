import React, { useContext } from 'react'
import ServiceItemModal from './ServiceItemModal'
import PackageItemModal from './PackageItemModal'
import context from '../../context/context'

export default function DrawerServices({props}) {
    const {modalInfos, setModalInfos, setServiceStatePackage} = useContext(context)
    const {type} = modalInfos

    const handleClick = () => {
      setServiceStatePackage(props.services)
      setModalInfos(props)
    }
  return (
    <div className="drawer drawer-end ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer-4" className="drawer-button w-4 h-4 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => handleClick() }>More...</label>
  </div> 
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    {type === 'service' &&<ServiceItemModal props={{...modalInfos}}/>}
    {type === 'package' && <PackageItemModal props={{...modalInfos}}/>}

  </div>
</div>
  )
}
