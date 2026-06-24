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

export const workSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: emailField,
  phone: phoneField,
  position: z.string().min(1, "Seleccioná una posición"),
  message: z.string().min(10, "Contanos algo sobre vos"),
});

export type WorkFormValues = z.infer<typeof workSchema>;
