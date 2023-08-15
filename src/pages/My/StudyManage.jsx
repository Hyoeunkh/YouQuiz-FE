import React from "react";
import styled from "styled-components";
import MyPageForm from "../../containers/MyPageForm";
import { useTable } from "react-table";

const TableBlock = styled.div`
  margin: 0 auto;
  height: 400px;
  width: 50%;
  overflow-y: auto; /* 내용많으면 스크롤됨 */
  
  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }

  table {
    width: 100%;
    height: 100%;
    
    text-align: center;
    border-collapse: collapse;
    table-layout: fixed
  }

  td{
    border: 1px solid white;
  }
  th {
    font-weight: 600;
  }
  tbody tr:nth-child(2n+1) {
    background-color: #F4F4F4
  }
  tbody tr:nth-child(2n) {
    background-color: white;
  }
`;

export default function StudentManage( { columns, data } ) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <MyPageForm  userType={"teacher"} student_id={"20"} page={"학습 관리"} />
      <TableBlock>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableBlock>
    </>
  );
}

