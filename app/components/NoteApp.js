'use client'
import { useEffect, useReducer, useState } from 'react'

import noteService from '../services/noteService'
import AddNote from './AddNote'
import NoteContext from './NoteContext'
import NoteList from './NoteList'
import NoteFilter from './NoteFilter'




export default function NoteApp() {
    //2nd parms is initializer of state
    const [state,dispatch] = useReducer(noteReducer, {
        notes: [],
        desc: "",
        filter: ""
    })

    // const [notes, setNotes] = useState([])
    // const [desc, setDesc] = useState("")
    // const [filter, setFilter] = useState("")

    useEffect(() => {
        noteService.getAllNotes()
            // .then(data => setNotes(data))
            //state is updatedd through dispatcher
            .then(data => dispatch({
                type: "SET_NOTES",
                payload: data
            }))
    }, [])

    

    return (
        <div>
            {/* wrap with context with which context should be shared */}
            <NoteContext.Provider
            // value={{
            //     filter,
            //     desc,
            //     notes,
            //     setFilter,
            //     setDesc,
            //     setNotes,
            //     handleAdd
            // }}
            value={{state,dispatch}}
            >
            <NoteFilter  />

             <NoteList />

            <AddNote />
            </NoteContext.Provider>
        </div>
    )
}