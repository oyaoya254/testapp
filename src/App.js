import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.post(
      "https://us-east4-safechama.cloudfunctions.net/getalluserinfo",
      { message: {} },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        console.log("GEtting Users Data ::", res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const myuser = Object.values(users);
  const dataUsers = myuser.map((data, index) => {
    return (
      <tr key={index} className="border-b">
        <td>
          <input
            type="checkbox"
            className="form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded"
          />
        </td>

        <td>{data.name}</td>
        <td>{data.role}</td>
        <td>{data.id_no}</td>

        <td>{data.mobile_no}</td>
        <td>13/12/2022</td>
      </tr>
    );
  });

  return (
    <>
      <main className="pt-20 -mt-2">
        <div className="mx-auto p-2">
          <div className="flex flex-wrap flex-row">
            <div className="flex-shrink max-w-full px-4 w-full">
              <p className="text-xl font-bold mt-3 mb-5">All SHG Users</p>
            </div>
            <div className="flex-shrink max-w-full px-4 w-full mb-6">
              <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                <div className="flex flex-wrap flex-row -mx-4">
                  <div className="flex-shrink max-w-full px-4 w-full">
                    <div className="w-full mb-6 overflow-x-auto">
                      <table className="table-sorter table-bordered w-full text-left text-gray-600 ">
                        <thead>
                          <tr className="bg-gray-100">
                            <th data-sortable="false">
                              <input
                                id="check_all"
                                type="checkbox"
                                className="form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded"
                              />
                            </th>

                            <th>Name</th>
                            <th>Role</th>
                            <th>ID No.</th>
                            <th>Contacts</th>
                            <th>Date added</th>
                          </tr>
                        </thead>
                        <tbody>{dataUsers}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
