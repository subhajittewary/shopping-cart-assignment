export function Table({ headings, list, renderRow, ...props }) {
  const appendRow = props?.appendRow;

  return (
    <>
      {list && list.length > 0 && (
        <table>
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((rowContent, index) => renderRow(rowContent, index))}
            {appendRow && appendRow()}
          </tbody>
        </table>
      )}
    </>
  );
}
