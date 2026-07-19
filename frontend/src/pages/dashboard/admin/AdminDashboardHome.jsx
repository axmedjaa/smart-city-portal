import { useEffect, useState } from "react";
import api from "@/api/api";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Users,
  User,
  ShieldCheck,
  UserCog,
  Building2,
  FolderTree,
  ClipboardList,
  Clock,
  Loader2,
  CheckCircle,
} from "lucide-react";

import { toast } from "sonner";

const AdminDashboardHome = () => {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalUsers: 0,
    citizens: 0,
    officers: 0,
    admins: 0,
    totalDepartments: 0,
    totalCategories: 0,
    totalComplaints: 0,
    pendingComplaints: 0,
    inProgressComplaints: 0,
    resolvedComplaints: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [dashboardResponse, usersResponse] = await Promise.all([
          api.get("/dashboard"),
          api.get("/users"),
        ]);

        const users = usersResponse.data;

        setStats({
          ...dashboardResponse.data,
          citizens: users.filter((u) => u.role === "CITIZEN").length,
          officers: users.filter((u) => u.role === "OFFICER").length,
          admins: users.filter((u) => u.role === "ADMIN").length,
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Citizens",
      value: stats.citizens,
      icon: User,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Officers",
      value: stats.officers,
      icon: ShieldCheck,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Admins",
      value: stats.admins,
      icon: UserCog,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Departments",
      value: stats.totalDepartments,
      icon: Building2,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Categories",
      value: stats.totalCategories,
      icon: FolderTree,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Complaints",
      value: stats.totalComplaints,
      icon: ClipboardList,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Pending",
      value: stats.pendingComplaints,
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "In Progress",
      value: stats.inProgressComplaints,
      icon: Loader2,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Resolved",
      value: stats.resolvedComplaints,
      icon: CheckCircle,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>

          <p className="text-muted-foreground mt-2">
            Welcome to the Smart City Complaint Management System.
          </p>
        </div>
      </div>

      {/* Statistics Cards */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>

                  <h2 className="text-3xl font-bold mt-3">{card.value}</h2>
                </div>
                <div className={`rounded-full p-3 ${card.color}`}>
                  <Icon
                    className={`h-6 w-6 ${
                      card.title === "In Progress" ? "animate-spin" : ""
                    }`}
                  />
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Bottom Section */}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Overview */}

        <Card>
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex justify-between">
              <span>Total Users</span>
              <span className="font-bold">{stats.totalUsers}</span>
            </div>

            <div className="flex justify-between">
              <span>Total Departments</span>
              <span className="font-bold">{stats.totalDepartments}</span>
            </div>

            <div className="flex justify-between">
              <span>Total Categories</span>
              <span className="font-bold">{stats.totalCategories}</span>
            </div>

            <div className="flex justify-between">
              <span>Total Complaints</span>
              <span className="font-bold">{stats.totalComplaints}</span>
            </div>
          </CardContent>
        </Card>

        {/* Complaint Status */}

        <Card>
          <CardHeader>
            <CardTitle>Complaint Status</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex justify-between">
              <span>Pending</span>
              <span className="font-bold text-orange-600">
                {stats.pendingComplaints}
              </span>
            </div>

            <div className="flex justify-between">
              <span>In Progress</span>
              <span className="font-bold text-blue-600">
                {stats.inProgressComplaints}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Resolved</span>
              <span className="font-bold text-green-600">
                {stats.resolvedComplaints}
              </span>
            </div>

            <div className="pt-2">
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${
                      stats.totalComplaints
                        ? (stats.resolvedComplaints / stats.totalComplaints) *
                          100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                Resolution Rate
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
