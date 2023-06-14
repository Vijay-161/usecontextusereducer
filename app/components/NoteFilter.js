import React, { useContext } from 'react'
import NoteContext from './NoteContext'

export default function NoteFilter() {
    // const {filter, setFilter} = useContext(NoteContext)
    const {state: {filter},dispatch} = useContext(NoteContext)
  return (
    <div>
      <input type='text'
                placeholder='search notes ...'
                value={filter}
                // onChange={(e) => setFilter(e.target.value)} 
                onChange={(e) => dispatch({
                    type: 'SET_FILTER',
                    payload: e.target.value
                }
                )}
                />
    </div>
  )
}
