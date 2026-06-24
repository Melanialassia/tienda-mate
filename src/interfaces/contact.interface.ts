import { z } from "zod";

const emailField = z
  .string()
  .email("Ingresá un email válido")
  .refine((val) => /^[\x00-\x7F]*$/.test(val), "El email no puede contener tildes ni caracteres especiales");

export const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: emailField,
  subject: z.string().min(3, "El asunto es requerido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
