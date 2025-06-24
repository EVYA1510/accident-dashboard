import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AccidentForm from "@/components/forms/AccidentForm";

export default function NewReportPage() {
  return (
    <section className="space-y-6 max-w-3xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-green-700 text-3xl">
            הוספת דיווח חדש
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <AccidentForm />
        </CardContent>
      </Card>
    </section>
  );
}
