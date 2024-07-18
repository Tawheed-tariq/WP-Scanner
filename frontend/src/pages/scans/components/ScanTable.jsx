import { headings } from "constants/scanTable";

export default function ScanTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 bg-blue-50">
        <thead className="text-xs text-gray-700 uppercase bg-blue-100">
          <tr>
            {headings.map((ele, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {ele}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableData
            Name="Neil Sims"
            Email="hello.usergamil"
            Target={"React"}
            Status={'online'}
            Action={"delete"}
          />
          <TableData
            Name="Neil Sims"
            Email="hello.usergamil"
            Target={"React"}
            Status={'online'}
            Action={"delete"}
          />
          <TableData
            Name="Neil Sims"
            Email="hello.usergamil"
            Target={"React"}
            Status={'online'}
            Action={"delete"}
          />
          <TableData
            Name="Neil Sims"
            Email="hello.usergamil"
            Target={"React"}
            Status={'online'}
            Action={"delete"}
          />
        </tbody>
      </table>
    </div>
  );
}

const TableData = ({Name, Email, Target,Status, Action}) => {
  return (
    <tr className="bg-blue-50 border-b hover:bg-blue-100">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{Name}</div>
          <div className="font-normal text-gray-600">
            {Email}
          </div>
        </div>
      </th>
      <td className="px-6 py-4">{Target}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
          {Status}
        </div>
      </td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          {Action}
        </a>
      </td>
    </tr>
  );
};
