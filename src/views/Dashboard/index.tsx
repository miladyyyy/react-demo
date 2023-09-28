import React, { useEffect, useState } from 'react'
import { getPet } from '../../api/base'

const Dashboard: React.FC = () => {
  const [state, setState] = useState({ pet: {} })
  useEffect(() => {
    initData()
  }, [])

  async function initData() {
    const res = await getPet(1)
    setState({ ...state, pet: res.data })
  }

  return <h1>{state.pet.name}</h1>
}

export default Dashboard
