import { z } from "zod";

const emailField = z
  .string()
  .email("Ingresá un email válido")
  .refine((val) => /^[\x00-\x7F]*$/.test(val), "El email no puede contener tildes ni caracteres especiales");

const phoneField = z
  .string()
  .regex(/^\d+$/, "El teléfono solo puede contener números")
  .min(8, "Ingresá al menos 8 dígitos")
  .max(14, "Máximo 14 dígitos");

export const franchiseSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: emailField,
  phone: phoneField,
  city: z.string().min(2, "La ciudad es requerida"),
  investment: z.string().min(1, "Seleccioná una opción"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type FranchiseFormValues = z.infer<typeof franchiseSchema>;
