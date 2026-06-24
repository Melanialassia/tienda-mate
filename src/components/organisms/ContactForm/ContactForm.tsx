"use client";
import { useState } from "react";
import { Button } from "@/components/atoms/ui/button";
import { Input } from "@/components/atoms/ui/input";
import { Label } from "@/components/atoms/ui/label";
import { Textarea } from "@/components/atoms/ui/textarea";
import { contactSchema } from "@/interfaces/contact.interface";
import type { ContactFormValues } from "@/interfaces";
import { CheckCircle } from "lucide-react";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFormValues;
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
          ¡Mensaje enviado!
        </h3>
        <p className="text-muted-foreground">
          Nos pondremos en contacto a la brevedad.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", email: "", subject: "", message: "" });
          }}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-name">Nombre</Label>
          <Input
            id="c-name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-email">Email</Label>
          <Input
            id="c-email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="c-subject">Asunto</Label>
        <Input
          id="c-subject"
          value={values.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          placeholder="¿En qué podemos ayudarte?"
        />
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="c-message">Mensaje</Label>
        <Textarea
          id="c-message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Escribí tu mensaje acá..."
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
        Enviar Mensaje
      </Button>
    </form>
  );
}
