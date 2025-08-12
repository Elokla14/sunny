import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Sparkles, TrendingUp, Clock, FileQuestion, BookOpen, CheckSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 via-background to-yellow-500/10 p-8">
        <div className="relative">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-yellow-500 text-white border-0">
            ✨ Welcome back
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Welcome to Sunny
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your own personal Teaching Assistant.
          </p>
          <div className="mt-6 flex items-center gap-4">
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Objectives</CardTitle>
            <Target className="h-4 w-4 text-blue-500" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MCQs</CardTitle>
            <FileQuestion className="h-4 w-4 text-yellow-500" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instructor Manuals</CardTitle>
            <BookOpen className="h-4 w-4 text-green-500" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grading Rubrics</CardTitle>
            <CheckSquare className="h-4 w-4 text-purple-500" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">+5 this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link 
          href="/learning-objectives"
          className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        >
          <Card className="border-border/50 hover:border-blue-500/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>Learning Objectives</CardTitle>
              <CardDescription>
                Create learning objectives for your courses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-blue-400 hover:text-blue-300 font-medium">
                Get started →
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link 
          href="/mcq"
          className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded-lg"
        >
          <Card className="border-border/50 hover:border-yellow-500/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <FileQuestion className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>MCQs</CardTitle>
              <CardDescription>
                Create multiple choice questions to assess student understanding.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-yellow-400 hover:text-yellow-300 font-medium">
                Generate →
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link 
          href="/instructor-manual"
          className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
        >
          <Card className="border-border/50 hover:border-green-500/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>Instructor Manuals</CardTitle>
              <CardDescription>
                Generate comprehensive instructor manuals with teaching guidelines and resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-green-400 hover:text-green-300 font-medium">
                Create →
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link 
          href="/grading-rubric"
          className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg"
        >
          <Card className="border-border/50 hover:border-purple-500/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <CheckSquare className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>Grading Rubrics</CardTitle>
              <CardDescription>
                Create detailed grading rubrics to ensure consistent and fair assessment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-purple-400 hover:text-purple-300 font-medium">
                Build →
              </span>
            </CardContent>
          </Card>
        </Link>
      </div>


    </div>
  );
}
