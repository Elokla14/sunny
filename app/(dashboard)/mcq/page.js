import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MCQ() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">MCQs</h1>
          <p className="text-muted-foreground mt-2">
            Create multiple choice questions to assess student understanding.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">❓</span>
              MCQs
            </CardTitle>
            <CardDescription>
              This feature is coming soon! You'll be able to create, customize, and generate multiple choice questions here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="text-6xl mb-4" aria-hidden="true">🚧</div>
              <h3 className="text-lg font-semibold mb-2">Under Construction</h3>
              <p className="text-muted-foreground mb-6">
                We're working hard to bring you an amazing MCQ generation tool.
              </p>
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700">
                Get Notified When Ready
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
