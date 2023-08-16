import "../../style/Tablebar.scss";
import React from 'react';

export default function Tablebar(
    { 
        headers,
        items = [],
    }) {
    
    const headerKey = headers.map((header) => header.value);
    return (
        <div className="tablebar">
        <table>
            <thead>
                <tr>
                {
                    headers.map((header) => 
                    <th key={header.text}>
                        {header.text}
                    </th> 
                    )
                }
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item, index) => (
                        <React.Fragment>
                            <tr key={index}>
                            { 
                                headerKey.map((key) => 
                                <td key={key + index}>
                                    {item[key]}
                                </td>
                                )
                            }
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <div className="teacher-reply">comment</div>
                                </td>
                            </tr>
                      </React.Fragment>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}