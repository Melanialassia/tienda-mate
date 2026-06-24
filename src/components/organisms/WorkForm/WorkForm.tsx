"use client";
import { useState } from "react";
import { Button } from "@/components/atoms/ui/button";
import { Input } from "@/components/atoms/ui/input";
import { Label } from "@/components/atoms/ui/label";
import { Textarea } from "@/components/atoms/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/ui/select";
import { workSchema } from "@/interfaces/work.interface";
import type { WorkFormValues } from "@/interfaces";
import { CheckCircle } from "lucide-react";

type FieldErrors = Partial<Record<keyof WorkFormValues, string>>;

const POSITIONS = [
  { value: "barista", label: "Barista / Cebador" },
  { value: "ventas", label: "Ventas y Atención al Cliente" },
  { value: "logistica", label: "Logística y Depósito" },
  { value: "administracion", label: "Administración" },
  { value: "marketing", label: "Marketing y Redes" },
];

export function WorkForm() {
  const [values, setValues] = useState<WorkFormValues>({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof WorkFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = workSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof WorkFormValues;
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
        <h3 className="font-heading text-2xl font-bold text-mate-800">
          ¡Postulación recibida!
        </h3>
        <p className="text-muted-foreground">
          Revisaremos tu perfil y te contactaremos si hay una oportunidad.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setValues({
              name: "",
              email: "",
              phone: "",
              position: "",
              message: "",
            });
          }}
        >
          Postularme a otro puesto
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="w-name">Nombre completo</Label>
          <Input
            id="w-name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="w-email">Email</Label>
          <Input
            id="w-email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="w-phone">Teléfono</Label>
          <Input
            id="w-phone"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+54 11 ..."
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="w-position">Puesto de interés</Label>
          <Select
            value={values.position}
            onValueChange={(v) => handleChange("position", v ?? "")}
          >
            <SelectTrigger id="w-position">
              <SelectValue placeholder="Seleccioná un puesto" />
            </SelectTrigger>
            <SelectContent>
              {POSITIONS.map((pos) => (
                <SelectItem key={pos.value} value={pos.value}>
                  {pos.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.position && (
            <p className="text-xs text-destructive">{errors.position}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="w-message">Sobre vos</Label>
        <Textarea
          id="w-message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Contanos tu experiencia, disponibilidad y por qué querés trabajar con nosotros..."
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-mate-800 text-cream hover:bg-mate-700 w-full sm:w-auto self-start"
      >
        Enviar Postulación
      </Button>
    </form>
  );
}
