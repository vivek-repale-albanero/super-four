import React from 'react'
import { Button } from "@platform/service-ui-libraries";
const DbButtons = ({dataBase,handleTable,deleteDataBase}) => {
    return (
        <>
            {dataBase.length ? (
                <ul>
                    {dataBase.map((ele, i) => (
                        <li key={i}>
                            <Button
                                className="dbBtn"
                                variant="contained"
                                onClick={()=>{handleTable(ele,i)}} 
                            >
                                {ele.name}
                            </Button>
                            <button className='delBns' onClick={() => deleteDataBase(i)}>Delete</button>
                            <br /><br />
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    <center><h4>No DataBase Are Present</h4></center>
                </>
            )}
        </>
    )
}

export default DbButtons