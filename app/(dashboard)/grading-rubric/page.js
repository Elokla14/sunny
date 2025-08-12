import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GradingRubricGenerator() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Grading Rubric Generator</h1>
          <p className="text-muted-foreground mt-2">
            Create detailed grading rubrics to ensure consistent and fair assessment.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true" focusable="false">📋</span>
              Grading Rubric Generator
            </CardTitle>
            <CardDescription>
              This feature is coming soon! You'll be able to create, customize, and generate comprehensive grading rubrics here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="text-6xl mb-4" aria-hidden="true" focusable="false">🚧</div>
              <h3 className="text-lg font-semibold mb-2">Under Construction</h3>
              <p className="text-muted-foreground mb-6">
                We're working hard to bring you an amazing grading rubric generation tool.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                Get Notified When Ready
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
