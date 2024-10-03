function Table({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
          <tr>
          {data.map((row, rowIndex) => (
              <td key={rowIndex}>{row}</td>
            ))} 
          </tr>
      </tbody>
    </table>
  );
}

export default Table;
