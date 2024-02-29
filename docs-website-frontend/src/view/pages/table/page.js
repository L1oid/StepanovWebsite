import React from 'react';

import './style.css'

function TablePage() {
    return (
        <div className='page-container'>
            <div className="tables-container">
                <div className='tables'>
                    <p className='table-heading'>Первая таблица</p>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tables'>
                    <p className='table-heading'>Вторая таблица</p>
                    <table>
                        <tbody>
                        <tr>
                            <th colSpan="5"></th>
                        </tr>
                        <tr>
                            <td rowSpan="3"></td>
                            <td></td>
                            <td rowSpan="3"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan="3"></td>
                            <td rowSpan="3"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tables'>
                    <p className='table-heading'>Третья таблица</p>
                    <table>
                        <tbody>
                        <tr>
                            <th className="t4" colSpan="8"></th>
                        </tr>
                        <tr>
                            <td className="t4" rowSpan="6"></td>
                            <td className="t4" colSpan="6"></td>
                            <td className="t4" rowSpan="7"></td>
                        </tr>
                        <tr>
                            <td className="t4" rowSpan="4"></td>
                            <td className="t4" colSpan="4"></td>
                            <td className="t4" rowSpan="5"></td>
                        </tr>
                        <tr>
                            <td className="t4" rowSpan="2"></td>
                            <td className="t4" colSpan="2"></td>
                            <td className="t4" rowSpan="3"></td>
                        </tr>
                        <tr>
                            <td className="t4"></td>
                            <td className="t4"></td>
                        </tr>
                        <tr>
                            <td className="t4" colSpan="3"></td>
                        </tr>
                        <tr>
                            <td className="t4" colSpan="5"></td>
                        </tr>
                        <tr>
                            <td className="t4" colSpan="7"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tables'>
                    <p className='table-heading'>Четвёртая таблица</p>
                    <table>
                        <tbody>
                        <tr>
                            <th className="t4" bgcolor="#40e0d0" colSpan="8"></th>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#f5f5dc" rowSpan="6"></td>
                            <td className="t4" bgcolor="#40e0d0" colSpan="6"></td>
                            <td className="t4" bgcolor="#f5f5dc" rowSpan="6"></td>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#f5f5dc" rowSpan="4"></td>
                            <td className="t4" bgcolor="#40e0d0" colSpan="4"></td>
                            <td className="t4" bgcolor="#f5f5dc" rowSpan="4"></td>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#f5f5dc" rowSpan="2"></td>
                            <td className="t4" bgcolor="red"></td>
                            <td className="t4" bgcolor="blue"></td>
                            <td className="t4" bgcolor="#f5f5dc" rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#adff2f"></td>
                            <td className="t4" bgcolor="yellow"></td>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#40e0d0" colSpan="4"></td>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#40e0d0" colSpan="6"></td>
                        </tr>
                        <tr>
                            <td className="t4" bgcolor="#40e0d0" colSpan="8"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TablePage;