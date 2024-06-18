import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/AdminNavbar';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const token = localStorage.getItem('authToken');
    console.log('Fetching transactions with token:', token);
    try {
      const response = await fetch('https://localhost:7133/api/Transaction', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      console.log('Response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Transaction data:', data);
        setTransactions(data);
      } else {
        const errorData = await response.json();
        console.log('Error fetching transactions:', errorData);
        alert('Failed to Get Data: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      alert('An error occurred while fetching transactions.');
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">All Transactions</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Transaction ID</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Vehicle ID</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">User ID</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Transaction Date</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{transaction.id}</td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{transaction.vehicleId}</td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{transaction.userId}</td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">${transaction.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transactions;
