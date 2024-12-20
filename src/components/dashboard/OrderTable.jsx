// src/components/OrderTable.jsx
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

export function OrderTable() {
  const data = useMemo(() => [
    { id: '#1002', date: '11 Feb, 2024', customer: 'Wade Warren', payment: 'Pending', total: '$200.00', delivery: 'N/A', items: '2 items', fulfillment: 'Unfulfilled' },
    { id: '#1004', date: '13 Feb, 2024', customer: 'Esther Howard', payment: 'Success', total: '$22.00', delivery: 'N/A', items: '3 items', fulfillment: 'Fulfilled' },
    { id: '#1007', date: '15 Feb, 2024', customer: 'Jenny Wilson', payment: 'Pending', total: '$25.00', delivery: 'N/A', items: '1 item', fulfillment: 'Unfulfilled' },
    { id: '#1009', date: '17 Feb, 2024', customer: 'Guy Hawkins', payment: 'Success', total: '$27.00', delivery: 'N/A', items: '5 items', fulfillment: 'Fulfilled' },
    { id: '#1011', date: '19 Feb, 2024', customer: 'Jacob Jones', payment: 'Pending', total: '$23.00', delivery: 'N/A', items: '4 items', fulfillment: 'Unfulfilled' },
  ], []);

  const columns = useMemo(() => [
    { Header: 'Order', accessor: 'id' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Customer', accessor: 'customer' },
    { Header: 'Payment', accessor: 'payment' },
    { Header: 'Total', accessor: 'total' },
    { Header: 'Delivery', accessor: 'delivery' },
    { Header: 'Items', accessor: 'items' },
    { Header: 'Fulfillment', accessor: 'fulfillment' },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <table {...getTableProps()} className="w-full text-left">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={data.id} className="border-b">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-3 font-semibold">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="p-3">
                    {cell.column.id === 'payment' ? (
                      <span className={`px-2 py-1 text-sm rounded-full ${cell.value === 'Success' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        {cell.value}
                      </span>
                    ) : cell.column.id === 'fulfillment' ? (
                      <span className={`px-2 py-1 text-sm rounded-full ${cell.value === 'Fulfilled' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {cell.value}
                      </span>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
