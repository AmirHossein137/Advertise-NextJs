import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/signin')
  }
  return (
    <div>
        <DashboardPage />
    </div>
  )
}

export default Dashboard;