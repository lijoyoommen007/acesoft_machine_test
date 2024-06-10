import React from 'react'

function Table({data}) {
    console.log(data)
  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map(item=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Table