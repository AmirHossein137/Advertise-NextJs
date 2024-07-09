import DashboardLayoutPage from '@/template/DashboardLayoutPage'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <DashboardLayoutPage>
            {children}
        </DashboardLayoutPage>
    </div>
  )
}

export default DashboardLayout