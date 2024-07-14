import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";



export default function DashboardLayout({ title, children }) {
  const [open, setOpen] = useState(true);
  const [showDeletePopup, setShowlogoutPopup] = useState(false);
  const [currUsr, setCurrUsr] = useState("");
  const navigate = useNavigate();

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        if (!localStorage.getItem("wp-scan-user")) {
          navigate("/login");
        } else {
          setCurrUsr(await JSON.parse(localStorage.getItem("wp-scan-user")));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);
  return (
    <>
      <SideNav open={open} />

      <div
        className={`w-full ${
          open ? "md:w-[calc(100%-15rem)] md:ml-60" : ""
        } bg-gray-100 min-h-screen absolute transition-all main`}
      >
        <TopNav
          open={open}
          toggle={toggle}
          title={title}
          setShowlogoutPopup={setShowlogoutPopup}
          currUsr={currUsr}
        />
        <div className="w-full text-5xl overflow-y-auto overflow-x-hidden px-[20px] md:px-[70px] py-[30px]">
          {children}
        </div>
      </div>
      {/* logout popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center z-[999] justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-semibold mb-4">Do you want to Logout</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                onClick={() => setShowlogoutPopup(false)}
              >
                No
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



