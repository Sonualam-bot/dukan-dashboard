function TableBody() {
  const tableData = [
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
  ];

  const renderTableRows = () => {
    const numberOfRows = Array.from({ length: 17 }, () => tableData[0]);

    return numberOfRows.map((data, index) => (
      <tr key={index} className="border-b">
        <td className="whitespace-nowrap pl-6 pr-9 py-4 font-medium  text-[#146EB4] font-Inter text-[14] leading-5 ">
          {data.orderId}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{data.orderDate}</td>
        <td className="whitespace-nowrap px-6 py-4 text-right">
          {data.orderAmount}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-right">
          {data.transactionFees}
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b font-medium bg-[#F2F2F2] rounded-lg">
                <tr>
                  <th scope="col" className="pl-6 pr-9 py-4">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Order date
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Order Amount
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Transaction fees
                  </th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableBody;
