"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { franchiseSchema } from "@/interfaces/franchise.interface";
import type { FranchiseFormValues } from "@/interfaces";
import { CheckCircle } from "lucide-react";

type FieldErrors = Partial<Record<keyof FranchiseFormValues, string>>;

const INVESTMENT_OPTIONS = [
  { value: "0-500k", label: "Hasta $500.000" },
  { value: "500k-1m", label: "$500.000 — $1.000.000" },
  { value: "1m-2m", label: "$1.000.000 — $2.000.000" },
  { value: "2m+", label: "Más de $2.000.000" },
];

export function FranchiseForm() {
  const [values, setValues] = useState<FranchiseFormValues>({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FranchiseFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = franchiseSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FranchiseFormValues;
        if (key) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-mate-600" />
        <h3 className="font-heading text-2xl font-bold text-mate-800">¡Solicitud recibida!</h3>
        <p className="text-muted-foreground">Un asesor te contactará en los próximos días hábiles.</p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", email: "", phone: "", city: "", investment: "", message: "" });
          }}
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="f-name">Nombre completo</Label>
          <Input
            id="f-name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="f-email">Email</Label>
          <Input
            id="f-email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="f-phone">Teléfono</Label>
          <Input
            id="f-phone"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+54 11 ..."
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="f-city">Ciudad</Label>
          <Input
            id="f-city"
            value={values.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Tu ciudad"
          />
          {errors.city && <p className="text-xs text-destructive">{errors.city}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="f-investment">Capacidad de inversión</Label>
        <Select value={values.investment} onValueChange={(v) => handleChange("investment", v ?? "")}>
          <SelectTrigger id="f-investment">
            <SelectValue placeholder="Seleccioná una opción" />
          </SelectTrigger>
          <SelectContent>
            {INVESTMENT_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.investment && <p className="text-xs text-destructive">{errors.investment}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="f-message">Mensaje</Label>
        <Textarea
          id="f-message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Contanos sobre tu proyecto o zona de interés..."
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-mate-800 text-cream hover:bg-mate-700 w-full sm:w-auto self-start"
      >
        Solicitar Información
      </Button>
    </form>
  );
}
